export type ToolkitMode = "rewrite" | "brief" | "image-prompt";

// Rewrite mode
export interface RewriteInput {
  mode: "rewrite";
  copy: string;
  voice: string;
}

export interface RewriteOutput {
  rewrites: { voice: string; text: string }[];
}

// Brief to Copy mode
export interface BriefInput {
  mode: "brief";
  product: string;
  audience: string;
  channel: string;
  constraint: string;
}

export interface BriefOutput {
  headline: string;
  body: string;
  cta: string;
}

// Image Prompt mode
export interface ImagePromptInput {
  mode: "image-prompt";
  concept: string;
  style: string;
}

export interface ImagePromptOutput {
  prompt: string;
  negativePrompt: string;
  parameters: string;
}

export type ToolkitInput = RewriteInput | BriefInput | ImagePromptInput;
export type ToolkitOutput = RewriteOutput | BriefOutput | ImagePromptOutput;

export interface ToolkitAPIResponse {
  success: boolean;
  mode?: ToolkitMode;
  data?: ToolkitOutput;
  error?: string;
}
