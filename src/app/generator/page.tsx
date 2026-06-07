import type { Metadata } from "next";
import GeneratorClient from "@/components/GeneratorClient";

export const metadata: Metadata = {
  title: "Creative Toolkit",
  description:
    "AI-powered creative tools: copy rewriting, brief-to-copy generation, and image prompt engineering.",
};

export default function GeneratorPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <section className="py-20 md:py-32">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Live Demo
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
          Creative Toolkit<span className="text-accent">.</span>
        </h1>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
          Three tools, one API route, three system prompts. Structured inputs,
          constrained generation, channel-ready outputs.
        </p>
      </section>
      <section className="pb-24">
        <GeneratorClient />
      </section>
    </div>
  );
}
