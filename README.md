# Katherine Moffat — Creative Technologist

Portfolio site with a live brand voice generator demo.

## Local Development

```bash
npm install
cp .env.example .env.local
# Add your Anthropic API key to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ANTHROPIC_API_KEY` | Yes | Anthropic API key for /generator. Get one at [console.anthropic.com](https://console.anthropic.com) |

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. In the Vercel project dashboard, go to Settings > Environment Variables.
4. Add `ANTHROPIC_API_KEY` with your key.
5. Deploy.

## Project Structure

```
src/
  app/
    page.tsx              Home
    work/page.tsx         Case studies
    generator/page.tsx    Brand voice generator (live demo)
    about/page.tsx        Bio + CV
    api/generate/route.ts Anthropic API route
  components/             Shared UI components
  lib/                    Utilities, prompts, rate limiting
  types/                  TypeScript interfaces
```

