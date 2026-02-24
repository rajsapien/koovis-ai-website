"use client";

import { useState, FormEvent } from "react";
import Button from "./Button";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
      <div className="flex items-center justify-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-5 py-2.5">
        <span className="text-accent">&#10003;</span>
        <p className="text-sm text-accent">You&apos;re subscribed!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        name="email"
        type="email"
        placeholder="you@company.com"
        required
        className="flex-1 rounded-full border border-border bg-surface px-4 py-3 text-sm text-heading placeholder:text-text-dim outline-none transition-all duration-200 focus:border-accent/50 focus:shadow-[0_0_12px_rgb(var(--color-accent-rgb)/0.15)] min-h-[44px]"
      />
      <Button type="submit" size="sm" disabled={status === "loading"}>
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </Button>

      {status === "error" && (
        <p className="self-center text-sm text-red-400">Error. Try again.</p>
      )}
    </form>
  );
}
