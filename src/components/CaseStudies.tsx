"use client";

import { useState } from "react";
import CaseItem from "./CaseItem";
import type { CaseData } from "./CaseItem";

const CASES: CaseData[] = [
  {
    no: "Work 01",
    name: "Dry Trip",
    sub: "AI-Curated Travel Directory",
    url: "https://drytrip.co",
    problem:
      "Curating a luxury directory of alcohol-free travel experiences manually doesn't scale. Every venue needs discovery, verification, scoring, and editorial review before publishing.",
    system:
      "Automated discovery pipeline. Google Places API finds candidates across 15 search queries per city. Scrapers pull website and review data. Claude scores each venue on a 1-5 scale against brand criteria. Flagged venues go to a human editorial review dashboard. Approved venues publish to the directory via Supabase with ISR.",
    output:
      "73 venues in London scored and editorially reviewed so far. Directory with search, filtering, and maps. AI trip planner responding in a defined brand voice. 26 analytics events wired across the full user journey.",
    impact:
      "Still in progress. One person, one city, 73 fully audited venues and counting. The pipeline handles discovery through scoring. The human handles the editorial call. Built to scale city by city.",
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
    no: "Work 02",
    name: "CMO Agent",
    sub: "Multi-Brand Marketing Automation",
    problem:
      "Three brands need consistent weekly content. SEO analysis, social drafts, competitor monitoring, Reddit engagement. One person can't run the full marketing cycle manually across three brands every week.",
    system:
      "Python agent orchestrated via GitHub Actions. Pulls Search Console and GA4 data, identifies content gaps, generates drafts via Claude, monitors Reddit for relevant threads, tracks competitor homepage changes via diff detection. All output goes to Notion for human approval before publishing.",
    output:
      "End-to-end marketing automation system: SEO briefs, social drafts, competitor intelligence reports, and engagement opportunities. All surfaced in Notion with human-in-the-loop review.",
    impact:
      "An architecture for solo operators running multiple brands. The system handles research and drafting. The human makes the creative call. Designed for three brands, one operator.",
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
      { num: "3", u: "brands", label: "One automated pipeline" },
      { num: "6", u: "sources", label: "GA4, Search Console, Reddit, competitors, Claude, Notion" },
    ],
  },
  {
    no: "Work 03",
    name: "18th Grain",
    sub: "Custom CRM",
    url: "https://18thgrain.com",
    problem:
      "A luxury golf company was running their sales pipeline, contacts, and financials across Notion pages. It worked until it didn't — no pipeline visibility, no inquiry capture, no real reporting.",
    system:
      "Custom CRM with dashboard KPIs, Kanban pipeline, account and contact management, website inquiry capture via webhook, and financial tracking. Built to replace a Notion workspace, not replicate enterprise software.",
    output:
      "Production CRM used daily by a three-person team. Dashboard, pipeline views, contact management, website-to-pipeline inquiry flow, invoice tracking.",
    impact:
      "Built in a weekend. Replaced a patched-together Notion setup with a purpose-built tool that the team actually uses every day.",
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
      { num: "1", u: "weekend", label: "From zero to production" },
    ],
  },
  {
    no: "Work 04",
    name: "DOAC Knowledge Engine",
    sub: "Semantic Search Over Podcast Transcripts",
    url: "https://web-production-7bade.up.railway.app/",
    problem:
      "The Diary of a CEO has 815+ episodes. Finding a specific expert insight means scrubbing through hours of video. There's no way to search what was actually said.",
    system:
      "Seven-step RAG pipeline. iTunes API pulls episode metadata. YouTube captions extracted via yt-dlp. Claude Haiku cleans raw transcript files. Content chunked into ~300-word segments with sentence-boundary awareness and overlap. Voyage AI generates 1024-dimensional embeddings stored in Pinecone serverless. Flask frontend for natural-language search. Topic categorisation across nine categories.",
    output:
      "Semantic search engine returning timestamped, quotable moments from specific episodes. Search by concept, not keyword — ask a question, get the exact moment an expert answered it.",
    impact:
      "30 episodes indexed so far, producing 2,500+ searchable moments. Pipeline is modular — each step runs independently, designed to scale to the full 815-episode archive.",
    stack: [
      "Python",
      "Claude Haiku",
      "Voyage AI",
      "Pinecone",
      "Flask",
      "Railway",
      "yt-dlp",
    ],
    metrics: [
      { num: "2,500", u: "+", label: "Searchable moments indexed" },
      { num: "30", u: "of 815", label: "Episodes processed so far" },
    ],
  },
];

export default function CaseStudies() {
  const [open, setOpen] = useState<string | null>("Work 01");

  return (
    <div className="wrap section" id="work">
      <div className="sec-kicker reveal">
        <span className="label label--muted">
          <span className="star">{"\u2726"}</span>Selected Work / 04 systems
        </span>
        <span className="bar" aria-hidden="true"></span>
      </div>
      <div className="sec-head reveal" data-d="1">
        <h2 className="display">Systems I</h2>
        <h2 className="display outline">
          have built
          <span className="dot" style={{ WebkitTextStroke: 0 }}>
            .
          </span>
        </h2>
      </div>
      <div className="cases">
        {CASES.map((c) => (
          <CaseItem
            key={c.no}
            c={c}
            open={open === c.no}
            onToggle={() => setOpen(open === c.no ? null : c.no)}
          />
        ))}
      </div>
    </div>
  );
}
