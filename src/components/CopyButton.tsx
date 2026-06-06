"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: select text for manual copy
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="text-xs text-muted transition-colors hover:text-foreground"
      aria-label={copied ? "Copied" : "Copy to clipboard"}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
