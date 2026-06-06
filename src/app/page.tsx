import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      {/* Hero */}
      <section className="grid grid-cols-1 gap-8 py-20 md:grid-cols-12 md:py-32">
        <div className="md:col-span-7">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            {/* [PLACEHOLDER] Replace with your actual headline */}
            I build systems that make creative work repeatable.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted">
            {/* [PLACEHOLDER] Replace with your actual subhead */}
            Creative technologist working across brand strategy, automation, and
            AI. I design the systems behind the output.
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
              Try the generator{" "}
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
              {/* [PLACEHOLDER] Capability 1 title */}
              Brand Systems
            </h3>
            <p className="mt-2 text-sm text-muted">
              {/* [PLACEHOLDER] Capability 1 description */}
              Voice frameworks, content pipelines, and repeatable creative
              infrastructure.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground">
              {/* [PLACEHOLDER] Capability 2 title */}
              AI Workflows
            </h3>
            <p className="mt-2 text-sm text-muted">
              {/* [PLACEHOLDER] Capability 2 description */}
              Prompt engineering, model integration, and tooling that turns
              manual processes into systems.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground">
              {/* [PLACEHOLDER] Capability 3 title */}
              Creative Operations
            </h3>
            <p className="mt-2 text-sm text-muted">
              {/* [PLACEHOLDER] Capability 3 description */}
              Project architecture, process design, and the connective tissue
              between strategy and execution.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
