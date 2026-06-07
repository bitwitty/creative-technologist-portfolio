"use client";

import { useState } from "react";
import type { ToolkitMode, ToolkitOutput } from "@/types/generator";
import GeneratorForm from "./GeneratorForm";
import GeneratorOutput from "./GeneratorOutput";
import HowItWorks from "./HowItWorks";

const TABS: { mode: ToolkitMode; no: string; label: string; description: string }[] = [
  {
    mode: "rewrite",
    no: "01",
    label: "Rewrite",
    description: "Paste copy, pick a voice, get three rewrites.",
  },
  {
    mode: "brief",
    no: "02",
    label: "Brief to Copy",
    description: "Fill a creative brief, get a first draft.",
  },
  {
    mode: "image-prompt",
    no: "03",
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
      <div className="tabs" role="tablist" aria-label="Toolkit modes">
        {TABS.map((t) => (
          <button
            key={t.mode}
            role="tab"
            aria-selected={activeMode === t.mode}
            className={`tab${activeMode === t.mode ? " is-active" : ""}`}
            onClick={() => {
              setActiveMode(t.mode);
              setError(null);
            }}
          >
            <span className="tn">{t.no}</span> {t.label}
          </button>
        ))}
      </div>

      <p className="tab__desc">{activeTab.description}</p>

      <div className="gen-grid">
        <GeneratorForm
          key={activeMode}
          mode={activeMode}
          onResult={handleResult}
          onError={handleError}
          onLoading={setIsLoading}
        />
        <div className="gen-out">
          <GeneratorOutput
            mode={activeMode}
            data={results[activeMode] || null}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>

      <HowItWorks />
    </>
  );
}
