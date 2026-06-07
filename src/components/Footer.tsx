import Link from "next/link";
import RotatingBadge from "./RotatingBadge";

export default function Footer() {
  return (
    <>
      <div className="wrap">
        <div className="rule-badge">
          <RotatingBadge reverse text="Available for projects" size={104} />
        </div>
      </div>

      <section className="wrap contact" id="contact">
        <div className="sec-kicker">
          <span className="label label--muted">
            <span className="star">{"\u2726"}</span>Get in touch
          </span>
          <span className="bar" aria-hidden="true"></span>
        </div>
        <div className="contact__display">
          <span className="display">Contact</span>
          <span className="display outline">
            Me<span className="dot" style={{ WebkitTextStroke: 0 }}>.</span>
          </span>
        </div>
        <div className="contact__cols">
          <div className="cgroup">
            <div className="cgroup__head">
              <span className="label">Channels</span>
            </div>
            <ul>
              <li>
                <a href="https://github.com/bitwitty" target="_blank" rel="noopener">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/moffatkatherine" target="_blank" rel="noopener">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/katherinemoff.at/" target="_blank" rel="noopener">
                  Instagram / Photography
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/houseofatelios/" target="_blank" rel="noopener">
                  Instagram / AI Imagery
                </a>
              </li>
            </ul>
          </div>
          <div className="cgroup">
            <div className="cgroup__head">
              <span className="label">Direct</span>
            </div>
            <ul>
              <li>
                <a href="mailto:hello@katherinemoffat.co">
                  hello@katherinemoffat.co
                </a>
              </li>
              <li>
                <span>Independent practice</span>
              </li>
              <li>
                <span>Available 2026</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer-bottom">
        <div className="wrap footer-bottom__inner">
          <span>&copy; 2026 Katherine Moffat</span>
          <span>Creative Technologist / Photographer / Editor</span>
          <span>Built as a system, not a template</span>
        </div>
      </footer>
    </>
  );
}
