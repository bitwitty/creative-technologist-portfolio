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
    <div className="out-block">
      <div className="out-block__head">
        <p className="out-block__label">{label}</p>
        <CopyButton text={content} />
      </div>
      <p className="out-block__text">{content}</p>
      {detail ? <p className="out-block__detail">{detail}</p> : null}
    </div>
  );
}

function Skeleton() {
  return (
    <div>
      {[0, 1, 2].map((i) => (
        <div className="skl" key={i}>
          <div className="skl__bar" style={{ width: "28%" }}></div>
          <div
            className="skl__bar"
            style={{ width: "100%", marginTop: "0.8rem" }}
          ></div>
          <div className="skl__bar" style={{ width: "80%" }}></div>
        </div>
      ))}
    </div>
  );
}

function RewriteResult({ data }: { data: RewriteOutput }) {
  return (
    <div>
      {data.rewrites.map((r, i) => (
        <OutputBlock key={i} label={r.voice} content={r.text} />
      ))}
    </div>
  );
}

function BriefResult({ data }: { data: BriefOutput }) {
  return (
    <div>
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
    <div>
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
      <div className="out-error">
        <p>{error}</p>
      </div>
    );
  }

  if (!data) {
    return <div className="out-empty">{">"} Results will appear here.</div>;
  }

  if (mode === "rewrite")
    return <RewriteResult data={data as RewriteOutput} />;
  if (mode === "brief") return <BriefResult data={data as BriefOutput} />;
  return <ImagePromptResult data={data as ImagePromptOutput} />;
}
