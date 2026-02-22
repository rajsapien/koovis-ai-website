import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind Koovis AI. Founded by Rajesh Kolachana — building production-grade AI for ambitious companies that refuse to settle for prototypes.",
};

const principles = [
  {
    title: "Ship, Don\u2019t Demo",
    desc: "Demos impress. Production creates value. We optimize for systems that run reliably at 3 AM, not systems that look great in a slide deck.",
  },
  {
    title: "Honest Architecture",
    desc: "We\u2019ll recommend the simplest solution that works \u2014 even if it means less work for us. Sometimes the answer isn\u2019t ML. Sometimes it\u2019s a well-written SQL query.",
  },
  {
    title: "Own the Outcome",
    desc: "We\u2019re not a staffing agency. We don\u2019t hand off and disappear. We stay from architecture through deployment, and we\u2019re available when things break.",
  },
  {
    title: "Relentless Standards",
    desc: "Good enough isn\u2019t. Every system we ship meets the bar we\u2019ve held at global scale \u2014 because your users deserve production-grade quality, not MVP compromises.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ==================== HEADER ==================== */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 pt-24 pb-16">
        <AnimateIn>
          <SectionLabel>About</SectionLabel>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <SectionTitle className="mt-5">
            Built by engineers who&apos;ve shipped at the{" "}
            <em>highest level.</em>
          </SectionTitle>
        </AnimateIn>
      </section>

      {/* ==================== COMPANY STORY ==================== */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <AnimateIn>
            <p className="text-base leading-relaxed text-neutral-400">
              Koovis AI was founded on a conviction: the AI industry has a
              delivery problem. Not a talent problem. Not a funding problem. A
              delivery problem. Companies invest heavily in research and
              prototyping, then watch those investments stall at the production
              boundary &mdash; the gap between &ldquo;it works in a
              notebook&rdquo; and &ldquo;it drives revenue reliably at
              scale.&rdquo;
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-neutral-400">
              We built Koovis AI to close that gap. Our founding team spent years
              building ML systems at global scale — recommendation engines,
              NLP systems, advertising optimization — across some of the most
              demanding engineering environments in the world. We know what
              production-grade AI looks like because we&apos;ve built it under
              real constraints, with real stakes.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <p className="mt-5 text-base leading-relaxed text-neutral-400">
              Now we bring that same standard to companies that are too early for
              a full data science team but too ambitious for off-the-shelf
              solutions. We partner with founders and technical leaders who
              understand that the real competitive advantage in AI isn&apos;t the
              model &mdash; it&apos;s the engineering that turns a model into a
              product.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-white/90 font-medium">
              Every engagement we take is a bet on a shared outcome. We
              don&apos;t bill hours and disappear. We ship systems that work, and
              we stand behind them.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== VISION ==================== */}
      <section className="border-t border-white/10 bg-accent/[0.03] py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <AnimateIn>
            <h2 className="font-serif text-2xl font-semibold text-white">
              Our Vision
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-neutral-400">
              We&apos;re building Koovis AI to become one of the most trusted
              names in applied AI engineering. Not the largest. Not the
              flashiest. The most trusted. The company that technical founders
              call when the stakes are real and the margin for error is thin.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-neutral-400">
              Our aspiration is grounded: earn trust through results, grow
              through reputation, and build a portfolio of production systems
              that speaks louder than any pitch deck ever could.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ==================== FOUNDER SECTION ==================== */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Founder</SectionLabel>
          </AnimateIn>

          <div className="mt-10 grid gap-12 sm:gap-16 md:grid-cols-[200px_1fr] md:gap-16 lg:gap-20">
            {/* Photo placeholder */}
            <AnimateIn delay={0.1}>
              <div className="flex flex-col items-center gap-5 lg:items-start lg:sticky lg:top-32">
                <div className="flex h-[160px] w-[160px] sm:h-[200px] sm:w-[200px] items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 shadow-lg shadow-accent/5">
                  <span className="font-serif text-5xl font-semibold text-accent/80 select-none">
                    RK
                  </span>
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="font-serif text-2xl font-semibold text-white">
                    Rajesh Kolachana
                  </h2>
                  <p className="mt-1 font-jetbrains text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    Founder &amp; CEO
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* Bio — first person */}
            <div className="flex flex-col gap-5">
              <AnimateIn delay={0.15}>
                <p className="text-base leading-relaxed text-neutral-400">
                  I&apos;m Rajesh Kolachana. I started my career in structural
                  engineering &mdash; IIT Roorkee for undergrad, Indian Institute
                  of Science (IISc Bangalore) for my master&apos;s, ranked in the
                  top 0.013% nationally in entrance exams (GATE AIR 5). Then I
                  discovered that the same mathematical frameworks I used to model
                  physical structures could model something far more interesting:
                  human behavior, markets, and decisions.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <p className="text-base leading-relaxed text-neutral-400">
                  That pivot led me through InMobi, where I earned a Rising Star
                  Award after scaling an ad account from $3K to $80K daily budget
                  in 8 months. Then to AgreeYa Solutions, where client recognition
                  followed pricing optimization work for Best Buy, Sam&apos;s
                  Club, and Dick&apos;s Sporting Goods. And ultimately to Amazon,
                  where I spent 7 years as a Senior Data Scientist building the
                  systems that mattered most.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.25}>
                <p className="text-base leading-relaxed text-neutral-400">
                  At Amazon, I built the FBA Recommendation Engine that drove
                  $4.4B in GMS using causal ML, engineered NLP systems generating
                  $26M in annual revenue across 9 marketplaces, created
                  probabilistic reorder models that lifted click-through rates by
                  37%, and built a keyword bidding engine that improved annual
                  profits by $1.9M. I won a hackathon building a natural language
                  to SQL system that became a production product used by 1,000+
                  account managers globally.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <p className="text-base leading-relaxed text-neutral-400">
                  I left because I kept seeing the same problem from the outside:
                  companies with strong ideas but no practical path from prototype
                  to production. The gap isn&apos;t the model &mdash; it&apos;s
                  everything around it. Data pipelines, deployment infrastructure,
                  monitoring, model maintenance, and the judgment calls that come
                  from having shipped ML systems at scale.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.35}>
                <p className="text-base leading-relaxed text-white/90 font-medium">
                  That&apos;s why I founded Koovis AI. To bring that same
                  level of ML engineering to companies that need it most &mdash;
                  with the honesty, rigor, and ownership that every engagement
                  deserves.
                </p>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRINCIPLES ==================== */}
      <section className="border-t border-white/10 bg-white/[0.02] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <AnimateIn>
            <SectionLabel>Principles</SectionLabel>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <SectionTitle className="mt-5">How we work</SectionTitle>
          </AnimateIn>

          <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <AnimateIn key={p.title} delay={0.1 + i * 0.1}>
                <div className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                  <div className="mb-5 h-[3px] w-10 rounded-full bg-accent" />
                  <h3 className="text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {p.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-5 sm:px-6">
          <AnimateIn>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10 text-center">
              <SectionTitle>
                Ready to work with a team that <em>ships?</em>
              </SectionTitle>
              <p className="mt-4 text-base text-neutral-400">
                We take on a limited number of engagements to ensure every client
                gets the attention they deserve. Let&apos;s start with a
                conversation.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="lg">
                  Get in Touch <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
