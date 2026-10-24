import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: {
          DEFAULT: "#F8F9FA",
          secondary: "#F3F4F6",
          tertiary: "#EDEDF0",
        },
        charcoal: {
          DEFAULT: "#111827",
          deep: "#0B0F19",
          muted: "#374151",
        },
        muted: {
          DEFAULT: "#6B7280",
          light: "#9CA3AF",
          dark: "#4B5563",
        },
        lime: {
          DEFAULT: "#C8F169",
          neon: "#C6F04C",
          hover: "#B8E852",
          light: "#E2F99B",
          dark: "#A5DC35",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(17, 24, 39, 0.08)",
        "glass-sm": "0 4px 16px 0 rgba(17, 24, 39, 0.05)",
        "glass-subtle": "0 20px 40px -15px rgba(0, 0, 0, 0.05)",
        "lime-glow": "0 10px 30px -5px rgba(200, 241, 105, 0.45)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
