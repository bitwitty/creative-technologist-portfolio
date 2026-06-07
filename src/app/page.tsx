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
            <span className="lead">Five shipped products in three months.</span> A
            decade of creative production setting the quality bar.
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
              title: "Creative Production",
              desc: "9 years producing editorial, photography, and content for brands including Expedia, Four Seasons, Fairmont, and publications including Vogue Greece, Vogue Portugal, and Glamour Hungary.",
            },
            {
              no: "02",
              title: "Shipped Products",
              desc: "5 products shipped in 3 months. 73 venues scored automatically. 3 brands managed by one agent weekly. A CRM used daily. A live demo on this site.",
            },
            {
              no: "03",
              title: "AI Image Generation",
              desc: "AI image generation alongside traditional film photography. See the work at @houseofatelios.",
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
