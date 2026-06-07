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

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <div className="select-wrap">
        <select
          id={id}
          className="control"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default function GeneratorForm({
  mode,
  onResult,
  onError,
  onLoading,
}: GeneratorFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [copy, setCopy] = useState("");
  const [voice, setVoice] = useState("");

  const [product, setProduct] = useState("");
  const [audience, setAudience] = useState("");
  const [channel, setChannel] = useState("");
  const [constraint, setConstraint] = useState("");

  const [concept, setConcept] = useState("");
  const [style, setStyle] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let input: ToolkitInput;
    if (mode === "rewrite") {
      if (!copy || !voice) {
        onError("All fields are required.");
        return;
      }
      input = { mode: "rewrite", copy, voice };
    } else if (mode === "brief") {
      if (!product || !audience || !channel || !constraint) {
        onError("All fields are required.");
        return;
      }
      input = { mode: "brief", product, audience, channel, constraint };
    } else {
      if (!concept || !style) {
        onError("All fields are required.");
        return;
      }
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
    <form className="gen-form" onSubmit={handleSubmit}>
      {mode === "rewrite" && (
        <>
          <div className="field">
            <label htmlFor="copy">Copy to rewrite</label>
            <textarea
              id="copy"
              className="control"
              maxLength={500}
              rows={4}
              value={copy}
              onChange={(e) => setCopy(e.target.value)}
              placeholder="Paste the copy you want rewritten"
              required
            />
            <p className="char-count">{copy.length}/500</p>
          </div>
          <SelectField
            id="voice"
            label="Target voice"
            value={voice}
            onChange={setVoice}
            options={VOICES}
            placeholder="Select voice"
          />
        </>
      )}

      {mode === "brief" && (
        <>
          <div className="field">
            <label htmlFor="product">Product or service</label>
            <input
              id="product"
              className="control"
              type="text"
              maxLength={200}
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="e.g. A project management tool for creative teams"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="audience">Target audience</label>
            <input
              id="audience"
              className="control"
              type="text"
              maxLength={200}
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              placeholder="e.g. Marketing managers at mid-size agencies"
              required
            />
          </div>
          <SelectField
            id="channel"
            label="Channel"
            value={channel}
            onChange={setChannel}
            options={CHANNELS}
            placeholder="Select channel"
          />
          <div className="field">
            <label htmlFor="constraint">Constraint</label>
            <input
              id="constraint"
              className="control"
              type="text"
              maxLength={200}
              value={constraint}
              onChange={(e) => setConstraint(e.target.value)}
              placeholder="e.g. Under 100 words, no jargon, include a free trial CTA"
              required
            />
          </div>
        </>
      )}

      {mode === "image-prompt" && (
        <>
          <div className="field">
            <label htmlFor="concept">Concept</label>
            <textarea
              id="concept"
              className="control"
              maxLength={500}
              rows={3}
              value={concept}
              onChange={(e) => setConcept(e.target.value)}
              placeholder="Describe what you want to see. e.g. A ceramic mug on a rustic wooden table, morning light, steam rising"
              required
            />
            <p className="char-count">{concept.length}/500</p>
          </div>
          <SelectField
            id="style"
            label="Style direction"
            value={style}
            onChange={setStyle}
            options={STYLES}
            placeholder="Select style"
          />
        </>
      )}

      <button type="submit" className="btn-gen" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <span className="spin" aria-hidden="true"></span> Generating
          </>
        ) : (
          "Generate"
        )}
      </button>
    </form>
  );
}
