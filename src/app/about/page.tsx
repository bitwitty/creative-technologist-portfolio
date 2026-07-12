import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Katherine Moffat. Creative technologist building AI systems for creative teams.",
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
          <span className="lead-in">For the last nine years</span> I{"'"}ve
          been a writer, editor, content strategist, and photographer. I{"'"}ve
          freelanced for Expedia and Four Seasons, handled marketing for
          Sotheby{"'"}s International Realty, ran editorial for a health
          publication for nearly five years, and was named a Vogue Greece New
          Talent in 2025.
        </p>
        <p>
          I{"'"}ve always been the person who picks up the new tool first. Not
          out of novelty — I just think in systems, and I{"'"}m always looking
          for a better one. That instinct used to mean learning a new CMS or
          figuring out analytics. Now it means building the systems myself.
        </p>
        <p>
          In the last three months I{"'"}ve shipped four products: an{" "}
          <a href="/work">AI-curated travel directory</a>, a{" "}
          <a href="/work">marketing automation agent</a>, a{" "}
          <a href="/work">custom CRM</a>, and a{" "}
          <a href="/work">semantic search engine over podcast transcripts</a>.
          Plus this portfolio with a{" "}
          <a href="/generator">live creative toolkit</a>. All on{" "}
          <a href="https://github.com/bitwitty" target="_blank" rel="noopener">
            GitHub
          </a>.
        </p>
        <p>
          The editorial background isn{"'"}t separate from the technical work —
          it{"'"}s what makes it useful. I know what good output looks like. I
          know when AI copy needs a human pass and when a pipeline is producing
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
