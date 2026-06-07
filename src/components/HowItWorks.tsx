export default function HowItWorks() {
  return (
    <details className="group border-t border-border">
      <summary className="cursor-pointer py-5 text-sm font-medium text-foreground transition-colors hover:text-accent">
        <span className="group-open:hidden">+ How this works</span>
        <span className="hidden group-open:inline">- How this works</span>
      </summary>
      <div className="space-y-6 pb-8 text-sm leading-relaxed text-muted">
        <div>
          <p className="font-medium text-foreground">Input</p>
          <p className="mt-1">
            Each tool collects structured inputs, not a freeform chat prompt.
            The rewriter takes existing copy and a target voice. The brief tool
            takes a creative brief. The image prompt tool takes a concept and
            style direction.
          </p>
        </div>
        <div>
          <p className="font-medium text-foreground">System prompts</p>
          <p className="mt-1">
            Each mode runs against a purpose-built system prompt that constrains
            the model's output format, quality bar, and behavior. This is prompt
            engineering as architecture, not as conversation.
          </p>
        </div>
        <div>
          <p className="font-medium text-foreground">Output</p>
          <p className="mt-1">
            Responses are parsed into structured, labelled blocks. Copy is
            immediately usable, not a chat response you need to extract from.
            Every block is copyable with one click.
          </p>
        </div>
        <div>
          <p className="font-medium text-foreground">Architecture</p>
          <p className="mt-1">
            Three modes, one API route, three system prompts. Built on
            Anthropic's Claude API via a server-side route handler. Inputs
            validated and rate-limited server-side. No data stored.
          </p>
        </div>
      </div>
    </details>
  );
}
