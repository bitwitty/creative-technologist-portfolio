import type { Metadata } from "next";
import CaseStudyCard from "@/components/CaseStudyCard";

export const metadata: Metadata = {
  title: "Work",
  description:
    "[PLACEHOLDER] Selected projects and case studies by Kat Moffat.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <section className="py-16 md:py-24">
        <p className="text-xs font-medium uppercase tracking-widest text-muted">
          Selected Work
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Systems I have built.
        </h1>
      </section>

      <CaseStudyCard
        title="Brand Voice Pipeline: Dry Trip"
        problem="[PLACEHOLDER] Describe the brand voice consistency problem Dry Trip faced."
        system="[PLACEHOLDER] Describe the pipeline architecture, how inputs flow through the system prompt to structured outputs."
        stack={["Next.js", "Anthropic API", "TypeScript", "Vercel"]}
        output="[PLACEHOLDER] What the system produces: venue descriptions, SEO meta, social captions in a consistent voice."
        impact="[PLACEHOLDER] Measurable results. Time saved, consistency improvements, adoption metrics."
      />

      {/* Add more CaseStudyCard components here */}
    </div>
  );
}
