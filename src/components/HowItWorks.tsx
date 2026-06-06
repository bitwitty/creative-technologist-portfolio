"use client";

export default function HowItWorks() {
  return (
    <details className="group border-t border-border">
      <summary className="cursor-pointer py-5 text-sm font-medium text-foreground">
        <span className="group-open:hidden">+ How this works</span>
        <span className="hidden group-open:inline">- How this works</span>
      </summary>
      <div className="space-y-6 pb-8 text-sm leading-relaxed text-muted">
        <div>
          <p className="font-medium text-foreground">Input</p>
          <p className="mt-1">
            You provide five data points: venue name, city, venue type, a
            description of the zero-proof offering, and a Dry Score (1-5). These
            are structured inputs, not a chat prompt.
          </p>
        </div>
        <div>
          <p className="font-medium text-foreground">Voice Rules</p>
          <p className="mt-1">
            A system prompt encodes Dry Trip's editorial voice: direct,
            confident, sensory, no hedging, no filler. Two real Dry Trip posts
            serve as golden references for tone calibration. The model matches
            this voice, not a generic one.
          </p>
        </div>
        <div>
          <p className="font-medium text-foreground">Output</p>
          <p className="mt-1">
            The model returns three pieces: a 60-word venue description in
            voice, a factual SEO meta description under 155 characters, and a
            social caption. Each is structured and copyable, ready to drop into a
            CMS or scheduling tool.
          </p>
        </div>
        <div>
          <p className="font-medium text-foreground">Architecture</p>
          <p className="mt-1">
            This runs on Anthropic's Claude API via a server-side route handler.
            Your inputs never leave the server. Rate-limited to prevent abuse.
            No data is stored.
          </p>
        </div>
      </div>
    </details>
  );
}
