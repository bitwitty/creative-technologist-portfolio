import type { Metadata } from "next";
import GeneratorClient from "@/components/GeneratorClient";

export const metadata: Metadata = {
  title: "Creative Toolkit",
  description:
    "AI-powered creative tools: copy rewriting, brief-to-copy generation, and image prompt engineering.",
};

export default function GeneratorPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <section className="py-16 md:py-24">
        <p className="text-xs font-medium uppercase tracking-widest text-muted">
          Live Demo
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Creative Toolkit
        </h1>
        <p className="mt-4 max-w-lg text-sm text-muted">
          Three tools, one API route, three system prompts. Rewrite copy in any
          voice, generate first drafts from briefs, or build production-ready
          image prompts.
        </p>
      </section>
      <section className="pb-24">
        <GeneratorClient />
      </section>
    </div>
  );
}
