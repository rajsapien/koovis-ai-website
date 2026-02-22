# Koovis AI Website

The official website for [Koovis AI](https://www.koovis.ai) — AI product development for startups, founded by Rajesh Kolachana.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Blog:** MDX with next-mdx-remote + gray-matter
- **Email:** Resend (contact form & newsletter)
- **Icons:** Lucide React
- **Fonts:** Geist Sans, Geist Mono, JetBrains Mono, Source Serif 4, Outfit

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/rajsapien/koovis-ai-website.git
cd koovis-ai-website
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from [Resend](https://resend.com) for contact form and newsletter emails |
| `CONTACT_EMAIL` | Email address that receives contact form submissions |
| `NEXT_PUBLIC_SITE_URL` | Production URL (e.g. `https://www.koovis.ai`) |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/
    page.tsx              # Homepage
    about/page.tsx        # About / founder bio
    services/page.tsx     # Service offerings
    products/page.tsx     # Products (WealthPilot)
    blog/page.tsx         # Blog listing
    blog/[slug]/page.tsx  # Blog post (MDX)
    contact/page.tsx      # Contact form
    api/contact/route.ts  # Contact form API
    api/newsletter/route.ts # Newsletter signup API
    layout.tsx            # Root layout with fonts, metadata, JSON-LD
    template.tsx          # Page transitions (Framer Motion)
    globals.css           # Global styles, prose-blog typography
    robots.ts             # robots.txt generation
    sitemap.ts            # sitemap.xml generation
    opengraph-image.tsx   # Dynamic OG image (Edge runtime)
  components/             # Shared UI components
  content/blog/           # MDX blog posts
  lib/
    blog.ts               # Blog utilities (parse MDX, frontmatter)
    fonts.ts              # Font configuration
    metadata.ts           # SEO metadata & JSON-LD
```

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com):

1. Push the repository to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel project settings
4. Deploy

## Adding Blog Posts

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2026-01-15"
author: "Rajesh Kolachana"
tag: "Engineering"
published: true
---

Your markdown content here.
```

Set `published: false` to keep a post hidden from the listing.
