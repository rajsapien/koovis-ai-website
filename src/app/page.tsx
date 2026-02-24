import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Koovis AI — We Build AI-Powered Products & Systems for Your Business",
  description:
    "We partner with businesses to build production-grade AI systems — from architecture through deployment. Senior engineering, applied directly to your hardest problems.",
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

const whoWeWorkWith = [
  {
    title: "Building an AI-Powered Product",
    desc: "You have a product vision that requires ML at its core \u2014 recommendation engines, intelligent automation, NLP systems, computer vision. You need a senior engineering partner who\u2019s built these at global scale.",
  },
  {
    title: "Stuck Between Prototype and Production",
    desc: "Your team built a model that works in a notebook. Now you need the deployment infrastructure, monitoring, and production hardening that comes from shipping ML systems serving millions of users.",
  },
  {
    title: "Need AI Strategy Before Committing",
    desc: "You\u2019re exploring AI for your business but aren\u2019t sure what\u2019s feasible, what it\u2019ll cost, or whether to build or buy. You need an honest technical assessment, not a sales pitch.",
  },
  {
    title: "Scaling Without a Full ML Team",
    desc: "You\u2019re too early to hire a dedicated data science team but too ambitious for off-the-shelf solutions. You need embedded AI engineering leadership that moves at the speed of your business.",
  },
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
            <h1 className="font-serif text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.15] tracking-tight text-heading">
              Your AI Deserves Better Than a{" "}
              <span className="text-accent italic">Proof of Concept.</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-text-muted">
              We partner with businesses to design, build, and deploy
              production-grade AI systems. End-to-end product and systems
              development — from architecture through deployment. No agency
              overhead. No junior handoffs. Just senior engineering, applied
              directly to your hardest problems.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="#work-with-us" size="lg">
                Book a Consultation <ArrowRight size={16} />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                See How We Work <ArrowRight size={16} />
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== MISSION STATEMENT ==================== */}
      <section className="border-t border-border py-16 sm:py-24 lg:py-32">
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
              <p className="mt-6 text-base leading-relaxed text-text-muted">
                Most businesses that invest in AI hit the same wall: the model
                works in a demo but never makes it to production. Prototypes get
                celebrated while the engineering needed to turn them into real
                products &mdash; data pipelines, deployment infrastructure,
                monitoring, reliability &mdash; gets underestimated or ignored.
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                We founded Koovis AI to solve that problem for businesses like
                yours. We bring the engineering rigor forged at the scale of
                global marketplaces and apply it to building the AI-powered
                products and systems your business actually needs.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <p className="mt-6 text-lg font-medium text-heading">
                We don&apos;t just build AI. We build AI-powered products and
                systems that drive real business results.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ==================== CAPABILITIES / WHAT WE DO ==================== */}
      <section className="border-t border-border py-16 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20">
          {/* Left column */}
          <div className="flex flex-col justify-center">
            <AnimateIn>
              <SectionLabel>Capabilities</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <SectionTitle className="mt-5">
                We build the AI-powered products and systems your{" "}
                <em>business needs.</em>
              </SectionTitle>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-text-muted">
                Whether you need an intelligent product built from scratch, a
                model taken from prototype to production, or a technical strategy
                before committing &mdash; we handle it end-to-end. Every
                engagement is engineered to drive revenue, reduce costs, or
                create lasting competitive advantage.
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
                  className="group flex items-start gap-5 rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-200 hover:border-accent/20 hover:bg-surface"
                >
                  <span className="font-jetbrains text-sm font-semibold text-accent/60 group-hover:text-accent transition-colors">
                    {svc.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-heading">
                      {svc.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-dim">
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
                    className="mt-1 flex-shrink-0 text-text-dim opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-accent"
                  />
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROOF SECTION ==================== */}
      <section className="border-t border-border bg-surface py-16 sm:py-24 lg:py-32">
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
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted">
              Production systems, not prototypes. Real revenue impact, measured
              in real dollars, deployed across real global marketplaces.
            </p>
          </AnimateIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {metrics.map((m, i) => (
              <AnimateIn key={m.value + m.label} delay={0.05 * i}>
                <div className="group h-full rounded-2xl border border-border-subtle bg-surface p-6 transition-colors hover:border-accent/20">
                  <p className="font-jetbrains text-3xl font-semibold text-accent">
                    {m.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-heading">
                    {m.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-dim">
                    {m.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY KOOVIS AI ==================== */}
      <section className="border-t border-border py-16 sm:py-24 lg:py-32">
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
                <div className="h-full rounded-2xl border border-border-subtle bg-surface p-6 transition-colors hover:border-accent/20">
                  <div className="mb-4 h-0.5 w-10 bg-accent/60" />
                  <h3 className="text-base font-semibold text-heading">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-dim">
                    {card.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHO WE WORK WITH ==================== */}
      <section className="relative border-t border-border py-16 sm:py-24 lg:py-32 overflow-hidden">
        {/* Left edge cyan gradient */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-accent/[0.04] to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Who We Work With</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Built for businesses that refuse to settle for{" "}
              <em>demos.</em>
            </SectionTitle>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted">
              We work best with companies that have a real problem, a clear
              ambition, and the willingness to invest in getting it right. If
              any of these sound like you, we should talk.
            </p>
          </AnimateIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {whoWeWorkWith.map((item, i) => (
              <AnimateIn key={item.title} delay={0.1 + i * 0.08}>
                <div className="h-full rounded-2xl border border-border-subtle bg-surface p-6 transition-colors hover:border-accent/20">
                  <div className="mb-4 h-0.5 w-10 bg-accent/60" />
                  <h3 className="text-base font-semibold text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-dim">
                    {item.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.5}>
            <div className="mt-10 text-center">
              <Button href="#work-with-us" size="lg">
                Sound Like You? Let&apos;s Talk <ArrowRight size={16} />
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== WORK WITH US ==================== */}
      <section id="work-with-us" className="border-t border-border py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div className="text-center">
            <AnimateIn>
              <SectionLabel>Work With Us</SectionLabel>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <SectionTitle as="h2" className="mt-5">
                Ready to build something <em>exceptional?</em>
              </SectionTitle>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-text-muted">
                We take on a limited number of consulting engagements at a time
                to ensure exceptional results. Tell us about your project
                &mdash; no obligation, no sales pitch. Just an honest
                assessment of how we can help.
              </p>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.3}>
            <div className="mt-12">
              <ContactForm />
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
