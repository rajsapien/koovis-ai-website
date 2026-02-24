"use client";

import { useState, FormEvent } from "react";
import Button from "./Button";

const budgetOptions = [
  "Under $10K",
  "$10K – $25K",
  "$25K – $50K",
  "$50K – $100K",
  "$100K+",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-accent/20 bg-accent/5 p-6">
        <span className="text-2xl text-accent">&#10003;</span>
        <div>
          <p className="font-semibold text-heading">Message received!</p>
          <p className="text-sm text-text-muted">
            We&apos;ll review your project details and get back within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-lg border border-border bg-surface px-4 py-3.5 text-sm text-heading placeholder:text-text-dim outline-none transition-all duration-200 focus:border-accent/50 focus:shadow-[0_0_12px_rgb(var(--color-accent-rgb)/0.15)] min-h-[44px]";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          type="text"
          placeholder="Your name *"
          required
          className={inputClasses}
        />
        <input
          name="email"
          type="email"
          placeholder="Your email *"
          required
          className={inputClasses}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="company"
          type="text"
          placeholder="Company"
          className={inputClasses}
        />
        <select
          name="budget"
          className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%2371717a%22%20d%3D%22M2%204l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10`}
          defaultValue=""
        >
          <option value="" disabled className="bg-card text-text-dim">
            Budget range
          </option>
          {budgetOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-card text-heading">
              {opt}
            </option>
          ))}
        </select>
      </div>
      <textarea
        name="message"
        placeholder="Tell us about your project... *"
        rows={5}
        required
        className={`${inputClasses} resize-none`}
      />
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
