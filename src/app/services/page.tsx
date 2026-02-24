import type { Metadata } from "next";
import { Box, Compass, Wrench, ArrowRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Services",
  description:
    "We build AI-powered products and systems for businesses — custom development, architecture consulting, and ML infrastructure. From first conversation to production deployment.",
};

/* ---------- DATA ---------- */

const serviceCards = [
  {
    icon: Box,
    title: "Custom AI Product Development",
    tagline: "From problem to production, end to end.",
    desc: "You have a business problem. We build the AI-powered product or system that solves it — end to end. Model selection, training, API design, production deployment, and the monitoring that keeps it reliable. We\u2019ve done this across global-scale systems. Now we do it for businesses like yours.",
    capabilities: [
      "Model selection & training pipelines",
      "REST / gRPC API design & serving",
      "Production deployment (AWS, GCP, Azure)",
      "Real-time & batch inference systems",
      "Monitoring, alerting & drift detection",
      "Documentation & team handoff",
    ],
    tags: ["Python", "PyTorch", "TensorFlow", "AWS SageMaker", "FastAPI", "Docker"],
  },
  {
    icon: Compass,
    title: "AI Architecture & Strategy",
    tagline: "Honest assessments. Architectures that scale.",
    desc: "Not sure if you need a fine-tuned LLM, a simple classifier, or just better heuristics? We\u2019ll tell you honestly \u2014 even if the honest answer means less work for us. We design architectures that scale with your business, not architectures that impress in a pitch deck.",
    capabilities: [
      "Technical feasibility assessments",
      "Build vs. buy analysis",
      "Model architecture selection",
      "Data strategy & pipeline design",
      "Cost & latency optimization",
      "Scalability & growth planning",
    ],
    tags: ["System Design", "Cost Modeling", "Cloud Architecture", "MLOps"],
  },
  {
    icon: Wrench,
    title: "ML Infrastructure & Operations",
    tagline: "The unsexy work that makes AI actually work.",
    desc: "Data pipelines, model serving, A/B testing, CI/CD for ML, cost optimization. If your model is great but your infrastructure is held together with duct tape, this is where we come in. We build the foundation that makes everything else reliable.",
    capabilities: [
      "Data pipeline engineering (Spark, Airflow)",
      "Model serving & orchestration",
      "A/B testing & experimentation frameworks",
      "CI/CD for ML (MLflow, SageMaker, Vertex)",
      "Cloud cost optimization",
      "Observability & logging infrastructure",
    ],
    tags: ["Airflow", "Kubernetes", "Terraform", "MLflow", "Spark", "Redis"],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Assessment",
    desc: "We understand your problem, your data, and your business constraints before writing a single line of code. Half of good ML engineering is knowing what not to build. We\u2019ll give you an honest assessment \u2014 even if it means recommending against ML.",
  },
  {
    num: "02",
    title: "Architecture & Design",
    desc: "We design the right approach for your scale, budget, and timeline. Not every problem needs deep learning. Not every startup needs real-time inference. We choose what works, not what\u2019s fashionable.",
  },
  {
    num: "03",
    title: "Build & Validate",
    desc: "Rapid prototyping, validation with real data, then production hardening. Short cycles, constant feedback. You see working code every week \u2014 not quarterly demos.",
  },
  {
    num: "04",
    title: "Deploy, Monitor & Evolve",
    desc: "Production deployment with monitoring, alerting, and documentation your team can maintain. We don\u2019t build systems that only we can understand. And we stay involved as your needs evolve.",
  },
];

const engagementModels = [
  {
    title: "Project-Based",
    desc: "A defined scope with clear deliverables, timeline, and budget. We take your project from specification to production deployment. You get a working system, not a report.",
    bestFor: "Businesses with a specific AI product, system, or feature to build.",
    duration: "Typically 2\u20136 months",
  },
  {
    title: "Embedded Partnership",
    desc: "We embed with your engineering team as a long-term AI partner. We lead the ML engineering while your team handles the product around it. Think of it as your fractional AI engineering team.",
    bestFor: "Companies building AI-powered products that need ongoing senior ML leadership.",
    duration: "3\u201312+ month engagements",
  },
  {
    title: "Architecture Sprint",
    desc: "A focused 2-week engagement to audit your current AI approach, identify gaps, and deliver a detailed technical roadmap with clear next steps. Perfect before committing budget to a full build.",
    bestFor: "Teams that need expert guidance and an honest assessment before investing further.",
    duration: "2 weeks, fixed scope",
  },
];

/* ---------- PAGE ---------- */

export default function ServicesPage() {
  return (
    <>
      {/* ==================== HEADER ==================== */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 pt-24 pb-16">
        <AnimateIn>
          <SectionLabel>Services</SectionLabel>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <SectionTitle className="mt-5">
            From first conversation to{" "}
            <em>production deployment</em> and beyond.
          </SectionTitle>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted">
            We partner with businesses to build AI-powered products and systems
            from zero to production. No handoff &mdash; we stay from
            architecture through deployment and beyond. Every engagement starts
            with an honest assessment: do you actually need what you think you
            need?
          </p>
        </AnimateIn>
      </section>

      {/* ==================== SERVICE CARDS ==================== */}
      <section className="border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((svc, i) => (
              <AnimateIn key={svc.title} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5">
                  {/* Top gradient line */}
                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="p-5 sm:p-7">
                    <svc.icon
                      size={28}
                      className="text-accent"
                      strokeWidth={1.5}
                    />

                    <h3 className="mt-5 text-xl font-semibold text-heading">
                      {svc.title}
                    </h3>

                    <p className="mt-1 font-serif text-sm italic text-text-muted">
                      {svc.tagline}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-text-muted">
                      {svc.desc}
                    </p>

                    <ul className="mt-6 flex flex-col gap-2.5">
                      {svc.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-start gap-2.5 text-sm text-text-dim"
                        >
                          <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60" />
                          {cap}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
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
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="border-t border-border bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Process</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">How we work</SectionTitle>
          </AnimateIn>

          <div className="mt-12 sm:mt-16 grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <AnimateIn key={step.num} delay={0.1 + i * 0.08}>
                <div className="relative">
                  <span className="font-jetbrains text-4xl sm:text-5xl lg:text-6xl font-bold text-text-faint select-none leading-none">
                    {step.num}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-dim">
                    {step.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ENGAGEMENT MODELS ==================== */}
      <section className="border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Engagement Models</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">
              Choose the model that <em>fits.</em>
            </SectionTitle>
          </AnimateIn>

          <div className="mt-12 sm:mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {engagementModels.map((model, i) => (
              <AnimateIn key={model.title} delay={0.1 + i * 0.1}>
                <div className="group h-full rounded-2xl border border-border-subtle bg-surface p-6 transition-colors hover:border-accent/20">
                  <h3 className="text-lg font-semibold text-heading">
                    {model.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {model.desc}
                  </p>
                  <div className="mt-5 space-y-2">
                    <p className="text-sm text-text-dim">
                      <span className="font-medium text-accent/80">Best for:</span>{" "}
                      {model.bestFor}
                    </p>
                    <p className="font-jetbrains text-xs text-text-dim">
                      {model.duration}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-2xl px-6">
          <AnimateIn>
            <div className="rounded-2xl border border-border-subtle bg-surface p-10 text-center">
              <SectionTitle>
                Have a problem worth <em>solving?</em>
              </SectionTitle>
              <p className="mt-4 text-base text-text-muted">
                Every engagement starts with a conversation &mdash; no pressure,
                no commitment. Tell us about the product or system you need
                built, and we&apos;ll give you an honest assessment. The best
                partnerships start with clarity.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="lg">
                  Start a Conversation <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
