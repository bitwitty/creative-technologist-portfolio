"use client";

import { useState } from "react";
import type {
  ToolkitMode,
  ToolkitInput,
  ToolkitOutput,
  ToolkitAPIResponse,
} from "@/types/generator";

const VOICES = [
  "Editorial",
  "Technical",
  "Conversational",
  "Luxury",
  "Minimalist",
  "Urgent",
];

const CHANNELS = [
  "Landing page",
  "Email",
  "LinkedIn post",
  "Instagram caption",
  "Product page",
  "Ad copy",
];

const STYLES = [
  "Photoreal, editorial",
  "Flat illustration",
  "3D render, studio",
  "Film photography, analog",
  "Abstract, geometric",
  "Watercolor, painterly",
];

interface GeneratorFormProps {
  mode: ToolkitMode;
  onResult: (mode: ToolkitMode, data: ToolkitOutput) => void;
  onError: (error: string) => void;
  onLoading: (loading: boolean) => void;
}

const inputClasses =
  "w-full border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted/50 transition-colors duration-200 focus:border-foreground focus:outline-none";
const labelClasses =
  "block font-mono text-xs text-muted";

export default function GeneratorForm({
  mode,
  onResult,
  onError,
  onLoading,
}: GeneratorFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Rewrite state
  const [copy, setCopy] = useState("");
  const [voice, setVoice] = useState("");

  // Brief state
  const [product, setProduct] = useState("");
  const [audience, setAudience] = useState("");
  const [channel, setChannel] = useState("");
  const [constraint, setConstraint] = useState("");

  // Image prompt state
  const [concept, setConcept] = useState("");
  const [style, setStyle] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let input: ToolkitInput;
    if (mode === "rewrite") {
      if (!copy || !voice) { onError("All fields are required."); return; }
      input = { mode: "rewrite", copy, voice };
    } else if (mode === "brief") {
      if (!product || !audience || !channel || !constraint) { onError("All fields are required."); return; }
      input = { mode: "brief", product, audience, channel, constraint };
    } else {
      if (!concept || !style) { onError("All fields are required."); return; }
      input = { mode: "image-prompt", concept, style };
    }

    setIsSubmitting(true);
    onLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      const json: ToolkitAPIResponse = await res.json();
      if (!json.success || !json.data) {
        onError(json.error || "Something went wrong.");
      } else {
        onResult(mode, json.data);
      }
    } catch {
      onError("Network error. Check your connection and try again.");
    } finally {
      setIsSubmitting(false);
      onLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {mode === "rewrite" && (
        <>
          <div>
            <label htmlFor="copy" className={labelClasses}>Copy to rewrite</label>
            <textarea
              id="copy"
              maxLength={500}
              rows={4}
              value={copy}
              onChange={(e) => setCopy(e.target.value)}
              placeholder="Paste the copy you want rewritten"
              className={`mt-2 resize-none ${inputClasses}`}
              required
            />
            <p className="mt-1 text-right font-mono text-xs text-muted/50">
              {copy.length}/500
            </p>
          </div>
          <div>
            <label htmlFor="voice" className={labelClasses}>Target voice</label>
            <select
              id="voice"
              value={voice}
              onChange={(e) => setVoice(e.target.value)}
              className={`mt-2 ${inputClasses}`}
              required
            >
              <option value="">Select voice</option>
              {VOICES.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>
        </>
      )}

      {mode === "brief" && (
        <>
          <div>
            <label htmlFor="product" className={labelClasses}>Product or service</label>
            <input
              id="product"
              type="text"
              maxLength={200}
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="e.g. A project management tool for creative teams"
              className={`mt-2 ${inputClasses}`}
              required
            />
          </div>
          <div>
            <label htmlFor="audience" className={labelClasses}>Target audience</label>
            <input
              id="audience"
              type="text"
              maxLength={200}
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              placeholder="e.g. Marketing managers at mid-size agencies"
              className={`mt-2 ${inputClasses}`}
              required
            />
          </div>
          <div>
            <label htmlFor="channel" className={labelClasses}>Channel</label>
            <select
              id="channel"
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
              className={`mt-2 ${inputClasses}`}
              required
            >
              <option value="">Select channel</option>
              {CHANNELS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="constraint" className={labelClasses}>Constraint</label>
            <input
              id="constraint"
              type="text"
              maxLength={200}
              value={constraint}
              onChange={(e) => setConstraint(e.target.value)}
              placeholder="e.g. Under 100 words, no jargon, include a free trial CTA"
              className={`mt-2 ${inputClasses}`}
              required
            />
          </div>
        </>
      )}

      {mode === "image-prompt" && (
        <>
          <div>
            <label htmlFor="concept" className={labelClasses}>Concept</label>
            <textarea
              id="concept"
              maxLength={500}
              rows={3}
              value={concept}
              onChange={(e) => setConcept(e.target.value)}
              placeholder="Describe what you want to see. e.g. A ceramic mug on a rustic wooden table, morning light, steam rising"
              className={`mt-2 resize-none ${inputClasses}`}
              required
            />
            <p className="mt-1 text-right font-mono text-xs text-muted/50">
              {concept.length}/500
            </p>
          </div>
          <div>
            <label htmlFor="style" className={labelClasses}>Style direction</label>
            <select
              id="style"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className={`mt-2 ${inputClasses}`}
              required
            >
              <option value="">Select style</option>
              {STYLES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-foreground px-8 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:opacity-50"
      >
        {isSubmitting ? "Generating..." : "Generate"}
      </button>
    </form>
  );
}
