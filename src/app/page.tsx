import Link from "next/link";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <>
      <div className="wrap hero" id="main">
        <div className="hero__top">
          <p className="eyebrow reveal">
            <span className="mark">{"\u2726"}</span> Creative Technologist
          </p>
          <div className="hero__meta reveal" data-d="1">
            <span className="live">Available 2026</span>
            <span>Independent practice</span>
            <span>AI / Automation / Tooling</span>
          </div>
        </div>

        <div className="hero__ghost" aria-hidden="true">
          KM
        </div>

        <div className="hero__display reveal" data-d="1">
          <h1 className="huge">
            <span className="line">
              <span className="thin">I build the</span> systems
            </span>
            <span className="line">
              between the <span className="thin">brief</span>
            </span>
            <span className="line">
              and the shipped asset<span className="dot">.</span>
            </span>
          </h1>
        </div>

        <div className="hero__lower">
          <p className="hero__sub reveal" data-d="2">
            <span className="lead">Creative technologist.</span> I build AI
            pipelines, automate the repetitive parts of creative work, and
            ship tools that actually get used.
          </p>
          <div className="hero__ctas reveal" data-d="3">
            <Link className="btn-pill btn-pill--accent" href="/work">
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

      <Ticker
        items={[
          "Creative Technologist",
          "AI Pipelines",
          "Creative Automation",
          "Rapid Prototyping",
          "Human in the Loop",
        ]}
      />

      <section className="wrap section">
        <div className="section__label reveal">
          <p className="eyebrow">What I do</p>
          <span className="bar" aria-hidden="true"></span>
          <p className="eyebrow">Three disciplines</p>
        </div>
        <div className="caps">
          {[
            {
              no: "01",
              title: "AI Pipeline Design",
              desc: "I wire up APIs, LLMs, and data sources into workflows that run on their own. The goal is always the same: do it once, then let the system handle it.",
            },
            {
              no: "02",
              title: "Rapid Prototyping",
              desc: "I build working tools quickly. CRMs, dashboards, creative toolkits. Not mockups or decks. Real software that people use every day.",
            },
            {
              no: "03",
              title: "Creative Automation",
              desc: "AI that generates content with a human checking the output before it ships. Voice systems, scoring, editorial review. The machine drafts, the person decides.",
            },
          ].map((c) => (
            <div className="cap reveal" key={c.no}>
              <span className="cap__no">{c.no}</span>
              <h3 className="cap__title">{c.title}</h3>
              <p className="cap__desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
