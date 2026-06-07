import type { Metadata } from "next";
import Image from "next/image";

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
      {/* AI Imagery */}
      <section className="reveal" data-d="3" style={{ marginTop: "clamp(3rem, 8vw, 6rem)" }}>
        <div className="section__label">
          <p className="eyebrow">AI-generated imagery</p>
          <span className="bar" aria-hidden="true"></span>
          <p className="eyebrow">Midjourney / Styled as analog film</p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "clamp(0.5rem, 1.5vw, 1rem)",
          marginTop: "clamp(1.5rem, 3vw, 2.5rem)",
        }}>
          {[
            { src: "/houseofateliosimages/ai-01.png", alt: "AI-generated editorial portrait with cheetah in golden haze" },
            { src: "/houseofateliosimages/ai-02.png", alt: "AI-generated underwater figure with golden bokeh" },
            { src: "/houseofateliosimages/ai-03.png", alt: "AI-generated portrait with flowers against overcast sky" },
            { src: "/houseofateliosimages/ai-04.png", alt: "AI-generated coastal scene with motion blur" },
            { src: "/houseofateliosimages/ai-05.png", alt: "AI-generated silhouette on sailboat at dusk" },
          ].map((img) => (
            <div key={img.src} style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden" }}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 20vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        <p style={{
          marginTop: "1rem",
          font: "400 0.74rem/1.4 var(--mono)",
          color: "var(--muted)",
        }}>
          More at{" "}
          <a
            href="https://www.instagram.com/houseofatelios/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", transition: "opacity 0.2s" }}
          >
            @houseofatelios
          </a>
        </p>
      </section>
    </div>
  );
}
