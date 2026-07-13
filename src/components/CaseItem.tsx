"use client";

export interface CaseMetric {
  num: string;
  u: string;
  label: string;
}

export interface CaseData {
  no: string;
  name: string;
  sub: string;
  problem: string;
  system: string;
  output: string;
  impact: string;
  stack: string[];
  metrics: CaseMetric[];
}

export default function CaseItem({
  c,
  open,
  onToggle,
}: {
  c: CaseData;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`case${open ? " is-open" : ""}`}>
      <button className="case__row" aria-expanded={open} onClick={onToggle}>
        <span className="case__no">{c.no}</span>
        <span className="case__name">
          {c.name}
          <span className="case__sub">{c.sub}</span>
        </span>
        <span className="case__plus" aria-hidden="true"></span>
      </button>
      <div className="case__panel">
        <div className="case__inner">
          <span className="case__spacer" aria-hidden="true"></span>
          <div className="case__body">
            <div className="case__fields">
              <div>
                <p className="field__label">Problem</p>
                <p className="field__text dim">{c.problem}</p>
              </div>
              <div>
                <p className="field__label">System</p>
                <p className="field__text">{c.system}</p>
              </div>
              <div>
                <p className="field__label">Output</p>
                <p className="field__text dim">{c.output}</p>
              </div>
              <div>
                <p className="field__label">Impact</p>
                <p className="field__text">{c.impact}</p>
              </div>
            </div>
            <div className="case__aside">
              <p className="field__label">Stack</p>
              <div className="stack">
                {c.stack.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="metrics">
                {c.metrics.map((m, i) => (
                  <div key={i}>
                    <p className="metric__num">
                      {m.num}
                      {m.u ? <span className="u"> {m.u}</span> : null}
                    </p>
                    <p className="metric__label">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
