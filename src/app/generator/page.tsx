import type { Metadata } from "next";
import GeneratorClient from "@/components/GeneratorClient";

export const metadata: Metadata = {
  title: "Brand Voice Generator",
  description:
    "Generate venue descriptions, SEO meta, and social captions in Dry Trip's voice.",
};

export default function GeneratorPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <section className="py-16 md:py-24">
        <p className="text-xs font-medium uppercase tracking-widest text-muted">
          Live Demo
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Brand Voice Generator
        </h1>
        <p className="mt-4 max-w-lg text-sm text-muted">
          Generate venue descriptions, SEO meta, and social captions in Dry
          Trip's voice. Built on Anthropic's API with a tuned system prompt.
        </p>
      </section>
      <section className="pb-24">
        <GeneratorClient />
      </section>
    </div>
  );
}
