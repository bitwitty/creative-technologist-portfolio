"use client";

import type { GeneratorOutput as OutputType } from "@/types/generator";
import CopyButton from "./CopyButton";

interface GeneratorOutputProps {
  data: OutputType | null;
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
    <div className="border-t border-border pt-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-widest text-muted">
          {label}
        </p>
        <CopyButton text={content} />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground">{content}</p>
      {detail && (
        <p className="mt-1 font-mono text-xs text-muted">{detail}</p>
      )}
    </div>
  );
}

function Skeleton() {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="border-t border-border pt-5">
          <div className="h-3 w-24 animate-pulse rounded bg-surface" />
          <div className="mt-3 space-y-2">
            <div className="h-3 w-full animate-pulse rounded bg-surface" />
            <div className="h-3 w-3/4 animate-pulse rounded bg-surface" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function GeneratorOutput({
  data,
  isLoading,
  error,
}: GeneratorOutputProps) {
  if (isLoading) return <Skeleton />;

  if (error) {
    return (
      <div className="border border-accent/20 bg-accent/5 px-4 py-3">
        <p className="text-sm text-accent">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <p className="text-sm text-muted">
        Fill in the form and hit Generate to see results here.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <OutputBlock
        label="60-word Description"
        content={data.description}
        detail={`${data.description.split(/\s+/).length} words`}
      />
      <OutputBlock
        label="SEO Meta"
        content={data.seoMeta}
        detail={`${data.seoMeta.length} characters`}
      />
      <OutputBlock label="Social Caption" content={data.socialCaption} />
    </div>
  );
}
