export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <p className="text-3xl font-semibold tracking-tight md:text-4xl">
          Let&apos;s talk<span className="text-accent">.</span>
        </p>
        <a
          href="mailto:hello@katherinemoffat.com"
          className="mt-4 inline-block font-mono text-sm text-muted transition-colors hover:text-accent"
        >
          {/* [PLACEHOLDER] Replace with real email */}
          hello@katherinemoffat.com
        </a>
        <p className="mt-12 font-mono text-xs text-muted/50">
          &copy; {new Date().getFullYear()} Katherine Moffat
        </p>
      </div>
    </footer>
  );
}
