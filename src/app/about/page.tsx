import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Katherine Moffat. Creative technologist building AI systems for creative teams.",
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
              Katherine Moffat
            </h1>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
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
                className="text-sm font-medium text-accent transition-colors hover:text-foreground"
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
