# Koovis AI Website — Claude Code Execution Plan
## Step-by-step commands to build and deploy koovis.ai

---

## Prerequisites

Before starting, make sure you have:
- [ ] **Node.js 18+** installed (`node --version`)
- [ ] **Git** installed and configured
- [ ] **GitHub account** with a repo created (e.g., `koovis-ai-website`)
- [ ] **Vercel account** (sign up at vercel.com — free tier)
- [ ] **Resend account** (resend.com — free tier, 100 emails/day)
- [ ] **Claude Code** installed (`npm install -g @anthropic-ai/claude-code`)

---

## Phase 1: Project Scaffolding

Open your terminal, navigate to your projects directory, and start Claude Code:

```bash
cd ~/projects
claude
```

### Prompt 1 — Initialize the Next.js project

```
Create a new Next.js 14 project called "koovis-ai-website" with the following setup:
- TypeScript
- Tailwind CSS v4
- App Router (not pages router)
- ESLint
- src/ directory
- No turbopack

After creating, install these additional dependencies:
- framer-motion (animations)
- resend (email API for contact form)
- @next/mdx and @mdx-js/react (blog)
- lucide-react (icons)
- next-mdx-remote (for MDX blog posts)
- gray-matter (frontmatter parsing)

Set up the project structure:
src/
  app/
    layout.tsx        (root layout with fonts, metadata)
    page.tsx          (homepage)
    services/page.tsx
    products/page.tsx
    blog/page.tsx
    blog/[slug]/page.tsx
    about/page.tsx
    contact/page.tsx
    api/contact/route.ts    (contact form API)
    api/newsletter/route.ts (newsletter signup API)
  components/
    Navbar.tsx
    Footer.tsx
    Button.tsx
    SectionLabel.tsx
    SectionTitle.tsx
    AnimateIn.tsx     (framer-motion scroll animation wrapper)
    ContactForm.tsx
    NewsletterForm.tsx
  lib/
    fonts.ts          (font configuration)
    blog.ts           (MDX utilities)
    metadata.ts       (shared SEO metadata)
  content/
    blog/             (MDX blog posts go here)
```

Don't write any component code yet — just create the files with placeholder exports.
```

### Prompt 2 — Configure fonts and global styles

```
Read the file @Koovis_AI_Website_Blueprint_v3.md for full context on the brand.

Set up the fonts and global Tailwind configuration:

Fonts (in src/lib/fonts.ts, imported in layout.tsx):
- Headline font: "Source Serif 4" from Google Fonts (serif, editorial weight)
- Body font: "Outfit" from Google Fonts (geometric sans, modern)  
- Code/accent font: "JetBrains Mono" from Google Fonts (monospace, technical)

Tailwind config (tailwind.config.ts):
- Dark theme as default
- Colors:
  - bg: #0a0a0b (near-black)
  - card: #111113
  - border: #222225
  - border-light: #2a2a2e
  - text: #e4e4e7
  - text-muted: #71717a
  - text-dim: #52525b
  - accent: #22d3ee (electric cyan)
  - accent-dim: rgba(34, 211, 238, 0.12)
  - accent-glow: rgba(34, 211, 238, 0.25)
  - white: #fafafa
- Extend fontFamily with the three fonts above

Root layout.tsx:
- Set metadata: title "Koovis AI — From Model to Market", description from the blueprint
- Apply dark background, Outfit as default body font
- Include Navbar and Footer as persistent layout elements
- Add a subtle noise texture overlay (CSS-only, no image)
```

---

## Phase 2: Core Components

### Prompt 3 — Navbar

```
Build the Navbar component (src/components/Navbar.tsx):

Requirements:
- Fixed position, transparent on top, dark blur background on scroll
- Logo: Diamond shape (rotated square with inner filled square) + "KOOVIS" text + "AI" in accent color. All caps, letterspaced. Use CSS for the diamond, not an image.
- Desktop nav: Home, Services, Products, Blog, About, Contact links
- Active link indicator (subtle cyan underline)
- "Get in Touch" outline button on the right
- Mobile: hamburger menu → full-screen overlay with centered links
- Smooth transitions on scroll state change
- Use framer-motion for mobile menu animation

Links should use Next.js Link component with proper active state detection via usePathname().
```

### Prompt 4 — Footer

```
Build the Footer component (src/components/Footer.tsx):

Requirements:
- Three-column grid (responsive → stacks on mobile):
  1. Logo + tagline "Custom AI product development for startups. From model to market." + social links (LinkedIn, Twitter/X, GitHub) — just text links for now
  2. Navigation links (all 6 pages)
  3. Newsletter signup form (email input + submit button) with success state
- Bottom bar: "© 2025 Koovis AI LLC. Delaware, USA." on left, "Built with precision." on right
- Border top separator
- JetBrains Mono for small text accents
- Muted colors, accent on hover
```

### Prompt 5 — Shared UI components

```
Build these shared components:

1. Button.tsx — Three variants: primary (cyan bg, dark text, glow shadow), outline (border + transparent bg), ghost (no border). Hover states. Accepts onClick, href (renders as Link if provided), children, className.

2. SectionLabel.tsx — Small uppercase text in cyan, JetBrains Mono, letterspaced. Used above section titles.

3. SectionTitle.tsx — Large serif headline (Source Serif 4). Accepts children (so we can use <span> for cyan/italic words inside).

4. AnimateIn.tsx — Framer-motion wrapper that fades in + slides up when element enters viewport. Uses useInView. Accepts delay prop for staggering. Should be a client component.
```

---

## Phase 3: Page Content

### Prompt 6 — Homepage

```
Read @Koovis_AI_Website_Blueprint_v3.md for the exact copy. Use "we" voice everywhere (not "I").

Build the homepage (src/app/page.tsx) with these sections:

1. HERO
- Full viewport height, centered content
- Subtle animated grid background (CSS linear-gradient grid pattern with slow movement)
- Radial gradient glow behind the text (cyan, very subtle)
- Headline: "Your AI Deserves Better Than a Proof of Concept."
- Subheadline: Use the exact v3 paragraph about Koovis AI engineering production-grade systems, $4.4B+ impact, Amazon-scale standards
- Two CTAs: "Start a Project →" (primary) and "Explore Our Work →" (outline)
- Trust bar with animated counters on scroll: "11+ Years", "$4.4B+ Impact", "9 Marketplaces", "7 Years at Amazon", "Top 0.013%"
- All content uses AnimateIn with staggered delays

2. MISSION STATEMENT (NEW)
- SectionLabel "OUR MISSION"
- SectionTitle "We exist to close the most expensive gap in AI."
- Body paragraph from v3 about the engineering gap
- Bold closing line: "We don't just build AI. We build AI that works when it matters."
- Subtle left border accent in cyan

3. CAPABILITIES / WHAT WE DO
- SectionLabel "CAPABILITIES"
- SectionTitle "End-to-end AI engineering for companies that demand more."
- Intro paragraph about what happens when AI is treated as experiment vs engineering
- Three clickable capability cards (numbered 01/02/03) — Custom AI Product Development, AI Architecture & Strategy, ML Infrastructure & Operations. Each with title, description, tech stack tags, and arrow on hover. Link to /services.

4. PROOF SECTION
- SectionLabel "PROVEN IMPACT"
- SectionTitle "We don't make promises. We point to results."
- Intro paragraph about production systems, not prototypes
- Grid of 7 metric cards (all from v3 including the 1,000+ users and 7 marketplaces): big cyan number, one-line title, description underneath
- Bold footnote: "These results were achieved at Amazon... We bring that same standard..."

5. WHY KOOVIS AI (NEW)
- SectionLabel "WHY US"
- SectionTitle "Built different. Engineered to outperform."
- 6 cards in 2x3 grid: Amazon-Grade Engineering, Full Lifecycle Ownership, Radical Technical Honesty, Battle-Tested Across Domains, Speed Without Compromise, Domain Expertise That Compounds
- Each with cyan top accent line, title, and description from v3

6. WEALTHPILOT TEASER
- Subtle cyan gradient background on the left edge
- SectionLabel "FLAGSHIP PRODUCT"
- Large "WealthPilot" title + tagline "Where machine learning meets market intelligence."
- Description paragraph from v3
- 6 feature cards in a 2x3 grid (all from v3)
- CTA: "Request Early Access →" button + pulsing green dot with "In active development — early access opening soon"

7. CREDENTIALS STRIP (NEW)
- Horizontal strip with: IIT Roorkee, IISc Bangalore, Amazon, "GATE AIR 5 — Top 0.013%", "$4.4B+ impact across 9 marketplaces"
- Muted text, subtle styling, text-only (no logos)

8. CTA SECTION
- Headline: "The companies that win in AI are building right now."
- Urgency paragraph from v3 about limited client slots and competitor advantage
- Two CTAs: "Start a Conversation →" (primary) and "Schedule a Call →" (outline)
```

### Prompt 7 — About page

```
Read @Koovis_AI_Website_Blueprint_v3.md for the exact copy. Use "we" voice for company sections, "I" only in the founder bio.

Build the About page (src/app/about/page.tsx):

1. HEADER
- SectionLabel "ABOUT" + SectionTitle "Built by engineers who've shipped at the highest level."

2. COMPANY STORY
- Use the "we" voice company narrative from v3 — about Koovis AI being founded on a conviction that the AI industry has a delivery problem
- 3-4 paragraphs of prose, no bullet points
- Should feel weighty and mission-driven

3. VISION (NEW)
- Separate subsection with a subtle accent background
- "Our Vision" heading
- Paragraph about building Koovis AI to become one of the most trusted names in applied AI engineering
- Should feel aspirational but grounded

4. FOUNDER SECTION (switches to "I")
- Two-column: left is a 200x200 placeholder with "RK" initials (gradient background with cyan accent — will be replaced with real photo later), right is the bio
- Name: "Rajesh Kolachana" in Source Serif 4
- Title: "Founder & CEO" in JetBrains Mono, cyan
- Full first-person bio from v3 — IIT → IISc → InMobi (Rising Star Award) → AgreeYa (client recognition) → Amazon (7 years, all the numbers) → founding Koovis AI
- Keep as natural prose paragraphs

5. PRINCIPLES
- Four cards now (v3 added "Relentless Standards"): "Ship, Don't Demo", "Honest Architecture", "Own the Outcome", "Relentless Standards"
- Each with a cyan accent line above, title, and description from v3

6. CTA
- Card with "Ready to work with a team that ships?" + button
```

### Prompt 8 — Services page

```
Read @Koovis_AI_Website_Blueprint_v3.md for the exact copy.

Build the Services page (src/app/services/page.tsx):

1. HEADER with subheadline: "From first architecture decision to production deployment and beyond..."
   Use the stronger intro paragraph from v3 about partnering with ambitious companies.

2. THREE SERVICE CARDS (full detail)
- Each card: icon/symbol at top, title, tagline in italic, full description paragraph, list of specific capabilities (6 items each with small cyan dot), tech stack tags at bottom
- Hover: border color changes to cyan, slight lift
- Subtle gradient line at top of each card

3. PROCESS SECTION
- "How We Work" with 4 steps (01-04): Discovery & Assessment, Architecture & Design, Build & Validate, Deploy Monitor & Evolve
- Big muted step numbers, title, description
- Use the v3 copy (more detailed and assertive than v2)

4. ENGAGEMENT MODELS (NEW from v3)
- Three-column layout: Project-Based, Embedded Partnership, Architecture Sprint
- Each with: title, description, "Best for:" line, typical duration/structure
- Subtle border, hover accent

5. CTA CARD
- "Have a project in mind?" with v3's assertive closing paragraph + contact button
```

### Prompt 9 — Products page

```
Build the Products page (src/app/products/page.tsx):

1. HEADER: "Digital products built on real ML"

2. WEALTHPILOT (flagship, prominent)
- Cyan border (only product with colored border)
- "Flagship" badge in top-right corner (cyan background, dark text)
- Gradient overlay on left side
- Large title, description, 6 feature items in a 2x3 grid
- "Request Early Access →" button + development status indicator
- Make this feel premium and substantial

3. COMING SOON (2 placeholder cards)
- Dashed border, muted colors
- "?" icon, "Coming Soon" title, description encouraging newsletter signup
```

### Prompt 10 — Blog page & infrastructure

```
Build the blog system:

1. Blog listing page (src/app/blog/page.tsx):
- Header: "Thoughts on AI engineering"
- List of blog posts as rows (not cards), each with: tag badge, date, title, excerpt, read time
- Hover effect on rows
- "Coming Soon" posts should be visually muted (opacity)

2. Blog post page (src/app/blog/[slug]/page.tsx):
- Read MDX files from src/content/blog/
- Render with proper typography (Source Serif 4 for post titles, Outfit for body)
- Back link to /blog
- Author info at bottom with "RK" avatar placeholder

3. Blog utilities (src/lib/blog.ts):
- Function to read all MDX files from content directory
- Parse frontmatter (title, date, excerpt, readTime, tag, published)
- Sort by date descending

4. Create one sample blog post (src/content/blog/local-vs-cloud-llms.mdx):
- Title: "Local vs. Cloud LLMs: The Model Routing Revolution"
- Use frontmatter with published: true
- Write 3-4 paragraphs of real content based on Rajesh's LinkedIn post topic about model routing being the new standard
```

### Prompt 11 — Contact page

```
Build the Contact page (src/app/contact/page.tsx) and API route:

1. CONTACT FORM (src/components/ContactForm.tsx):
- Fields: Name*, Email*, Company, Budget Range (dropdown: Under $10K, $10-25K, $25-50K, $50-100K, $100K+), Project Details* (textarea)
- Client-side validation
- Submit → calls /api/contact
- Success state: checkmark + "Message received" + "I'll review your project details and get back within 24 hours"
- Error state: red message + retry
- Loading state on submit button

2. API ROUTE (src/app/api/contact/route.ts):
- Validate required fields
- Send email via Resend to raj@koovis.ai
- Format the email nicely with all form fields
- Rate limit: basic check (can be enhanced later with Upstash)
- Return appropriate status codes

3. API ROUTE (src/app/api/newsletter/route.ts):
- Accept email
- For now, store in a simple JSON approach or just send notification email via Resend
- Can be upgraded to ConvertKit/Buttondown later

4. PAGE LAYOUT:
- Headline: "Let's build something exceptional."
- Body text from v3 about working with select number of clients, honest assessment, no-obligation
- Form on top
- Below: four-column info grid — Email (raj@koovis.ai), Headquarters (Seattle, USA), Response Time (Within 24 hours), LinkedIn (link)
```

---

## Phase 4: Polish & Performance

### Prompt 12 — Animations and micro-interactions

```
Add polish across all pages:

1. Page transitions: subtle fade-in on route change
2. AnimateIn on all major sections (stagger children)
3. Navbar: smooth background transition on scroll
4. Hover effects: all interactive elements should have considered hover states
5. The grid background on the homepage should have a very slow CSS animation
6. Pulsing dot animation for "In active development" indicators
7. Focus states on all form inputs (cyan border glow)
8. Smooth scroll behavior
9. Loading states for any async operations
```

### Prompt 13 — SEO and metadata

```
Set up comprehensive SEO:

1. Root metadata in layout.tsx:
   - Title template: "%s | Koovis AI"
   - Default title: "Koovis AI — From Model to Market"
   - Description: "Custom AI product development for startups. Founded by Rajesh Kolachana, ex-Amazon Senior Data Scientist with 11+ years in ML."
   - OpenGraph image (generate a simple OG image with the logo + tagline)
   - Twitter card metadata
   - Canonical URL: https://www.koovis.ai

2. Per-page metadata:
   - Each page should export its own metadata with unique title and description
   - Blog posts should have dynamic metadata from frontmatter

3. Add robots.txt and sitemap.xml (Next.js built-in)

4. Add structured data (JSON-LD) for:
   - Organization (Koovis AI LLC)
   - Person (Rajesh Kolachana)
   - WebSite
```

### Prompt 14 — Responsive design audit

```
Audit and fix responsive design across all breakpoints:

- Mobile: 320px - 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px+

Check:
1. Homepage hero text doesn't overflow on mobile
2. Grid layouts collapse properly (2-col → 1-col)
3. Navigation works on all sizes
4. Contact form is usable on mobile
5. Typography scales appropriately (use clamp())
6. Touch targets are at least 44x44px
7. No horizontal scroll anywhere
8. Images and cards don't break layout
```

---

## Phase 5: Deploy

### Prompt 15 — Environment variables and deployment prep

```
Set up for deployment:

1. Create .env.local with:
   RESEND_API_KEY=re_xxxxx  (I'll fill this in)
   CONTACT_EMAIL=raj@koovis.ai
   NEXT_PUBLIC_SITE_URL=https://www.koovis.ai

2. Create .env.example with the same keys but empty values

3. Create a proper .gitignore (include .env.local, node_modules, .next, etc.)

4. Create a README.md with:
   - Project description
   - Tech stack
   - How to run locally
   - Environment variables needed
   - Deployment instructions

5. Make sure all API routes check for required env vars and return helpful errors if missing

6. Run a production build (npm run build) and fix any errors or warnings
```

---

## Phase 6: Manual Steps (Outside Claude Code)

These steps you'll do in browser/terminal yourself:

### Step A — GitHub
```bash
cd koovis-ai-website
git init
git add .
git commit -m "Initial commit: Koovis AI website"
git remote add origin git@github.com:YOUR_USERNAME/koovis-ai-website.git
git push -u origin main
```

### Step B — Vercel
1. Go to vercel.com → "Add New Project"
2. Import your GitHub repo
3. Add environment variables:
   - `RESEND_API_KEY` → get from resend.com dashboard
   - `CONTACT_EMAIL` → raj@koovis.ai
   - `NEXT_PUBLIC_SITE_URL` → https://www.koovis.ai
4. Deploy

### Step C — Namecheap DNS
1. Log into Namecheap → Domain List → koovis.ai → Manage
2. Go to "Domain" tab → Nameservers
3. Select "Custom DNS"
4. Enter:
   - ns1.vercel-dns.com
   - ns2.vercel-dns.com
5. Save. Wait 10-30 minutes for propagation.

### Step D — Vercel Domain
1. In Vercel dashboard → your project → Settings → Domains
2. Add: `koovis.ai` and `www.koovis.ai`
3. Vercel will auto-configure SSL certificates
4. Set `www.koovis.ai` as primary and redirect non-www

### Step E — Resend Setup
1. Sign up at resend.com
2. Add domain: koovis.ai
3. Add the DNS records Resend provides (in Namecheap if you switch back, or Vercel DNS if using their nameservers)
4. Verify domain
5. Create API key → add to Vercel env vars

### Step F — Email Setup (for raj@koovis.ai)
Option 1: **Zoho Mail** (free for 1 user)
1. Go to zoho.com/mail → sign up with koovis.ai domain
2. Add MX records to your DNS
3. Create raj@koovis.ai mailbox

Option 2: **Google Workspace** ($6/mo)
1. Sign up at workspace.google.com
2. Add MX records
3. Full Gmail experience with @koovis.ai

---

## Prompt Execution Order Summary

Run these prompts in Claude Code sequentially:

| # | Prompt | What it does | Est. time |
|---|--------|-------------|-----------|
| 1 | Project scaffolding | Next.js + deps + file structure | 5 min |
| 2 | Fonts & styles | Tailwind config, global CSS, layout | 5 min |
| 3 | Navbar | Navigation component | 10 min |
| 4 | Footer | Footer with newsletter | 10 min |
| 5 | Shared UI | Button, SectionLabel, etc. | 5 min |
| 6 | Homepage | Full homepage with all sections | 20 min |
| 7 | About page | Founder story + principles | 10 min |
| 8 | Services page | Service details + process | 10 min |
| 9 | Products page | WealthPilot + coming soon | 10 min |
| 10 | Blog | MDX infrastructure + sample post | 15 min |
| 11 | Contact | Form + API routes | 15 min |
| 12 | Animations | Polish and micro-interactions | 10 min |
| 13 | SEO | Metadata, sitemap, structured data | 10 min |
| 14 | Responsive | Mobile/tablet audit and fixes | 10 min |
| 15 | Deploy prep | Env vars, README, build test | 5 min |
| A-F | Manual steps | GitHub, Vercel, DNS, email | 30 min |

**Total estimated time: ~3 hours**

---

## Tips for Best Results in Claude Code

1. **Give Claude Code the blueprint file as context.** At the start of each session:
   ```
   Read @Koovis_AI_Website_Blueprint_v3.md — this contains all the brand copy and design direction for the site.
   ```

2. **Run one prompt at a time.** Check the output, test locally (`npm run dev`), then proceed.

3. **If something looks wrong**, screenshot it and paste it into Claude Code with:
   ```
   This section doesn't look right. [paste screenshot] Fix the layout/styling to match the design direction.
   ```

4. **Test locally between each prompt:**
   ```bash
   npm run dev
   # Visit http://localhost:3000 and check each page
   ```

5. **Before deploying, run:**
   ```bash
   npm run build
   ```
   Fix any build errors before pushing to GitHub.

6. **Keep the blueprint file in your project root** so you can reference it easily:
   ```bash
   cp ~/path/to/Koovis_AI_Website_Blueprint_v3.md ./BLUEPRINT.md
   ```
