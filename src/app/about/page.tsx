import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "[PLACEHOLDER] About Kat Moffat, creative technologist.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              About
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Kat Moffat
            </h1>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
              <p>
                {/* [PLACEHOLDER] Bio paragraph 1: background, what you do, how you got here */}
                [PLACEHOLDER] First paragraph of your bio. Background, disciplines, what drives your work.
              </p>
              <p>
                {/* [PLACEHOLDER] Bio paragraph 2: approach, philosophy */}
                [PLACEHOLDER] Second paragraph. Your approach, how you think about the intersection of strategy and systems.
              </p>
              <p>
                {/* [PLACEHOLDER] Bio paragraph 3: current focus */}
                [PLACEHOLDER] Third paragraph. What you are working on now, what you are looking for.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="/placeholder-cv.pdf"
                download
                className="text-sm font-medium text-accent transition-colors hover:text-foreground"
              >
                Download CV &darr;
              </a>
              {/* [PLACEHOLDER] Replace href with actual CV PDF path */}
            </div>
          </div>
          <div className="md:col-span-5">
            {/* [PLACEHOLDER] Professional photo */}
            <div className="aspect-[4/5] w-full rounded bg-surface" />
          </div>
        </div>
      </section>
    </div>
  );
}
