"use client";

/**
 * CaseStudyCard - Accordion-style case study component.
 * Used on the Work page for expandable project details.
 * This component supports the accordion pattern with metrics.
 */

interface CaseMetric {
  num: string;
  u: string;
  label: string;
}

export interface CaseStudyCardProps {
  number: string;
  title: string;
  sub?: string;
  problem: string;
  system: string;
  stack: string[];
  output: string;
  impact: string;
  metrics?: CaseMetric[];
  open?: boolean;
  onToggle?: () => void;
}

export default function CaseStudyCard({
  number,
  title,
  sub,
  problem,
  system,
  stack,
  output,
  impact,
  metrics,
  open = false,
  onToggle,
}: CaseStudyCardProps) {
  return (
    <div className={`case${open ? " is-open" : ""}`}>
      <button
        className="case__row"
        aria-expanded={open}
        onClick={onToggle}
      >
        <span className="case__no">{number}</span>
        <span className="case__name">
          {title}
          {sub && (
            <>
              .{" "}
              <span className="thin" style={{ color: "var(--muted)" }}>
                {sub}
              </span>
            </>
          )}
        </span>
        <span className="case__toggle">
          {open ? "Close" : "View"}
          <span className="case__plus" aria-hidden="true"></span>
        </span>
      </button>
      <div className="case__panel">
        <div className="case__inner">
          <div className="case__fields">
            <div>
              <p className="field__label">Problem</p>
              <p className="field__text dim">{problem}</p>
            </div>
            <div>
              <p className="field__label">System</p>
              <p className="field__text">{system}</p>
            </div>
            <div>
              <p className="field__label">Output</p>
              <p className="field__text dim">{output}</p>
            </div>
            <div>
              <p className="field__label">Impact</p>
              <p className="field__text">{impact}</p>
            </div>
          </div>
          <div className="case__aside">
            <p className="field__label">Stack</p>
            <div className="stack">
              {stack.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
            {metrics && metrics.length > 0 && (
              <div className="metrics">
                {metrics.map((m, i) => (
                  <div key={i}>
                    <p className="metric__num">
                      {m.num}
                      {m.u ? <span className="u"> {m.u}</span> : null}
                    </p>
                    <p className="metric__label">{m.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
