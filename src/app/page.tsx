import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import RotatingBadge from "@/components/RotatingBadge";
import CaseStudies from "@/components/CaseStudies";

const CAMPAIGN_IMAGES = [
  {
    src: "/campaigns/saltstone/saltstone-04.png",
    alt: "Salt & Stone Lily & Yuzu duo on a stone ledge under a yuzu tree with rolling hills behind",
  },
  {
    src: "/campaigns/saltstone/saltstone-01.png",
    alt: "Woman in white walking through terraced yuzu groves toward a turquoise river valley",
  },
  {
    src: "/campaigns/saltstone/saltstone-02.png",
    alt: "Salt & Stone deodorant floating on a leaf in an onsen pool with lily and yuzu",
  },
  {
    src: "/campaigns/saltstone/saltstone-03.png",
    alt: "Salt & Stone duo on wet leaves and coastal rock with ocean waves",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <header className="wrap hero" id="main">
        <div className="hero__top reveal">
          <span className="label">
            <span className="star">{"\u2726"}</span>AI Creative Production Studio
          </span>
          <div className="hero__meta label label--muted">
            <span className="live" style={{ color: "var(--ink)" }}>
              Available for projects
            </span>
            <span>AI · Automation · Tooling</span>
          </div>
        </div>

        <div className="hero__display reveal" data-d="1">
          <div className="hero__line">
            <h1 className="hero__huge">House of</h1>
          </div>
          <div className="hero__line">
            <span className="hero__huge" style={{ color: "var(--forest)" }}>
              Atelios
              <span className="dot" style={{ WebkitTextStroke: 0 }}>
                .
              </span>
            </span>
          </div>
        </div>

        <div className="hero__intro">
          <div
            className="hero__portrait reveal"
            data-d="1"
            role="img"
            aria-label="Katherine Moffat portrait"
          >
            <Image
              src="/katherine-portrait.png"
              alt="Katherine Moffat holding a Contax film camera"
              fill
              sizes="(max-width: 640px) 100vw, 340px"
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="hero__badge">
              <RotatingBadge text="Available for projects · 2026 ·" />
            </div>
          </div>
          <div className="hero__copy reveal" data-d="2">
            <p>
              Campaign imagery no camera has ever seen. AI pipelines,
              automated production workflows, and creative direction —
              with editorial taste baked in.
            </p>
            <div className="hero__ctas">
              <Link className="btn-pill btn-pill--solid" href="#work">
                See the work{" "}
                <span className="arrow" aria-hidden="true">
                  {"\u2197"}
                </span>
              </Link>
              <Link className="btn-pill btn-pill--ghost" href="/generator">
                Try the toolkit{" "}
                <span className="arrow" aria-hidden="true">
                  {"\u2197"}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <Marquee
        items={[
          "Selected Work",
          "AI Pipelines",
          "Creative Automation",
          "Rapid Prototyping",
          "Human in the Loop",
        ]}
      />

      {/* ---------- CAMPAIGN IMAGERY ---------- */}
      <section className="wrap section">
        <div className="sec-kicker reveal">
          <span className="label label--muted">
            <span className="star">{"\u2726"}</span>Creative Direction / Concept
            Campaign
          </span>
          <span className="bar" aria-hidden="true"></span>
        </div>
        <div className="sec-head reveal" data-d="1">
          <h2 className="display">Campaign</h2>
          <h2 className="display outline">
            imagery
            <span className="dot" style={{ WebkitTextStroke: 0 }}>
              .
            </span>
          </h2>
        </div>

        <div className="help__prose reveal" data-d="2">
          <p>
            Speculative campaign for Salt &amp; Stone{"'"}s Lily &amp; Yuzu
            Signature Scent Duo. The concept traces the ingredients to their
            origin — yuzu orchards in Japan{"'"}s mountain valleys and wild
            lilies on coastal dunes. Four images, one session, from brief
            through art direction to final output.
          </p>
        </div>

        <div
          className="reveal"
          data-d="3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(0.5rem, 1.5vw, 1rem)",
            marginTop: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
        >
          {CAMPAIGN_IMAGES.map((img) => (
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
                sizes="(max-width: 640px) 100vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        <div
          className="reveal"
          data-d="4"
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "8/11",
            overflow: "hidden",
            marginTop: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
        >
          <Image
            src="/campaigns/saltstone/saltstone-grid-01.png"
            alt="Salt & Stone Lily & Yuzu full campaign layout — 8 slides showing product imagery, editorial direction, and branded copy"
            fill
            sizes="(max-width: 640px) 100vw, 80vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p
          style={{
            marginTop: "1rem",
            font: "500 0.74rem/1.4 var(--sans)",
            color: "var(--muted)",
          }}
        >
          AI-generated imagery / Concept campaign, not client work
        </p>
      </section>

      {/* ---------- CASE STUDIES ---------- */}
      <CaseStudies />

      <Marquee
        reverse
        items={[
          "Next.js",
          "Claude API",
          "Python",
          "Supabase",
          "TypeScript",
          "GitHub Actions",
          "Postgres",
        ]}
      />

      {/* ---------- CAPABILITIES ---------- */}
      <section className="wrap section">
        <div className="sec-kicker reveal">
          <span className="label label--muted">
            <span className="star">{"\u2726"}</span>What I do
          </span>
          <span className="bar" aria-hidden="true"></span>
        </div>
        <div className="sec-head reveal" data-d="1">
          <h2 className="display">Systems I</h2>
          <h2 className="display outline">
            have built
            <span className="dot" style={{ WebkitTextStroke: 0 }}>
              .
            </span>
          </h2>
        </div>

        <div className="help__cols reveal" data-d="2">
          <div className="collist">
            <div className="collist__head">
              <span className="label">Capabilities</span>
              <span className="ix">What I do</span>
            </div>
            <ul>
              <li>
                <span>AI Pipeline Design</span>
                <span className="meta">01</span>
              </li>
              <li>
                <span>Rapid Prototyping</span>
                <span className="meta">02</span>
              </li>
              <li>
                <span>Creative Automation</span>
                <span className="meta">03</span>
              </li>
              <li>
                <span>Brand Voice Systems</span>
                <span className="meta">04</span>
              </li>
              <li>
                <span>Human-in-the-Loop Review</span>
                <span className="meta">05</span>
              </li>
              <li>
                <span>Photography / Editing</span>
                <span className="meta">06</span>
              </li>
            </ul>
          </div>
          <div className="collist">
            <div className="collist__head">
              <span className="label">Toolkit</span>
              <span className="ix">Stack</span>
            </div>
            <ul>
              <li>
                <span>Next.js / TypeScript</span>
                <span className="meta">Build</span>
              </li>
              <li>
                <span>Claude API / Vercel AI SDK</span>
                <span className="meta">AI</span>
              </li>
              <li>
                <span>Python / GitHub Actions</span>
                <span className="meta">Agents</span>
              </li>
              <li>
                <span>Postgres / Supabase / Neon</span>
                <span className="meta">Data</span>
              </li>
              <li>
                <span>PostHog / GA4 / Search Console</span>
                <span className="meta">Signal</span>
              </li>
              <li>
                <span>Figma / Lightroom</span>
                <span className="meta">Craft</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
