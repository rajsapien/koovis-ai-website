# Koovis AI Website — Operational Reference

> Official marketing website for Koovis AI at https://www.koovis.ai. Auto-deployed via Vercel on git push.

---

## 1. System Overview

### What It Does

The Koovis AI website is a marketing site that:
- Presents services (Custom AI Product Development, AI Architecture & Strategy, ML Infrastructure & Operations)
- Showcases products and founder background
- Publishes blog posts via MDX (static generation)
- Accepts contact form submissions (→ email via Resend)
- Handles newsletter signups (→ Beehiiv API)
- Generates dynamic OG images for social sharing

### Architecture

```
┌────────────────────────────────────────────────────┐
│                 KOOVIS AI WEBSITE                    │
│                                                      │
│  Next.js 14 (App Router) ──► Vercel (auto-deploy)   │
│       │                                              │
│  Pages: /, /about, /services, /products,            │
│         /blog, /blog/[slug], /contact               │
│                                                      │
│  API Routes:                                         │
│  /api/contact  ──► Resend (email)                   │
│  /api/newsletter ──► Beehiiv (subscriber API)       │
│                                                      │
│  Monitoring: koovis-hq monitor.py (every 15 min)    │
└────────────────────────────────────────────────────┘
```

### Access Points

| Service | URL |
|---------|-----|
| Production | https://www.koovis.ai |
| Vercel Dashboard | Vercel project settings |
| Local Dev | `http://localhost:3000` |

---

## 2. Tech Stack

| Component | Version | Purpose |
|-----------|---------|---------|
| Next.js | 14.2.35 | App Router framework |
| React | ^18 | UI library |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^3.4.1 | Styling (dark theme) |
| Framer Motion | ^12.34.3 | Page transitions + animations |
| MDX | @next/mdx ^16.1.6, next-mdx-remote ^6.0.0 | Blog content |
| gray-matter | ^4.0.3 | Frontmatter parsing |
| Resend | ^6.9.2 | Email service (contact form) |
| Lucide React | ^0.575.0 | Icons |
| @vercel/analytics | ^1.4.1 | Analytics tracking |

### Fonts

- **Outfit** — Primary sans-serif
- **Geist Mono** — Monospace
- **JetBrains Mono** — Code blocks
- **Source Serif 4** — Serif accents

---

## 3. Infrastructure

### Hosting

| Aspect | Detail |
|--------|--------|
| Platform | Vercel |
| Deploy trigger | `git push` to GitHub `main` branch |
| Build command | `next build` |
| Runtime | Edge (OG images), Node.js (API routes) |
| CDN | Vercel Edge Network |

### External Services

| Service | Purpose | Auth |
|---------|---------|------|
| Resend | Email delivery (contact form) | `RESEND_API_KEY` |
| Beehiiv API v2 | Newsletter subscriber management | `BEEHIIV_API_KEY` + `BEEHIIV_PUBLICATION_ID` |
| Vercel Analytics | Performance + user tracking | Auto-configured |
| koovis-hq monitor.py | Uptime monitoring (every 15 min) | None (public HTTP) |

---

## 4. Database Schema

N/A — No database. Static site with API routes that proxy to external services.

---

## 5. Environment Variables

**Files:** `.env.local` (local dev), Vercel project settings (production)

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | Resend API key for contact form emails |
| `CONTACT_EMAIL` | Yes | Recipient for contact form (default: `hello@koovis.ai`) |
| `NEXT_PUBLIC_SITE_URL` | Yes | Production URL: `https://www.koovis.ai` |
| `BEEHIIV_API_KEY` | Yes | Beehiiv API key for newsletter subscriptions |
| `BEEHIIV_PUBLICATION_ID` | Yes | Beehiiv publication identifier |

**Important:** Environment variables must be set in both `.env.local` (local dev) and Vercel project settings (production). The `NEXT_PUBLIC_` prefix exposes the variable to the browser.

---

## 6. Cron Jobs / Scheduling

N/A — No cron jobs. The site is fully auto-deployed and externally monitored.

Uptime monitoring is handled by koovis-hq (`monitor.py` every 15 min).

---

## 7. Integrations

| System | Direction | Auth | Purpose |
|--------|-----------|------|---------|
| Resend | Outbound | API key | Send contact form emails |
| Beehiiv API v2 | Outbound | API key + publication ID | Create newsletter subscriptions |
| Vercel | Hosting | GitHub integration | Auto-deploy on push |
| GitHub | Source | — | Repository: `rajsapien/koovis-ai-website` |

### API Routes

#### `POST /api/contact`
- **Input:** `{ name, email, message, company?, budget? }`
- **Validates:** name, email, message required
- **Action:** Sends email via Resend to `CONTACT_EMAIL`
- **Returns:** `{ success: true }` or error

#### `POST /api/newsletter`
- **Input:** `{ email }`
- **Validates:** email required
- **Action:** Creates subscription via Beehiiv API, reactivates existing subscribers
- **Returns:** `{ success: true }` or error

---

## 8. File Structure

```
koovis-ai-website/
├── PROJECT_DOC.md                  ← This file
├── package.json                    ← Dependencies + scripts
├── next.config.mjs                 ← Next.js config (default)
├── tailwind.config.ts              ← Tailwind theme (dark mode colors)
├── tsconfig.json                   ← TypeScript config
├── .env.example                    ← Env var template
├── .env.local                      ← Local env vars (gitignored)
├── src/
│   ├── app/
│   │   ├── page.tsx               ← Homepage
│   │   ├── layout.tsx             ← Root layout (Navbar, Footer, fonts, JSON-LD)
│   │   ├── template.tsx           ← Page transition animations
│   │   ├── globals.css            ← Global styles
│   │   ├── robots.ts             ← Dynamic robots.txt
│   │   ├── sitemap.ts            ← Dynamic sitemap.xml
│   │   ├── opengraph-image.tsx   ← Dynamic OG image (Edge runtime)
│   │   ├── about/page.tsx        ← About page
│   │   ├── services/page.tsx     ← Services page
│   │   ├── products/page.tsx     ← Products page
│   │   ├── contact/page.tsx      ← Contact form page
│   │   ├── blog/page.tsx         ← Blog listing
│   │   ├── blog/[slug]/page.tsx  ← Dynamic blog post
│   │   └── api/
│   │       ├── contact/route.ts  ← Contact form handler
│   │       └── newsletter/route.ts ← Newsletter signup handler
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ContactForm.tsx
│   │   ├── NewsletterForm.tsx
│   │   ├── Button.tsx
│   │   ├── AnimateIn.tsx
│   │   ├── SectionLabel.tsx
│   │   └── SectionTitle.tsx
│   ├── content/blog/
│   │   ├── local-vs-cloud-llms.mdx
│   │   └── why-most-ai-projects-fail.mdx
│   └── lib/
│       ├── blog.ts               ← Blog utilities (parse MDX, sort by date)
│       ├── fonts.ts              ← Font configuration
│       └── metadata.ts           ← SEO metadata + JSON-LD schemas
└── Koovis_AI_Website_Blueprint.md ← Website architecture blueprint
```

---

## 9. Monitoring & Alerting

### What's Monitored

| Check | Method | Alert |
|-------|--------|-------|
| Site uptime | koovis-hq `monitor.py` (every 15 min) | Telegram alert on HTTP != 200 |

### Log Locations

| Log | Location |
|-----|----------|
| Build logs | Vercel dashboard → Deployments |
| Function logs | Vercel dashboard → Functions |
| Uptime checks | `koovis-hq/logs/monitor.log` |

---

## 10. Deployment

### Deploy Updates (Standard)

```bash
# Just push to main — Vercel auto-deploys
cd ~/Desktop/Projects/koovis-ai-branding/koovis-ai-website
git add -A && git commit -m "Update: description" && git push
# Vercel builds and deploys automatically (~1-2 min)
```

### Local Development

```bash
cd ~/Desktop/Projects/koovis-ai-branding/koovis-ai-website
npm install
npm run dev
# Open http://localhost:3000
```

### Add a Blog Post

1. Create `src/content/blog/your-post-slug.mdx`
2. Add frontmatter:
   ```yaml
   ---
   title: "Post Title"
   date: "2026-02-23"
   author: "Rajesh Kolachana"
   tag: "Engineering"
   excerpt: "Brief summary"
   readTime: "5 min read"
   published: true
   ---
   ```
3. Write content in MDX
4. `git push` — auto-deploys

### Update Environment Variables

1. Local: Edit `.env.local`
2. Production: Vercel dashboard → Project Settings → Environment Variables
3. Redeploy after production env var changes

---

## 11. Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| Site down (monitor alert) | Vercel outage or DNS issue | Check Vercel status page; usually auto-recovers in minutes |
| Contact form broken | `RESEND_API_KEY` expired or missing | Verify in Vercel env vars; test: submit form and check Vercel function logs |
| Newsletter signup failing | `BEEHIIV_API_KEY` or `BEEHIIV_PUBLICATION_ID` wrong | Verify in Vercel env vars; check Beehiiv dashboard for API key status |
| Build errors | Dependency or TypeScript issue | Check Vercel build logs; run `npm run build` locally to reproduce |
| OG image not generating | Edge runtime issue | Check `opengraph-image.tsx`; test locally with `npm run dev` and view `/opengraph-image` |
| Blog post not showing | `published: false` in frontmatter or missing file | Check frontmatter `published` field; verify file is in `src/content/blog/` |
| Styles broken after update | Tailwind purge removed needed classes | Check `tailwind.config.ts` content paths; rebuild locally |

---

## 12. Related Documents

| Document | Location | Purpose |
|----------|----------|---------|
| Website Blueprint | `Koovis_AI_Website_Blueprint.md` (in repo) | Architecture and design decisions |
| koovis-ai BLUEPRINT | `koovis-hq/projects/koovis-ai/BLUEPRINT.md` | Koovis AI business strategy |
| koovis-ai DECISIONS | `koovis-hq/projects/koovis-ai/DECISIONS.md` | Decision log |
| koovis-hq PROJECT_DOC | `koovis-hq/PROJECT_DOC.md` | Central infrastructure reference |
