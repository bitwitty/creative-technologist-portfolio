import Link from "next/link";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/generator", label: "Toolkit" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__statement">
        <p className="eyebrow">
          <span className="mark">{"\u2726"}</span> Available for projects
        </p>
        <h2 className="huge" style={{ marginTop: "1.2rem" }}>
          Let us talk<span className="dot">.</span>
        </h2>
        <div className="footer__row">
          {/* [PLACEHOLDER] Contact email for footer (src/components/Footer.tsx) */}
          <a className="footer__email" href="mailto:hello@katherinemoffat.co">
            hello@katherinemoffat.co{" "}
            <span className="arrow" aria-hidden="true">
              {"\u2197"}
            </span>
          </a>
          <nav className="footer__nav" aria-label="Footer">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="wrap footer__bottom">
        <span>&copy; 2026 Katherine Moffat</span>
        <span>Creative Technologist / Photographer / Editor</span>
        <span>Built as a system, not a template</span>
      </div>
    </footer>
  );
}
