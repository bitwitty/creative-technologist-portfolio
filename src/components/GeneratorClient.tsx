"use client";

import { useState } from "react";
import type { ToolkitMode, ToolkitOutput } from "@/types/generator";
import GeneratorForm from "./GeneratorForm";
import GeneratorOutput from "./GeneratorOutput";
import HowItWorks from "./HowItWorks";

const TABS: { mode: ToolkitMode; label: string; description: string }[] = [
  {
    mode: "rewrite",
    label: "Rewrite",
    description: "Paste copy, pick a voice, get three rewrites.",
  },
  {
    mode: "brief",
    label: "Brief to Copy",
    description: "Fill a creative brief, get a first draft.",
  },
  {
    mode: "image-prompt",
    label: "Image Prompt",
    description: "Describe a concept, get a production-ready prompt.",
  },
];

export default function GeneratorClient() {
  const [activeMode, setActiveMode] = useState<ToolkitMode>("rewrite");
  const [results, setResults] = useState<
    Partial<Record<ToolkitMode, ToolkitOutput>>
  >({});
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleResult(mode: ToolkitMode, data: ToolkitOutput) {
    setError(null);
    setResults((prev) => ({ ...prev, [mode]: data }));
  }

  function handleError(message: string) {
    setError(message);
  }

  const activeTab = TABS.find((t) => t.mode === activeMode)!;

  return (
    <>
      {/* Tabs */}
      <div className="flex gap-0 border-b border-border">
        {TABS.map((tab) => (
          <button
            key={tab.mode}
            onClick={() => {
              setActiveMode(tab.mode);
              setError(null);
            }}
            className={`px-5 py-3 font-mono text-sm transition-colors ${
              activeMode === tab.mode
                ? "border-b-2 border-accent text-foreground"
                : "text-muted hover:text-accent"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab description */}
      <p className="mt-5 text-sm text-muted">{activeTab.description}</p>

      {/* Form + Output */}
      <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <GeneratorForm
            key={activeMode}
            mode={activeMode}
            onResult={handleResult}
            onError={handleError}
            onLoading={setIsLoading}
          />
        </div>
        <div className="md:col-span-7">
          <GeneratorOutput
            mode={activeMode}
            data={results[activeMode] || null}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>

      {/* How it works */}
      <div className="mt-20">
        <HowItWorks />
      </div>
    </>
  );
}
