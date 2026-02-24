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
  {
    href: "https://linkedin.com/in/rajesh-kolachana-4b7a7b22",
    label: "Linkedin",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/rajeshkolachana",
    label: "X",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/rajsapien",
    label: "Github",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
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
          className="flex-1 rounded-lg border border-border bg-surface px-4 py-3 text-sm text-heading placeholder:text-text-dim outline-none transition-all duration-200 focus:border-accent/50 focus:shadow-[0_0_12px_rgb(var(--color-accent-rgb)/0.15)] min-h-[44px]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex-shrink-0 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-heading transition-colors hover:brightness-110 disabled:opacity-50"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
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

function Diamond({ size = 18 }: { size?: number }) {
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
    <footer className="border-t border-border bg-bg">
      {/* Main grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-3 md:gap-8">
        {/* Column 1: Logo + tagline + social */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Diamond />
            <span className="text-base font-bold tracking-[0.2em] uppercase text-heading">
              KOOVIS
            </span>
            <span className="text-base font-bold tracking-[0.2em] uppercase text-accent">
              AI
            </span>
          </Link>

          <p className="text-sm leading-relaxed text-text-muted">
            We build AI-powered products and systems for businesses.
            <br />
            From architecture to deployment.
          </p>

          {/* Social links */}
          <ul className="flex gap-5">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-jetbrains text-xs uppercase tracking-wider text-text-dim transition-colors hover:text-accent"
                >
                  {link.icon}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.2em] text-text-dim mb-5">
            Navigation
          </h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div>
          <h3 className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.2em] text-text-dim mb-5">
            Newsletter
          </h3>
          <p className="text-sm text-text-muted mb-5">
            AI insights, product updates, and founder stories. No spam.
          </p>
          <FooterNewsletter />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 sm:flex-row">
          <p className="font-jetbrains text-[11px] tracking-wide text-text-dim">
            &copy; 2026 Koovis AI LLC. Delaware, USA.
          </p>
          <p className="font-jetbrains text-[11px] tracking-wide text-text-dim">
            Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
