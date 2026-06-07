import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Katherine Moffat. Creative technologist building AI systems for creative teams.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <section className="py-20 md:py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              About
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Katherine Moffat<span className="text-accent">.</span>
            </h1>
            <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-muted">
              <p>
                I build AI-native systems for marketing, brand, and creative
                teams. Pipelines, not prompts. The kind of infrastructure that
                means one person can do what used to take a department, without
                the work looking like it was done by a machine.
              </p>
              <p>
                I got here through the long way round. Marketing, brand
                strategy, operations, project management, creative direction,
                consulting. I've sat in enough of those seats to know that the
                tool is only as good as the workflow it fits into. So I build
                both.
              </p>
              <p>
                I'm also a photographer and editor. That's not a footnote. It's
                why I build human-in-the-loop review into everything, and why I
                don't ship AI-generated creative without someone making the
                final call.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="/placeholder-cv.pdf"
                download
                className="font-mono text-sm text-accent transition-colors hover:text-foreground"
              >
                {/* [PLACEHOLDER] Replace href with actual CV PDF path */}
                Download CV &darr;
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            {/* [PLACEHOLDER] Professional photo */}
            <div className="aspect-[4/5] w-full bg-surface" />
          </div>
        </div>
      </section>
    </div>
  );
}
