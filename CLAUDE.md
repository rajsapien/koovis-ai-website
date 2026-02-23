# Koovis AI Website

## What This Project Is

Marketing website for Koovis AI at https://www.koovis.ai. Built with Next.js 14 (App Router), deployed via Vercel on git push. Presents AI consulting services, blog (MDX), contact form (Resend email), and newsletter signups (Beehiiv API).

## Tech Stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- MDX for blog posts (static generation)
- Resend for contact form emails
- Beehiiv API for newsletter signups
- Vercel (auto-deploy on push to main)

## Project Structure

```
src/app/
├── page.tsx           <- Homepage
├── about/             <- About page
├── services/          <- Services page
├── products/          <- Products page
├── blog/              <- Blog listing + [slug] pages
├── contact/           <- Contact form
└── api/               <- API routes (contact, newsletter)
```

## Commands

```bash
npm run dev            # Start dev server (localhost:3000)
npm run build          # Production build
npm run lint           # ESLint
```

## Code Standards

- TypeScript strict mode. No `any` types.
- Tailwind CSS for all styling. No CSS modules.
- Components in `src/components/`. Pages in `src/app/`.
- Blog posts as MDX files with frontmatter metadata.
- All API routes validate input before processing.

## Documentation Sync Protocol

### Canonical Here (edit directly)
- `PROJECT_DOC.md` — Operational reference for this project. Auto-synced to `koovis-hq/projects/koovis-ai/docs/PROJECT_DOC_WEBSITE.md` every 15 minutes.

### Canonical in koovis-hq (use MCP to update)
- **Blueprint:** `koovis-hq/projects/koovis-ai/BLUEPRINT.md` — Use MCP `update_blueprint_section()`
- **Decisions:** `koovis-hq/projects/koovis-ai/DECISIONS.md` — Use MCP `append_decision()`

### End-of-Session Protocol
Before ending any work session, call MCP `sync_from_conversation()` with:
- Any decisions made during the session
- Task status updates
- Blueprint changes
