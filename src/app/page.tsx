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
            <span className="lead">Creative technologist.</span> I design AI
            pipelines, automate production workflows, and prototype tools that
            give creative teams leverage.
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
              desc: "End-to-end systems that connect APIs, LLMs, and data sources into reliable production workflows. Not one-off prompts. Repeatable infrastructure.",
            },
            {
              no: "02",
              title: "Rapid Prototyping",
              desc: "Functional tools built fast. CRMs, dashboards, creative toolkits, trip planners. Full-stack, shipped, and running.",
            },
            {
              no: "03",
              title: "Creative Automation",
              desc: "AI-assisted content generation with human-in-the-loop quality control. Brand voice systems, scoring models, editorial review layers.",
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
