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
        bg: "#0a0a0b",
        card: "#111113",
        border: "#222225",
        "border-light": "#2a2a2e",
        text: "#e4e4e7",
        "text-muted": "#71717a",
        "text-dim": "#52525b",
        accent: {
          DEFAULT: "#22d3ee",
          dim: "rgba(34, 211, 238, 0.12)",
          glow: "rgba(34, 211, 238, 0.25)",
        },
        white: "#fafafa",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
