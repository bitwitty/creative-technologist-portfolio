import type { Metadata } from "next";
import GeneratorClient from "@/components/GeneratorClient";

export const metadata: Metadata = {
  title: "Creative Toolkit",
  description:
    "AI-powered creative tools: copy rewriting, brief-to-copy generation, and image prompt engineering.",
};

export default function GeneratorPage() {
  return (
    <>
      <div className="wrap tk-head" id="main">
        <div className="sec-kicker reveal">
          <span className="label label--muted">
            <span className="star">{"\u2726"}</span>Live Demo / Three tools, one
            route
          </span>
          <span className="bar" aria-hidden="true"></span>
        </div>
        <div className="sec-head reveal" data-d="1">
          <h1 className="display">Creative</h1>
          <h1 className="display outline">
            Toolkit
            <span className="dot" style={{ WebkitTextStroke: 0 }}>
              .
            </span>
          </h1>
        </div>
        <p className="sub reveal" data-d="2">
          Three tools, one API route, three system prompts. Rewrite copy in any
          voice, generate first drafts from briefs, or build production-ready
          image prompts.
        </p>
      </div>
      <div
        className="wrap"
        style={{ paddingBottom: "clamp(3rem,8vw,6rem)" }}
      >
        <GeneratorClient />
      </div>
    </>
  );
}
