"use client";

import { useState } from "react";
import Ticker from "@/components/Ticker";

const CASES = [
  {
    no: "01",
    name: "Dry Trip",
    sub: "AI-Curated Travel Directory",
    problem:
      "Curating a luxury directory of alcohol-free travel experiences manually doesn't scale. Every venue needs discovery, verification, scoring, and editorial review before publishing.",
    system:
      "Automated discovery pipeline. Google Places API finds candidates across 15 search queries per city. Scrapers pull website and review data. Claude scores each venue on a 1-5 scale against brand criteria. Flagged venues go to a human editorial review dashboard. Approved venues publish to the directory via Supabase with ISR.",
    output:
      "73 published venues in London, each scored and editorially reviewed. Live directory with search, filtering, and maps. AI trip planner responding in a defined brand voice. 26 analytics events tracked across the full user journey.",
    impact:
      "One person, one city, 73 fully audited venues. The pipeline handles discovery through scoring. The human handles the editorial call. Six more cities in the queue.",
    stack: [
      "Next.js",
      "Supabase",
      "Claude API",
      "Vercel AI SDK",
      "Google Places API",
      "Mapbox",
      "Upstash Redis",
      "PostHog",
      "Resend",
    ],
    metrics: [
      { num: "73", u: "", label: "Venues scored and reviewed" },
      { num: "26", u: "", label: "Analytics events tracked" },
    ],
  },
  {
    no: "02",
    name: "CMO Agent",
    sub: "Multi-Brand Marketing Automation",
    problem:
      "Three brands need consistent weekly content. SEO analysis, social drafts, competitor monitoring, Reddit engagement. One person can't run the full cycle manually across three brands every week.",
    system:
      "Python agent runs scheduled passes via GitHub Actions. Pulls Search Console and GA4 data, identifies content gaps, generates drafts via Claude, monitors Reddit for relevant threads, tracks competitor homepage changes via diff detection. All output goes to Notion for human approval before publishing.",
    output:
      "Automated weekly marketing cycle across three brands. SEO briefs, social drafts, competitor intelligence reports, and engagement opportunities. All surfaced in Notion for review.",
    impact:
      "Human-in-the-loop by design. The system does the research and drafting. The human makes the creative judgment call. Three brands, one operator.",
    stack: [
      "Python",
      "Claude API",
      "Google Search Console",
      "GA4",
      "Notion API",
      "GitHub Actions",
      "SQLite",
    ],
    metrics: [
      { num: "3", u: "brands", label: "Run weekly by one operator" },
      { num: "1", u: "agent", label: "Scheduled via GitHub Actions" },
    ],
  },
  {
    no: "03",
    name: "18th Grain",
    sub: "Custom CRM",
    problem:
      "A luxury golf company was running their sales pipeline, contacts, and financials across Notion pages. It worked until it didn't. They needed a real CRM without the overhead of Salesforce.",
    system:
      "Custom CRM with dashboard KPIs, Kanban pipeline, account and contact management, website inquiry capture via webhook, and financial tracking. Built to replace a Notion workspace, not replicate enterprise software.",
    output:
      "Production CRM used daily by a three-person team. Dashboard, pipeline views, contact management, website-to-pipeline inquiry flow, invoice tracking.",
    impact:
      "Replaced a patched-together Notion setup with a purpose-built tool. Delivered in weeks, not months.",
    stack: [
      "Next.js",
      "Neon Postgres",
      "Drizzle ORM",
      "Auth.js",
      "shadcn/ui",
      "Recharts",
    ],
    metrics: [
      { num: "3", u: "person", label: "Team using it daily" },
      { num: "Weeks", u: "", label: "Delivery, not months" },
    ],
  },
];

interface CaseMetric {
  num: string;
  u: string;
  label: string;
}

interface CaseData {
  no: string;
  name: string;
  sub: string;
  problem: string;
  system: string;
  output: string;
  impact: string;
  stack: string[];
  metrics: CaseMetric[];
}

function CaseItem({
  c,
  open,
  onToggle,
}: {
  c: CaseData;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`case${open ? " is-open" : ""}`}>
      <button
        className="case__row"
        aria-expanded={open}
        onClick={onToggle}
      >
        <span className="case__no">{c.no}</span>
        <span className="case__name">
          {c.name}.{" "}
          <span className="thin" style={{ color: "var(--muted)" }}>
            {c.sub}
          </span>
        </span>
        <span className="case__toggle">
          {open ? "Close" : "View"}
          <span className="case__plus" aria-hidden="true"></span>
        </span>
      </button>
      <div className="case__panel">
        <div className="case__inner">
          <div className="case__fields">
            <div>
              <p className="field__label">Problem</p>
              <p className="field__text dim">{c.problem}</p>
            </div>
            <div>
              <p className="field__label">System</p>
              <p className="field__text">{c.system}</p>
            </div>
            <div>
              <p className="field__label">Output</p>
              <p className="field__text dim">{c.output}</p>
            </div>
            <div>
              <p className="field__label">Impact</p>
              <p className="field__text">{c.impact}</p>
            </div>
          </div>
          <div className="case__aside">
            <p className="field__label">Stack</p>
            <div className="stack">
              {c.stack.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="metrics">
              {c.metrics.map((m, i) => (
                <div key={i}>
                  <p className="metric__num">
                    {m.num}
                    {m.u ? <span className="u"> {m.u}</span> : null}
                  </p>
                  <p className="metric__label">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkPage() {
  const [open, setOpen] = useState<string | null>("01");

  return (
    <>
      <div className="wrap work-head" id="main">
        <p className="eyebrow reveal">
          <span className="mark">{"\u2726"}</span> Selected Work / 03 systems
        </p>
        <h1
          className="huge reveal"
          data-d="1"
          style={{ marginTop: "1.2rem" }}
        >
          Systems I<br />
          have built<span className="dot">.</span>
        </h1>
      </div>
      <div className="wrap">
        <div className="cases">
          {CASES.map((c) => (
            <CaseItem
              key={c.no}
              c={c}
              open={open === c.no}
              onToggle={() =>
                setOpen(open === c.no ? null : c.no)
              }
            />
          ))}
        </div>
        {/* Add more case studies here */}
      </div>
      <div style={{ height: "clamp(2rem,6vw,5rem)" }}></div>
      <Ticker
        dark
        reverse
        items={[
          "Next.js",
          "Claude API",
          "Python",
          "Supabase",
          "TypeScript",
          "GitHub Actions",
          "Postgres",
        ]}
      />
    </>
  );
}
