import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Koovis AI — From Model to Market",
  description:
    "We engineer production-grade AI systems for companies that demand more than demos. From architecture through production — no agency overhead.",
  alternates: { canonical: "https://www.koovis.ai" },
};

/* ---------- DATA ---------- */

const services = [
  {
    num: "01",
    title: "Custom AI Product Development",
    desc: "End-to-end product engineering — model selection, training, API design, production deployment, and monitoring that keeps it reliable.",
    tags: ["Python", "PyTorch", "AWS SageMaker", "FastAPI", "Docker"],
  },
  {
    num: "02",
    title: "AI Architecture & Strategy",
    desc: "Honest assessments and architectures that scale with your business — not architectures that impress in a pitch deck.",
    tags: ["System Design", "Cost Modeling", "MLOps", "Cloud Architecture"],
  },
  {
    num: "03",
    title: "ML Infrastructure & Operations",
    desc: "Data pipelines, model serving, A/B testing, CI/CD for ML, and cost optimization — the unsexy work that makes AI actually work.",
    tags: ["Airflow", "Kubernetes", "Terraform", "MLflow", "Spark"],
  },
];

const metrics = [
  {
    value: "$4.4B",
    label: "GMS Driven",
    desc: "Built a recommendation engine using causal ML (Double Machine Learning) that informed targeting, incentive design, and fee-setting across 7 global marketplaces.",
  },
  {
    value: "$26M",
    label: "Annual Revenue",
    desc: "Engineered an NLP-driven review relevance system using FastText embeddings, deployed across 9 marketplaces.",
  },
  {
    value: "$14.3M",
    label: "Incremental Revenue",
    desc: "Created probabilistic reorder models using Bayesian methods, lifting click-through rates by 37%.",
  },
  {
    value: "$1.9M",
    label: "Annual Profit Lift",
    desc: "Built a keyword bidding optimization engine using incremental profit metrics for paid advertising.",
  },
  {
    value: "33%",
    label: "YoY Adoption Increase",
    desc: "Developed a Pan-EU recommendation engine with calibrated interval forecasts.",
  },
  {
    value: "1,000+",
    label: "Users Globally",
    desc: "Built a natural language to SQL system that became a production product used by account managers worldwide.",
  },
  {
    value: "7",
    label: "Global Marketplaces",
    desc: "Deployed ML systems across US, UK, DE, FR, IT, ES, and JP — each with unique data patterns and business constraints.",
  },
];

const whyUsCards = [
  {
    title: "Production-Grade Engineering",
    desc: "We build systems that run reliably at 3 AM, not systems that look great in a slide deck. The same engineering rigor behind billion-dollar platforms, applied to your problem.",
  },
  {
    title: "Full Lifecycle Ownership",
    desc: "From first architecture decision to production deployment and ongoing monitoring. No handoffs, no gaps, no surprises.",
  },
  {
    title: "Radical Technical Honesty",
    desc: "We'll tell you if you don't need ML. We'll tell you if your timeline is unrealistic. Honest advice, even when it means less work for us.",
  },
  {
    title: "Battle-Tested Across Domains",
    desc: "NLP, recommendation systems, forecasting, causal inference, ad optimization — we've shipped production systems across all of them.",
  },
  {
    title: "Speed Without Compromise",
    desc: "We move fast because we've solved these problems before. Not because we cut corners. Working code every week, not quarterly demos.",
  },
  {
    title: "Depth That Compounds",
    desc: "Years of shipping ML systems at scale means pattern recognition that accelerates every project. We've seen what works and what doesn't.",
  },
];

const wpFeatures = [
  { title: "ML-Driven Signals", desc: "Advanced models that surface opportunities traditional analysis misses." },
  { title: "Real-Time Processing", desc: "Live data ingestion and decision-making at market speed." },
  { title: "Risk Management", desc: "Built-in position sizing, stop-loss logic, and exposure controls." },
  { title: "Backtesting Engine", desc: "Validate strategies against historical data before going live." },
  { title: "Adaptive Strategies", desc: "Models that evolve with changing market conditions automatically." },
  { title: "Data Pipeline", desc: "Robust ingestion from multiple data sources with quality monitoring." },
];

/* ---------- PAGE ---------- */

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden -mt-[72px] pt-[72px]">
        {/* Animated grid */}
        <div className="animated-grid pointer-events-none absolute inset-0" />

        {/* Radial glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/[0.07] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 text-center">
          <AnimateIn>
            <h1 className="font-serif text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.15] tracking-tight text-white">
              Your AI Deserves Better Than a{" "}
              <span className="text-accent italic">Proof of Concept.</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-400">
              We engineer production-grade AI systems for companies that demand
              more than demos. End-to-end — from architecture through deployment.
              No agency overhead. No junior handoffs. Just senior engineering,
              applied to your hardest problems.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Start a Project <ArrowRight size={16} />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Our Work <ArrowRight size={16} />
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== MISSION STATEMENT ==================== */}
      <section className="border-t border-white/10 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <div className="border-l-2 border-accent/40 pl-8 sm:pl-12">
            <AnimateIn>
              <SectionLabel>Our Mission</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <SectionTitle className="mt-5">
                We exist to close the most expensive gap in AI.
              </SectionTitle>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-neutral-400">
                The AI industry has a delivery problem. Companies invest millions in
                models that never make it to production. Prototypes get celebrated
                while deployment pipelines remain nonexistent. The gap between
                &ldquo;it works in a notebook&rdquo; and &ldquo;it&apos;s running
                reliably in production&rdquo; is where most AI investments go to die.
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-400">
                We founded Koovis AI to close that gap — with engineering rigor
                forged at the scale of global marketplaces, now applied to companies
                that refuse to settle for prototypes.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <p className="mt-6 text-lg font-medium text-white">
                We don&apos;t just build AI. We build AI that works when it matters.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ==================== CAPABILITIES / WHAT WE DO ==================== */}
      <section className="border-t border-white/10 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20">
          {/* Left column */}
          <div className="flex flex-col justify-center">
            <AnimateIn>
              <SectionLabel>Capabilities</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <SectionTitle className="mt-5">
                End-to-end AI engineering for companies that{" "}
                <em>demand more.</em>
              </SectionTitle>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-neutral-400">
                When AI is treated as an experiment, it produces experiments. When
                it&apos;s treated as engineering, it produces systems that drive
                revenue, reduce costs, and create competitive advantage. We treat
                every project as the latter.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <div className="mt-8">
                <Button href="/services" variant="ghost">
                  Explore Services <ArrowRight size={16} />
                </Button>
              </div>
            </AnimateIn>
          </div>

          {/* Right column — service rows */}
          <div className="flex flex-col justify-center gap-4">
            {services.map((svc, i) => (
              <AnimateIn key={svc.num} delay={0.1 + i * 0.1}>
                <Link
                  href="/services"
                  className="group flex items-start gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-200 hover:border-accent/20 hover:bg-white/[0.04]"
                >
                  <span className="font-jetbrains text-sm font-semibold text-accent/60 group-hover:text-accent transition-colors">
                    {svc.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-white">
                      {svc.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      {svc.desc}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {svc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-accent/[0.08] px-2.5 py-0.5 font-jetbrains text-[10px] text-accent/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight
                    size={18}
                    className="mt-1 flex-shrink-0 text-neutral-600 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-accent"
                  />
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROOF SECTION ==================== */}
      <section className="border-t border-white/10 bg-white/[0.02] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Proven Impact</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              We don&apos;t make promises. We point to <em>results.</em>
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400">
              Production systems, not prototypes. Real revenue impact, measured
              in real dollars, deployed across real global marketplaces.
            </p>
          </AnimateIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {metrics.map((m, i) => (
              <AnimateIn key={m.value + m.label} delay={0.05 * i}>
                <div className="group h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-accent/20">
                  <p className="font-jetbrains text-3xl font-semibold text-accent">
                    {m.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {m.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {m.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY KOOVIS AI ==================== */}
      <section className="border-t border-white/10 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Why Us</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Built different. Engineered to <em>outperform.</em>
            </SectionTitle>
          </AnimateIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUsCards.map((card, i) => (
              <AnimateIn key={card.title} delay={0.05 + i * 0.07}>
                <div className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-accent/20">
                  <div className="mb-4 h-0.5 w-10 bg-accent/60" />
                  <h3 className="text-base font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {card.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WEALTHPILOT TEASER ==================== */}
      <section className="relative border-t border-white/10 py-16 sm:py-24 lg:py-32 overflow-hidden">
        {/* Left edge cyan gradient */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-accent/[0.04] to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left — copy */}
            <div className="flex flex-col justify-center">
              <AnimateIn>
                <SectionLabel>Flagship Product</SectionLabel>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h2 className="mt-5 font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-semibold tracking-tight text-white">
                  WealthPilot
                </h2>
                <p className="mt-2 font-serif text-lg italic text-neutral-400">
                  Where machine learning meets market intelligence.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <p className="mt-6 text-base leading-relaxed text-neutral-400">
                  Beyond client work, we build our own AI products. WealthPilot is
                  an intelligent quantitative trading system powered by machine
                  learning — designed to surface opportunities that traditional
                  analysis misses. Every algorithm is battle-tested against historical
                  data before seeing a single live dollar.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.3}>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Button href="/products">
                    Request Early Access <ArrowRight size={16} />
                  </Button>
                  <span className="flex items-center gap-2 text-sm text-neutral-400">
                    <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-green-400" />
                    In active development — early access opening soon
                  </span>
                </div>
              </AnimateIn>
            </div>

            {/* Right — feature grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {wpFeatures.map((f, i) => (
                <AnimateIn key={f.title} delay={0.1 + i * 0.08}>
                  <div className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-accent/20">
                    <h3 className="text-sm font-semibold text-white">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-500">{f.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="border-t border-white/10 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-5 sm:px-6 text-center">
          <AnimateIn>
            <SectionTitle as="h2">
              The companies that win in AI are building{" "}
              <em>right now.</em>
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-neutral-400">
              We work with a select number of clients at a time to ensure every
              engagement gets the focus it deserves. Every week you wait, your
              competitors are shipping. The best time to build was yesterday.
              The second best time is now.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Start a Conversation <ArrowRight size={16} />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule a Call <ArrowRight size={16} />
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
