import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      {/* Hero */}
      <section className="grid grid-cols-1 gap-8 py-20 md:grid-cols-12 md:py-32">
        <div className="md:col-span-7">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            I build the systems between the brief and the shipped asset.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted">
            Creative technologist. I design AI pipelines, automate production
            workflows, and prototype tools that give creative teams leverage.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-8">
            <Link
              href="/work"
              className="group text-sm font-medium text-foreground"
            >
              See the work{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
            <Link
              href="/generator"
              className="group text-sm font-medium text-accent"
            >
              Try the toolkit{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
        <div className="hidden md:col-span-5 md:block">
          {/* Intentionally empty. Asymmetric layout. */}
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-border py-16 md:py-24">
        <p className="text-xs font-medium uppercase tracking-widest text-muted">
          What I do
        </p>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-medium text-foreground">
              AI Pipeline Design
            </h3>
            <p className="mt-2 text-sm text-muted">
              End-to-end systems that connect APIs, LLMs, and data sources into
              reliable production workflows. Not one-off prompts. Repeatable
              infrastructure.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground">
              Rapid Prototyping
            </h3>
            <p className="mt-2 text-sm text-muted">
              Functional tools built fast. CRMs, dashboards, creative toolkits,
              trip planners. Full-stack, shipped, and running.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground">
              Creative Automation
            </h3>
            <p className="mt-2 text-sm text-muted">
              AI-assisted content generation with human-in-the-loop quality
              control. Brand voice systems, scoring models, editorial review
              layers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
