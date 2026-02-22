"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://x.com", label: "X / Twitter" },
  { href: "https://github.com", label: "GitHub" },
];

function FooterNewsletter() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed to subscribe");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 rounded-lg border border-accent/20 bg-accent/5 px-4 py-3">
        <span className="text-accent text-lg">&#10003;</span>
        <p className="text-sm text-accent">
          You&apos;re subscribed! Check your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex gap-2">
        <input
          name="email"
          type="email"
          placeholder="you@company.com"
          required
          className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none transition-all duration-200 focus:border-accent/50 focus:shadow-[0_0_12px_rgba(34,211,238,0.15)] min-h-[44px]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex-shrink-0 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-colors hover:brightness-110 disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-xs text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

function Diamond({ size = 22 }: { size?: number }) {
  const inner = size * 0.45;
  return (
    <span
      className="relative inline-flex items-center justify-center flex-shrink-0"
      style={{ width: size, height: size }}
    >
      <span className="absolute inset-0 rotate-45 rounded-[2px] border-2 border-accent" />
      <span
        className="absolute rotate-45 rounded-[1px] bg-accent"
        style={{ width: inner, height: inner }}
      />
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      {/* Main grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-3 md:gap-8">
        {/* Column 1: Logo + tagline + social */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Diamond />
            <span className="text-base font-bold tracking-[0.2em] uppercase text-white">
              KOOVIS
            </span>
            <span className="text-base font-bold tracking-[0.2em] uppercase text-accent">
              AI
            </span>
          </Link>

          <p className="text-sm leading-relaxed text-neutral-400">
            Custom AI product development for startups.
            <br />
            From model to market.
          </p>

          {/* Social links */}
          <ul className="flex gap-5">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-jetbrains text-xs uppercase tracking-wider text-neutral-500 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-5">
            Navigation
          </h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-neutral-400 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div>
          <h3 className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-5">
            Newsletter
          </h3>
          <p className="text-sm text-neutral-400 mb-5">
            AI insights, product updates, and founder stories. No spam.
          </p>
          <FooterNewsletter />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 sm:flex-row">
          <p className="font-jetbrains text-[11px] tracking-wide text-neutral-600">
            &copy; 2025 Koovis AI LLC. Delaware, USA.
          </p>
          <p className="font-jetbrains text-[11px] tracking-wide text-neutral-600">
            Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
