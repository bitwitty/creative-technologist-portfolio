"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/generator", label: "Toolkit" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap nav__inner">
        <Link
          href="/"
          className="nav__brand"
          aria-label="Katherine Moffat, home"
        >
          <span className="mark" aria-hidden="true"></span>
          <span className="name">Katherine Moffat</span>
        </Link>
        {/* [PLACEHOLDER] Replace href with actual CV PDF path */}
        <a className="nav__cv" href="/placeholder-cv.pdf" download>
          Download CV <span className="ar" aria-hidden="true">{"\u2193"}</span>
        </a>
        <div className="nav__links">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav__link${pathname === l.href ? " is-active" : ""}`}
              aria-current={pathname === l.href ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
