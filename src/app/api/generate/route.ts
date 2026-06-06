import Anthropic from "@anthropic-ai/sdk";
import { checkRateLimit } from "@/lib/rate-limit";
import { SYSTEM_PROMPT, buildUserPrompt } from "@/lib/prompts";
import type { GeneratorInput, GeneratorAPIResponse } from "@/types/generator";

const MAX_FIELD_LENGTH = 200;

function getIP(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function validateInput(
  body: unknown
): { valid: true; data: GeneratorInput } | { valid: false; error: string } {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "Invalid request body." };
  }

  const b = body as Record<string, unknown>;

  const requiredFields = [
    "venueName",
    "city",
    "venueType",
    "zeroProofOffering",
  ] as const;
  for (const field of requiredFields) {
    if (typeof b[field] !== "string" || (b[field] as string).trim() === "") {
      return { valid: false, error: `Missing or empty field: ${field}` };
    }
    if ((b[field] as string).length > MAX_FIELD_LENGTH) {
      return {
        valid: false,
        error: `${field} exceeds maximum length of ${MAX_FIELD_LENGTH} characters.`,
      };
    }
  }

  const dryScore = Number(b.dryScore);
  if (!Number.isInteger(dryScore) || dryScore < 1 || dryScore > 5) {
    return { valid: false, error: "dryScore must be an integer from 1 to 5." };
  }

  return {
    valid: true,
    data: {
      venueName: (b.venueName as string).trim(),
      city: (b.city as string).trim(),
      venueType: (b.venueType as string).trim(),
      zeroProofOffering: (b.zeroProofOffering as string).trim(),
      dryScore,
    },
  };
}

function parseResponse(text: string): {
  description: string;
  seoMeta: string;
  socialCaption: string;
} | null {
  const descMatch = text.split("---DESCRIPTION---")[1]?.split("---SEO---")[0];
  const seoMatch = text.split("---SEO---")[1]?.split("---CAPTION---")[0];
  const captionMatch = text.split("---CAPTION---")[1];

  if (!descMatch || !seoMatch || !captionMatch) return null;

  return {
    description: descMatch.trim(),
    seoMeta: seoMatch.trim(),
    socialCaption: captionMatch.trim(),
  };
}

export async function POST(request: Request) {
  const ip = getIP(request);
  const rateCheck = checkRateLimit(ip);

  if (!rateCheck.allowed) {
    return Response.json(
      {
        success: false,
        error: `Too many requests. Try again in ${rateCheck.retryAfter} seconds.`,
      } satisfies GeneratorAPIResponse,
      {
        status: 429,
        headers: { "Retry-After": String(rateCheck.retryAfter) },
      }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, error: "Invalid JSON." } satisfies GeneratorAPIResponse,
      { status: 400 }
    );
  }

  const validation = validateInput(body);
  if (!validation.valid) {
    return Response.json(
      {
        success: false,
        error: validation.error,
      } satisfies GeneratorAPIResponse,
      { status: 400 }
    );
  }

  try {
    const anthropic = new Anthropic();
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 600,
      system: SYSTEM_PROMPT,
      messages: [
        { role: "user", content: buildUserPrompt(validation.data) },
      ],
    });

    const textBlock = message.content.find((block) => block.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      return Response.json(
        {
          success: false,
          error: "Generation failed. No text in response.",
        } satisfies GeneratorAPIResponse,
        { status: 500 }
      );
    }

    const parsed = parseResponse(textBlock.text);
    if (!parsed) {
      return Response.json(
        {
          success: false,
          error: "Generation failed. Could not parse response.",
        } satisfies GeneratorAPIResponse,
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      data: parsed,
    } satisfies GeneratorAPIResponse);
  } catch (err) {
    console.error("Anthropic API error:", err);
    return Response.json(
      {
        success: false,
        error: "Generation failed. Please try again.",
      } satisfies GeneratorAPIResponse,
      { status: 500 }
    );
  }
}
