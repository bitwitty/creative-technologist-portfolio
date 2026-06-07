interface CaseStudyCardProps {
  title: string;
  problem: string;
  system: string;
  stack: string[];
  output: string;
  impact: string;
  number: string;
}

export default function CaseStudyCard({
  title,
  problem,
  system,
  stack,
  output,
  impact,
  number,
}: CaseStudyCardProps) {
  return (
    <article className="group border-t border-border py-12 pl-0 transition-all duration-300 hover:border-l-2 hover:border-l-accent hover:pl-6 md:py-16">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-accent">{number}</span>
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
          {title}
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="space-y-8 md:col-span-7">
          <div>
            <p className="font-mono text-xs text-muted">Problem</p>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground">
              {problem}
            </p>
          </div>
          <div>
            <p className="font-mono text-xs text-muted">System</p>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground">
              {system}
            </p>
          </div>
          <div>
            <p className="font-mono text-xs text-muted">Output</p>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground">
              {output}
            </p>
          </div>
          <div>
            <p className="font-mono text-xs text-muted">Impact</p>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground">
              {impact}
            </p>
          </div>
        </div>
        <div className="md:col-span-5">
          <p className="font-mono text-xs text-muted">Stack</p>
          <p className="mt-2 font-mono text-sm text-muted">
            {stack.join(" / ")}
          </p>
        </div>
      </div>
    </article>
  );
}
