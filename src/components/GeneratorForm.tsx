"use client";

import { useState } from "react";
import type {
  GeneratorInput,
  GeneratorOutput,
  GeneratorAPIResponse,
} from "@/types/generator";

const VENUE_TYPES = [
  "Bar",
  "Restaurant",
  "Hotel",
  "Cafe",
  "Event Space",
  "Lounge",
  "Bottle Shop",
];

interface GeneratorFormProps {
  onResult: (data: GeneratorOutput) => void;
  onError: (error: string) => void;
  onLoading: (loading: boolean) => void;
}

export default function GeneratorForm({
  onResult,
  onError,
  onLoading,
}: GeneratorFormProps) {
  const [form, setForm] = useState<GeneratorInput>({
    venueName: "",
    city: "",
    venueType: "",
    zeroProofOffering: "",
    dryScore: 3,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField<K extends keyof GeneratorInput>(
    key: K,
    value: GeneratorInput[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.venueName || !form.city || !form.venueType || !form.zeroProofOffering) {
      onError("All fields are required.");
      return;
    }

    setIsSubmitting(true);
    onLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json: GeneratorAPIResponse = await res.json();

      if (!json.success || !json.data) {
        onError(json.error || "Something went wrong.");
      } else {
        onResult(json.data);
      }
    } catch {
      onError("Network error. Check your connection and try again.");
    } finally {
      setIsSubmitting(false);
      onLoading(false);
    }
  }

  const inputClasses =
    "w-full border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted/60 focus:border-foreground focus:outline-none";
  const labelClasses = "block text-xs font-medium uppercase tracking-widest text-muted";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="venueName" className={labelClasses}>
          Venue Name
        </label>
        <input
          id="venueName"
          type="text"
          maxLength={200}
          value={form.venueName}
          onChange={(e) => updateField("venueName", e.target.value)}
          placeholder="e.g. The Botanist"
          className={`mt-2 ${inputClasses}`}
          required
        />
      </div>

      <div>
        <label htmlFor="city" className={labelClasses}>
          City
        </label>
        <input
          id="city"
          type="text"
          maxLength={200}
          value={form.city}
          onChange={(e) => updateField("city", e.target.value)}
          placeholder="e.g. Melbourne"
          className={`mt-2 ${inputClasses}`}
          required
        />
      </div>

      <div>
        <label htmlFor="venueType" className={labelClasses}>
          Venue Type
        </label>
        <select
          id="venueType"
          value={form.venueType}
          onChange={(e) => updateField("venueType", e.target.value)}
          className={`mt-2 ${inputClasses}`}
          required
        >
          <option value="">Select type</option>
          {VENUE_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="zeroProofOffering" className={labelClasses}>
          Zero-proof Offering
        </label>
        <textarea
          id="zeroProofOffering"
          maxLength={200}
          rows={3}
          value={form.zeroProofOffering}
          onChange={(e) => updateField("zeroProofOffering", e.target.value)}
          placeholder="Describe the non-alcoholic drinks, mocktails, or zero-proof options"
          className={`mt-2 resize-none ${inputClasses}`}
          required
        />
      </div>

      <fieldset>
        <legend className={labelClasses}>Dry Score</legend>
        <div className="mt-3 flex gap-2">
          {[1, 2, 3, 4, 5].map((score) => (
            <label
              key={score}
              className={`flex h-10 w-10 cursor-pointer items-center justify-center border text-sm transition-colors ${
                form.dryScore === score
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted hover:border-foreground hover:text-foreground"
              }`}
            >
              <input
                type="radio"
                name="dryScore"
                value={score}
                checked={form.dryScore === score}
                onChange={() => updateField("dryScore", score)}
                className="sr-only"
              />
              {score}
            </label>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted">
          1 = limited options, 5 = fully zero-proof focused
        </p>
      </fieldset>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-foreground py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:opacity-50"
      >
        {isSubmitting ? "Generating..." : "Generate"}
      </button>
    </form>
  );
}
