import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Katherine Moffat. Creative technologist building AI systems for creative teams.",
};

export default function AboutPage() {
  return (
    <div className="wrap about" id="main">
      <div className="about__anchor reveal">
        <p className="eyebrow">
          <span className="mark">{"\u2726"}</span> About
        </p>
        <h1 className="huge" style={{ marginTop: "0.8rem" }}>
          Katherine
          <br />
          Moffat<span className="dot">.</span>
        </h1>
      </div>
      <div className="about__grid">
        <div className="about__media reveal" data-d="1">
          {/* [PLACEHOLDER] Professional photo */}
          <div
            className="photo"
            role="img"
            aria-label="Professional photo placeholder"
          >
            <span className="photo__tag">portrait / 4:5</span>
          </div>
          <dl className="about__facts">
            <div className="fact">
              <dt>Practice</dt>
              <dd>Independent</dd>
            </div>
            <div className="fact">
              <dt>Focus</dt>
              <dd>AI systems &amp; tooling</dd>
            </div>
            <div className="fact">
              <dt>Also</dt>
              <dd>Photographer / Editor</dd>
            </div>
            <div className="fact">
              <dt>Status</dt>
              <dd>Available 2026</dd>
            </div>
          </dl>
        </div>
        <div className="about__body reveal" data-d="2">
          <div className="about__prose">
            <p>
              <span className="lead-in">I build AI-native systems</span> for
              marketing, brand, and creative teams. Pipelines, not prompts. The
              kind of infrastructure that means one person can do what used to
              take a department, without the work looking like it was done by a
              machine.
            </p>
            <p>
              I got here through the long way round. Marketing, brand strategy,
              operations, project management, creative direction, consulting.
              I've sat in enough of those seats to know that the tool is only as
              good as the workflow it fits into. So I build both.
            </p>
            <p>
              I'm also a photographer and editor. That's not a footnote. It's
              why I build human-in-the-loop review into everything, and why I
              don't ship AI-generated creative without someone making the final
              call.
            </p>
          </div>
          <div className="about__cv">
            {/* [PLACEHOLDER] Replace href with actual CV PDF path */}
            <a
              className="btn-pill btn-pill--ghost"
              href="/placeholder-cv.pdf"
              download
            >
              Download CV{" "}
              <span className="arrow" aria-hidden="true">
                {"\u2193"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
