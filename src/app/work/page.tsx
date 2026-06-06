import type { Metadata } from "next";
import CaseStudyCard from "@/components/CaseStudyCard";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Katherine Moffat. AI pipelines, creative automation, and production tools.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <section className="py-16 md:py-24">
        <p className="text-xs font-medium uppercase tracking-widest text-muted">
          Selected Work
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Systems I have built.
        </h1>
      </section>

      <CaseStudyCard
        title="Dry Trip: AI-Curated Travel Directory"
        problem="Curating a luxury directory of alcohol-free travel experiences manually doesn't scale. Every venue needs discovery, verification, scoring, and editorial review before publishing."
        system="Automated discovery pipeline. Google Places API finds candidates across 15 search queries per city. Scrapers pull website and review data. Claude scores each venue on a 1-5 scale against brand criteria. Flagged venues go to a human editorial review dashboard. Approved venues publish to the directory via Supabase with ISR."
        stack={[
          "Next.js",
          "Supabase",
          "Claude API",
          "Vercel AI SDK",
          "Google Places API",
          "Mapbox",
          "Upstash Redis",
          "PostHog",
          "Resend",
        ]}
        output="73 published venues in London, each scored and editorially reviewed. Live directory with search, filtering, and maps. AI trip planner responding in a defined brand voice. 26 analytics events tracked across the full user journey."
        impact="One person, one city, 73 fully audited venues. The pipeline handles discovery through scoring. The human handles the editorial call. Six more cities in the queue."
      />

      <CaseStudyCard
        title="CMO Agent: Multi-Brand Marketing Automation"
        problem="Three brands need consistent weekly content. SEO analysis, social drafts, competitor monitoring, Reddit engagement. One person can't run the full cycle manually across three brands every week."
        system="Python agent runs scheduled passes via GitHub Actions. Pulls Search Console and GA4 data, identifies content gaps, generates drafts via Claude, monitors Reddit for relevant threads, tracks competitor homepage changes via diff detection. All output goes to Notion for human approval before publishing."
        stack={[
          "Python",
          "Claude API",
          "Google Search Console",
          "GA4",
          "Notion API",
          "GitHub Actions",
          "SQLite",
        ]}
        output="Automated weekly marketing cycle across three brands. SEO briefs, social drafts, competitor intelligence reports, and engagement opportunities. All surfaced in Notion for review."
        impact="Human-in-the-loop by design. The system does the research and drafting. The human makes the creative judgment call. Three brands, one operator."
      />

      <CaseStudyCard
        title="18th Grain: Custom CRM"
        problem="A luxury golf company was running their sales pipeline, contacts, and financials across Notion pages. It worked until it didn't. They needed a real CRM without the overhead of Salesforce."
        system="Custom CRM with dashboard KPIs, Kanban pipeline, account and contact management, website inquiry capture via webhook, and financial tracking. Built to replace a Notion workspace, not replicate enterprise software."
        stack={[
          "Next.js",
          "Neon Postgres",
          "Drizzle ORM",
          "Auth.js",
          "shadcn/ui",
          "Recharts",
        ]}
        output="Production CRM used daily by a three-person team. Dashboard, pipeline views, contact management, website-to-pipeline inquiry flow, invoice tracking."
        impact="Replaced a patched-together Notion setup with a purpose-built tool. Delivered in weeks, not months."
      />

      {/* Add more CaseStudyCard components here */}
    </div>
  );
}
