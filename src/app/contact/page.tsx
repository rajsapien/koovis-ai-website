import type { Metadata } from "next";
import { Mail, MapPin, Clock, Linkedin } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SectionLabel from "@/components/SectionLabel";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Koovis AI. Custom AI product development — honest assessment, no-obligation consultation.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@koovis.ai",
    href: "mailto:hello@koovis.ai",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Seattle, USA",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with us",
    href: "https://www.linkedin.com/company/koovis-ai",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 sm:px-6 pt-24 pb-16">
        <AnimateIn>
          <SectionLabel>Contact</SectionLabel>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <SectionTitle className="mt-4">
            Let&apos;s build something <em>exceptional.</em>
          </SectionTitle>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
            We work with a select number of clients at a time to ensure every
            engagement gets the attention it deserves. Reach out for an honest
            assessment of your project &mdash; no obligation, no sales pitch.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.25}>
          <div className="mt-12">
            <ContactForm />
          </div>
        </AnimateIn>
      </section>

      {/* ==================== CONTACT INFO GRID ==================== */}
      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, i) => (
              <AnimateIn key={item.label} delay={0.05 * i}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <item.icon size={20} className="text-accent" />
                  <p className="mt-3 font-jetbrains text-xs uppercase tracking-wider text-neutral-500">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-1 block text-sm font-medium text-white hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-white">
                      {item.value}
                    </p>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
