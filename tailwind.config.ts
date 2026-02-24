import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        jetbrains: ["var(--font-jetbrains-mono)", "monospace"],
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
        outfit: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "var(--color-bg)",
        card: "var(--color-card)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        "border-subtle": "var(--color-border-subtle)",
        heading: "var(--color-heading)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        "text-dim": "var(--color-text-dim)",
        "text-faint": "var(--color-text-faint)",
        accent: {
          DEFAULT: "rgb(var(--color-accent-rgb) / <alpha-value>)",
          dim: "var(--color-accent-dim)",
          glow: "var(--color-accent-glow)",
        },
        white: "#fafafa",
        background: "var(--color-bg)",
        foreground: "var(--color-text)",
      },
    },
  },
  plugins: [],
};
export default config;
