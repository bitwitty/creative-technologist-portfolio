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
      <div className="wrap gen-head" id="main">
        <p className="eyebrow reveal">
          <span className="mark">{"\u2726"}</span> Live Demo / Three tools, one
          route
        </p>
        <h1
          className="huge reveal"
          data-d="1"
          style={{ marginTop: "1rem" }}
        >
          Creative
          <br />
          Toolkit<span className="dot">.</span>
        </h1>
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
