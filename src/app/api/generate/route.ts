import Anthropic from "@anthropic-ai/sdk";
import { checkRateLimit } from "@/lib/rate-limit";
import {
  REWRITE_SYSTEM_PROMPT,
  BRIEF_SYSTEM_PROMPT,
  IMAGE_PROMPT_SYSTEM_PROMPT,
  buildRewritePrompt,
  buildBriefPrompt,
  buildImagePromptPrompt,
} from "@/lib/prompts";
import type {
  ToolkitInput,
  ToolkitAPIResponse,
  RewriteOutput,
  BriefOutput,
  ImagePromptOutput,
} from "@/types/generator";

const MAX_FIELD_LENGTH = 500;

function getIP(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function validateInput(
  body: unknown
): { valid: true; data: ToolkitInput } | { valid: false; error: string } {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "Invalid request body." };
  }

  const b = body as Record<string, unknown>;

  if (!b.mode || !["rewrite", "brief", "image-prompt"].includes(b.mode as string)) {
    return { valid: false, error: "Invalid mode." };
  }

  function checkString(field: string, maxLen = MAX_FIELD_LENGTH): string | null {
    const val = b[field];
    if (typeof val !== "string" || val.trim() === "") return `Missing or empty: ${field}`;
    if (val.length > maxLen) return `${field} exceeds ${maxLen} characters.`;
    return null;
  }

  if (b.mode === "rewrite") {
    const err = checkString("copy") || checkString("voice", 100);
    if (err) return { valid: false, error: err };
    return {
      valid: true,
      data: {
        mode: "rewrite",
        copy: (b.copy as string).trim(),
        voice: (b.voice as string).trim(),
      },
    };
  }

  if (b.mode === "brief") {
    const err =
      checkString("product", 200) ||
      checkString("audience", 200) ||
      checkString("channel", 100) ||
      checkString("constraint", 200);
    if (err) return { valid: false, error: err };
    return {
      valid: true,
      data: {
        mode: "brief",
        product: (b.product as string).trim(),
        audience: (b.audience as string).trim(),
        channel: (b.channel as string).trim(),
        constraint: (b.constraint as string).trim(),
      },
    };
  }

  // image-prompt
  const err = checkString("concept") || checkString("style", 200);
  if (err) return { valid: false, error: err };
  return {
    valid: true,
    data: {
      mode: "image-prompt",
      concept: (b.concept as string).trim(),
      style: (b.style as string).trim(),
    },
  };
}

function getSystemPrompt(mode: string): string {
  if (mode === "rewrite") return REWRITE_SYSTEM_PROMPT;
  if (mode === "brief") return BRIEF_SYSTEM_PROMPT;
  return IMAGE_PROMPT_SYSTEM_PROMPT;
}

function getUserPrompt(data: ToolkitInput): string {
  if (data.mode === "rewrite") return buildRewritePrompt(data);
  if (data.mode === "brief") return buildBriefPrompt(data);
  return buildImagePromptPrompt(data);
}

function parseRewriteResponse(text: string): RewriteOutput | null {
  const r1 = text.split("---REWRITE-1---")[1]?.split("---REWRITE-2---")[0]?.trim();
  const r2 = text.split("---REWRITE-2---")[1]?.split("---REWRITE-3---")[0]?.trim();
  const r3 = text.split("---REWRITE-3---")[1]?.trim();
  if (!r1 || !r2 || !r3) return null;
  return {
    rewrites: [
      { voice: "Version 1", text: r1 },
      { voice: "Version 2", text: r2 },
      { voice: "Version 3", text: r3 },
    ],
  };
}

function parseBriefResponse(text: string): BriefOutput | null {
  const headline = text.split("---HEADLINE---")[1]?.split("---BODY---")[0]?.trim();
  const body = text.split("---BODY---")[1]?.split("---CTA---")[0]?.trim();
  const cta = text.split("---CTA---")[1]?.trim();
  if (!headline || !body || !cta) return null;
  return { headline, body, cta };
}

function parseImagePromptResponse(text: string): ImagePromptOutput | null {
  const prompt = text.split("---PROMPT---")[1]?.split("---NEGATIVE---")[0]?.trim();
  const negativePrompt = text.split("---NEGATIVE---")[1]?.split("---PARAMETERS---")[0]?.trim();
  const parameters = text.split("---PARAMETERS---")[1]?.trim();
  if (!prompt || !negativePrompt || !parameters) return null;
  return { prompt, negativePrompt, parameters };
}

function parseResponse(mode: string, text: string) {
  if (mode === "rewrite") return parseRewriteResponse(text);
  if (mode === "brief") return parseBriefResponse(text);
  return parseImagePromptResponse(text);
}

export async function POST(request: Request) {
  const ip = getIP(request);
  const rateCheck = checkRateLimit(ip);

  if (!rateCheck.allowed) {
    return Response.json(
      {
        success: false,
        error: `Too many requests. Try again in ${rateCheck.retryAfter} seconds.`,
      } satisfies ToolkitAPIResponse,
      { status: 429, headers: { "Retry-After": String(rateCheck.retryAfter) } }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, error: "Invalid JSON." } satisfies ToolkitAPIResponse,
      { status: 400 }
    );
  }

  const validation = validateInput(body);
  if (!validation.valid) {
    return Response.json(
      { success: false, error: validation.error } satisfies ToolkitAPIResponse,
      { status: 400 }
    );
  }

  try {
    const anthropic = new Anthropic();
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 600,
      system: getSystemPrompt(validation.data.mode),
      messages: [{ role: "user", content: getUserPrompt(validation.data) }],
    });

    const textBlock = message.content.find((block) => block.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      return Response.json(
        { success: false, error: "Generation failed. No text in response." } satisfies ToolkitAPIResponse,
        { status: 500 }
      );
    }

    const parsed = parseResponse(validation.data.mode, textBlock.text);
    if (!parsed) {
      return Response.json(
        { success: false, error: "Generation failed. Could not parse response." } satisfies ToolkitAPIResponse,
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      mode: validation.data.mode,
      data: parsed,
    } satisfies ToolkitAPIResponse);
  } catch (err) {
    console.error("Anthropic API error:", err);
    return Response.json(
      { success: false, error: "Generation failed. Please try again." } satisfies ToolkitAPIResponse,
      { status: 500 }
    );
  }
}
