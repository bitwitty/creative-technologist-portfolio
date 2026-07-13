import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "House of Atelios. AI creative production studio founded by Katherine Moffat.",
};

export default function AboutPage() {
  return (
    <div className="wrap section" id="main">
      <div className="sec-kicker reveal">
        <span className="label label--muted">
          <span className="star">{"\u2726"}</span>About
        </span>
        <span className="bar" aria-hidden="true"></span>
      </div>
      <div className="sec-head reveal" data-d="1">
        <div className="row2">
          <span className="display">The</span>
          <span className="display outline">short</span>
          <span className="display">
            version
            <span className="dot" style={{ WebkitTextStroke: 0 }}>.</span>
          </span>
        </div>
      </div>

      <div className="help__prose reveal" data-d="2">
        <p>
          <span className="lead-in">House of Atelios</span> is the independent
          practice of Katherine Moffat — a photographer, editor, and creative
          technologist with a decade of production experience across luxury
          travel, editorial, and brand work. Clients and publications include
          Expedia, Four Seasons, Sotheby{"'"}s International Realty, and Vogue
          Greece (New Talent 2025, Reportage).
        </p>
        <p>
          The practice builds AI-powered creative production systems: pipelines
          that generate, score, and deliver campaign assets with editorial
          judgment built in. Not one-off prompts — repeatable infrastructure
          that creative teams can rely on.
        </p>
        <p>
          Recent work includes an{" "}
          <a href="/#work">AI-curated travel directory</a>, a{" "}
          <a href="/#work">marketing automation agent</a>, a{" "}
          <a href="/#work">custom CRM</a>, and a{" "}
          <a href="/#work">semantic search engine over podcast transcripts</a>.
          Plus a{" "}
          <a href="/generator">live creative toolkit</a>. All on{" "}
          <a href="https://github.com/bitwitty" target="_blank" rel="noopener">
            GitHub
          </a>.
        </p>
        <p>
          The editorial background isn{"'"}t separate from the technical work —
          it{"'"}s what makes it useful. Knowing what good output looks like,
          when AI copy needs a human pass, and when a pipeline is producing
          something you{"'"}d actually publish. That judgment comes from a decade
          of editing, not a weekend of prompting.
        </p>
      </div>

      <div className="help__prose reveal" data-d="3" style={{ marginTop: "1.5rem" }}>
        <p>
          I also generate AI imagery using Midjourney, for the images and ideas
          I have in my head that have yet to be shot. My photography background
          means I know what commercially usable output looks like, and I work in
          both.
        </p>
      </div>

      {/* AI Imagery */}
      <section
        className="reveal"
        data-d="3"
        style={{ marginTop: "clamp(3rem, 8vw, 6rem)" }}
      >
        <div className="sec-kicker">
          <span className="label label--muted">
            <span className="star">{"\u2726"}</span>AI-generated imagery
          </span>
          <span className="bar" aria-hidden="true"></span>
          <span className="label label--muted">
            Midjourney / Styled as analog film
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "clamp(0.5rem, 1.5vw, 1rem)",
            marginTop: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
        >
          {[
            {
              src: "/houseofateliosimages/ai-01.png",
              alt: "AI-generated editorial portrait with cheetah in golden haze",
            },
            {
              src: "/houseofateliosimages/ai-02.png",
              alt: "AI-generated underwater figure with golden bokeh",
            },
            {
              src: "/houseofateliosimages/ai-03.png",
              alt: "AI-generated portrait with flowers against overcast sky",
            },
            {
              src: "/houseofateliosimages/ai-04.png",
              alt: "AI-generated coastal scene with motion blur",
            },
            {
              src: "/houseofateliosimages/ai-05.png",
              alt: "AI-generated silhouette on sailboat at dusk",
            },
          ].map((img) => (
            <div
              key={img.src}
              style={{
                position: "relative",
                aspectRatio: "4/5",
                overflow: "hidden",
              }}
            >
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
        <p
          style={{
            marginTop: "1rem",
            font: "500 0.74rem/1.4 var(--sans)",
            color: "var(--muted)",
          }}
        >
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
