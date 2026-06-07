"use client";

import { useState } from "react";

const ITEMS = [
  {
    t: "Input",
    d: "Each tool collects structured inputs, not a freeform chat prompt. The rewriter takes existing copy and a target voice. The brief tool takes a creative brief. The image prompt tool takes a concept and style direction.",
  },
  {
    t: "System prompts",
    d: "Each mode runs against a purpose-built system prompt that constrains the model's output format, quality bar, and behavior. This is prompt engineering as architecture, not as conversation.",
  },
  {
    t: "Output",
    d: "Responses are parsed into structured, labelled blocks. Copy is immediately usable, not a chat response you need to extract from. Every block is copyable with one click.",
  },
  {
    t: "Architecture",
    d: "Three modes, one API route, three system prompts. Built on Anthropic's Claude API via a server-side route handler. Inputs validated and rate-limited server-side. No data stored.",
  },
];

export default function HowItWorks() {
  const [open, setOpen] = useState(false);

  return (
    <details
      className="hiw"
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="hiw__summary">
        <span className="sign">{open ? "\u2212" : "+"}</span> How this works
      </summary>
      <div className="hiw__grid">
        {ITEMS.map((it) => (
          <div className="hiw__item" key={it.t}>
            <p>{it.t}</p>
            <p>{it.d}</p>
          </div>
        ))}
      </div>
    </details>
  );
}
