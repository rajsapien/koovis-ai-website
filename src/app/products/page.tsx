import type { Metadata } from "next";
import {
  ArrowRight,
  Brain,
  Activity,
  Shield,
  FlaskConical,
  TrendingUp,
  Database,
  HelpCircle,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Products",
  description:
    "AI products built on real ML — WealthPilot and more coming soon.",
};

/* ---------- DATA ---------- */

const wpFeatures = [
  {
    icon: Brain,
    title: "ML-Driven Signals",
    desc: "Advanced models trained on historical and live market data to identify high-probability setups.",
  },
  {
    icon: Activity,
    title: "Real-Time Processing",
    desc: "Sub-second data ingestion and decision-making that operates at market speed.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    desc: "Built-in position sizing, dynamic stop-loss logic, and portfolio exposure controls.",
  },
  {
    icon: FlaskConical,
    title: "Backtesting Engine",
    desc: "Validate any strategy against years of historical data before risking real capital.",
  },
  {
    icon: TrendingUp,
    title: "Adaptive Strategies",
    desc: "Models that retrain and recalibrate as market regimes shift — no manual intervention.",
  },
  {
    icon: Database,
    title: "Data Pipeline",
    desc: "Production-grade data infrastructure handling market feeds, alternative data, and feature engineering.",
  },
];

const comingSoon = [
  {
    title: "Coming Soon",
    desc: "A new AI product is in the research phase. Subscribe to the newsletter to be the first to know when it launches.",
  },
  {
    title: "Coming Soon",
    desc: "Another tool is being explored. Early access and details will be shared with newsletter subscribers first.",
  },
];

/* ---------- PAGE ---------- */

export default function ProductsPage() {
  return (
    <>
      {/* ==================== HEADER ==================== */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 pt-24 pb-16">
        <AnimateIn>
          <SectionLabel>Products</SectionLabel>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <SectionTitle className="mt-5">
            Digital products built on <em>real ML</em>
          </SectionTitle>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400">
            Beyond client work, we build our own AI products — solving hard
            problems with production-grade machine learning.
          </p>
        </AnimateIn>
      </section>

      {/* ==================== WEALTHPILOT ==================== */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-white/[0.02]">
              {/* Left gradient overlay */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-accent/[0.06] to-transparent" />

              {/* Flagship badge */}
              <div className="absolute right-3 top-3 sm:right-5 sm:top-5 z-10 rounded-full bg-accent px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-950">
                Flagship
              </div>

              <div className="relative z-[1] p-5 sm:p-8 lg:p-12">
                {/* Title area */}
                <SectionLabel>Flagship Product</SectionLabel>
                <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  WealthPilot
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400">
                  An intelligent quantitative trading system powered by machine
                  learning — designed to surface opportunities that traditional
                  analysis misses. Built with the same production rigor we brought
                  to billion-dollar recommendation systems.
                </p>

                {/* Feature grid */}
                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {wpFeatures.map((f, i) => (
                    <AnimateIn key={f.title} delay={0.05 + i * 0.06}>
                      <div className="flex gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-accent/20">
                        <f.icon
                          size={22}
                          className="mt-0.5 flex-shrink-0 text-accent"
                          strokeWidth={1.5}
                        />
                        <div>
                          <h3 className="text-sm font-semibold text-white">
                            {f.title}
                          </h3>
                          <p className="mt-1.5 text-xs leading-relaxed text-neutral-500">
                            {f.desc}
                          </p>
                        </div>
                      </div>
                    </AnimateIn>
                  ))}
                </div>

                {/* CTA row */}
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <Button href="/contact">
                    Request Early Access <ArrowRight size={16} />
                  </Button>
                  <span className="flex items-center gap-2 text-sm text-neutral-400">
                    <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-green-400" />
                    In active development
                  </span>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== COMING SOON ==================== */}
      <section className="border-t border-white/10 bg-white/[0.02] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>More Products</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">On the horizon</SectionTitle>
          </AnimateIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {comingSoon.map((item, i) => (
              <AnimateIn key={i} delay={0.1 + i * 0.1}>
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-transparent p-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <HelpCircle
                      size={24}
                      className="text-neutral-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-neutral-500">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Newsletter inline */}
          <AnimateIn delay={0.3}>
            <div className="mx-auto mt-12 max-w-md text-center">
              <p className="mb-4 text-sm text-neutral-500">
                Get notified when new products launch.
              </p>
              <NewsletterForm />
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
