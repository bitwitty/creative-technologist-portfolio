interface CaseStudyCardProps {
  title: string;
  problem: string;
  system: string;
  stack: string[];
  output: string;
  impact: string;
}

export default function CaseStudyCard({
  title,
  problem,
  system,
  stack,
  output,
  impact,
}: CaseStudyCardProps) {
  return (
    <article className="border-t border-border py-10 md:py-14">
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
        {title}
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="space-y-6 md:col-span-7">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Problem
            </p>
            <p className="mt-2 text-sm text-foreground">{problem}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              System
            </p>
            <p className="mt-2 text-sm text-foreground">{system}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Output
            </p>
            <p className="mt-2 text-sm text-foreground">{output}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Impact
            </p>
            <p className="mt-2 text-sm text-foreground">{impact}</p>
          </div>
        </div>
        <div className="md:col-span-5">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">
            Stack
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded bg-surface px-2 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
