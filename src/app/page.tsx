import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      {/* Hero */}
      <section className="grid grid-cols-1 gap-8 py-24 md:grid-cols-12 md:py-40">
        <div className="md:col-span-8" style={{ animation: "fade-in-up 0.7s ease-out both" }}>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.03em] md:text-7xl lg:text-[5.5rem]">
            I build the systems between the brief and the shipped asset<span className="text-accent">.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted" style={{ animation: "fade-in-up 0.7s ease-out both", animationDelay: "120ms" }}>
            Creative technologist. I design AI pipelines, automate production
            workflows, and prototype tools that give creative teams leverage.
          </p>
          <div className="mt-12 flex gap-8" style={{ animation: "fade-in-up 0.7s ease-out both", animationDelay: "240ms" }}>
            <Link
              href="/work"
              className="group text-sm font-medium text-foreground transition-colors hover:text-accent"
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
        <div className="hidden md:col-span-4 md:flex md:flex-col md:items-end md:justify-end" style={{ animation: "fade-in-up 0.7s ease-out both", animationDelay: "360ms" }}>
          <div className="font-mono text-xs leading-loose text-muted text-right">
            <p>Creative Technologist</p>
            <p>Available for projects</p>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden border-y border-border py-3">
        <div className="flex whitespace-nowrap" style={{ animation: "ticker-scroll 30s linear infinite" }}>
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-6 pr-6 font-mono text-xs text-muted">
              <span>AI Pipeline Design</span>
              <span className="text-accent">&bull;</span>
              <span>Rapid Prototyping</span>
              <span className="text-accent">&bull;</span>
              <span>Creative Automation</span>
              <span className="text-accent">&bull;</span>
              <span>Prompt Engineering</span>
              <span className="text-accent">&bull;</span>
              <span>Full-Stack Development</span>
              <span className="text-accent">&bull;</span>
              <span>Brand Systems</span>
              <span className="text-accent">&bull;</span>
            </span>
          ))}
        </div>
      </div>

      {/* Capabilities */}
      <section className="py-20 md:py-32">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          What I do
        </p>
        <div className="mt-12 grid grid-cols-1 gap-0 md:grid-cols-12">
          <div className="border-t border-border py-8 md:col-span-5 md:pr-10">
            <span className="font-mono text-xs text-accent">01</span>
            <h3 className="mt-3 text-lg font-medium text-foreground">
              AI Pipeline Design
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              End-to-end systems that connect APIs, LLMs, and data sources into
              reliable production workflows. Not one-off prompts. Repeatable
              infrastructure.
            </p>
          </div>
          <div className="border-t border-border py-8 md:col-span-4 md:pr-10">
            <span className="font-mono text-xs text-accent">02</span>
            <h3 className="mt-3 text-lg font-medium text-foreground">
              Rapid Prototyping
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Functional tools built fast. CRMs, dashboards, creative toolkits,
              trip planners. Full-stack, shipped, and running.
            </p>
          </div>
          <div className="border-t border-border py-8 md:col-span-3">
            <span className="font-mono text-xs text-accent">03</span>
            <h3 className="mt-3 text-lg font-medium text-foreground">
              Creative Automation
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
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
