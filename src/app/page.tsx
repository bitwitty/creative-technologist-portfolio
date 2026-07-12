import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import RotatingBadge from "@/components/RotatingBadge";

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <header className="wrap hero" id="main">
        <div className="hero__top reveal">
          <span className="label">
            <span className="star">{"\u2726"}</span>Creative Technologist
          </span>
          <div className="hero__meta label label--muted">
            <span className="live" style={{ color: "var(--ink)" }}>
              Available 2026
            </span>
            <span>Independent practice</span>
            <span>AI / Automation / Tooling</span>
          </div>
        </div>

        <div className="hero__display reveal" data-d="1">
          <div className="hero__line">
            <span className="hero__tag">
              AI<span className="slash">/</span>Systems
            </span>
            <h1 className="hero__huge">Creative</h1>
          </div>
          <div className="hero__line">
            <span className="hero__huge outline">
              Technologist
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
              <RotatingBadge text="Currently open for offers" />
            </div>
          </div>
          <div className="hero__copy reveal" data-d="2">
            <p>
              <span className="lead">
                Four systems built in three months.
              </span>{" "}
              A decade of creative production setting the quality bar.
            </p>
            <div className="hero__ctas">
              <Link className="btn-pill btn-pill--solid" href="/work">
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
