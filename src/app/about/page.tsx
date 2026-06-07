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
              <dd>AI creative systems</dd>
            </div>
            <div className="fact">
              <dt>Also</dt>
              <dd>Photographer / Editor / Writer</dd>
            </div>
            <div className="fact">
              <dt>AI imagery</dt>
              <dd><a href="https://www.instagram.com/houseofatelios/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>@houseofatelios</a></dd>
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
              <span className="lead-in">For the last nine years</span> I've
              been a writer, editor, content strategist, and photographer.
              I've freelanced for Expedia and Four Seasons, handled marketing
              for Sotheby's International Realty, ran editorial for a health
              publication for nearly five years, and was named a Vogue Greece
              New Talent in 2025.
            </p>
            <p>
              In the last three months I've shipped five products using AI: a
              travel directory that scores 73 venues through automated research
              and scoring with manual review, a marketing agent that generates
              SEO and social drafts across three brands weekly, a CRM that
              replaced a client's Notion setup and is used daily, a podcast
              knowledge engine, and this portfolio with a live creative toolkit.
              All on GitHub.
            </p>
            <p>
              I also generate AI imagery using Midjourney, for the images and
              ideas I have in my head that have yet to be shot. My photography
              background means I know what commercially usable output looks
              like, and I work in both.
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
