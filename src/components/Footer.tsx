import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-sm text-foreground">Kat Moffat</p>
          <p className="mt-1 text-xs text-muted">
            {/* [PLACEHOLDER] Tagline or descriptor */}
            Creative Technologist
          </p>
        </div>
        <div className="flex gap-6 text-sm text-muted">
          <Link href="/work" className="transition-colors hover:text-foreground">
            Work
          </Link>
          <Link href="/generator" className="transition-colors hover:text-foreground">
            Toolkit
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
