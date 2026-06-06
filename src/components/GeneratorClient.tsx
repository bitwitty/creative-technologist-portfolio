"use client";

import { useState } from "react";
import type { GeneratorOutput as OutputType } from "@/types/generator";
import GeneratorForm from "./GeneratorForm";
import GeneratorOutput from "./GeneratorOutput";
import HowItWorks from "./HowItWorks";

export default function GeneratorClient() {
  const [result, setResult] = useState<OutputType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleResult(data: OutputType) {
    setError(null);
    setResult(data);
  }

  function handleError(message: string) {
    setResult(null);
    setError(message);
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <GeneratorForm
            onResult={handleResult}
            onError={handleError}
            onLoading={setIsLoading}
          />
        </div>
        <div className="md:col-span-7">
          <GeneratorOutput data={result} isLoading={isLoading} error={error} />
        </div>
      </div>
      <div className="mt-16">
        <HowItWorks />
      </div>
    </>
  );
}
