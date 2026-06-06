"use client";

import type {
  ToolkitMode,
  ToolkitOutput,
  RewriteOutput,
  BriefOutput,
  ImagePromptOutput,
} from "@/types/generator";
import CopyButton from "./CopyButton";

interface GeneratorOutputProps {
  mode: ToolkitMode;
  data: ToolkitOutput | null;
  isLoading: boolean;
  error: string | null;
}

function OutputBlock({
  label,
  content,
  detail,
}: {
  label: string;
  content: string;
  detail?: string;
}) {
  return (
    <div className="border-l-2 border-accent pl-5 py-1">
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs text-muted">{label}</p>
        <CopyButton text={content} />
      </div>
      <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-foreground">
        {content}
      </p>
      {detail && (
        <p className="mt-1 font-mono text-xs text-muted/60">{detail}</p>
      )}
    </div>
  );
}

function Skeleton() {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="border-l-2 border-border pl-5 py-1">
          <div className="h-3 w-20 animate-pulse bg-surface" />
          <div className="mt-3 space-y-2">
            <div className="h-3 w-full animate-pulse bg-surface" />
            <div className="h-3 w-3/4 animate-pulse bg-surface" />
          </div>
        </div>
      ))}
    </div>
  );
}

function RewriteResult({ data }: { data: RewriteOutput }) {
  return (
    <div className="space-y-6">
      {data.rewrites.map((r, i) => (
        <OutputBlock key={i} label={r.voice} content={r.text} />
      ))}
    </div>
  );
}

function BriefResult({ data }: { data: BriefOutput }) {
  return (
    <div className="space-y-6">
      <OutputBlock label="Headline" content={data.headline} />
      <OutputBlock
        label="Body"
        content={data.body}
        detail={`${data.body.split(/\s+/).length} words`}
      />
      <OutputBlock label="CTA" content={data.cta} />
    </div>
  );
}

function ImagePromptResult({ data }: { data: ImagePromptOutput }) {
  return (
    <div className="space-y-6">
      <OutputBlock label="Prompt" content={data.prompt} />
      <OutputBlock label="Negative prompt" content={data.negativePrompt} />
      <OutputBlock label="Parameters" content={data.parameters} />
    </div>
  );
}

export default function GeneratorOutput({
  mode,
  data,
  isLoading,
  error,
}: GeneratorOutputProps) {
  if (isLoading) return <Skeleton />;

  if (error) {
    return (
      <div className="border-l-2 border-accent/40 bg-accent/5 px-4 py-3">
        <p className="text-sm text-accent">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <p className="text-sm text-muted">
        Results will appear here.
      </p>
    );
  }

  if (mode === "rewrite") return <RewriteResult data={data as RewriteOutput} />;
  if (mode === "brief") return <BriefResult data={data as BriefOutput} />;
  return <ImagePromptResult data={data as ImagePromptOutput} />;
}
