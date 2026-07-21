import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#7B1A1A",
          light: "#9a2222",
        },
        gold: {
          DEFAULT: "#C9A96E",
          light: "#e0c48a",
        },
        cream: {
          DEFAULT: "#FAF8F5",
          dark: "#F0ECE5",
        },
        ink: "#2a1010",
        muted: "#5a3a3a",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        script: ["Great Vibes", "cursive"],
        body: ["Jost", "sans-serif"],
      },
      // VIM motion system (docs/MOTION.md) — these read from the same
      // CSS custom properties in globals.css, so `ease-vim`/`duration-*`
      // utilities and raw `var(--ease-vim)` usage never drift apart.
      transitionTimingFunction: {
        vim: "var(--ease-vim)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        base: "var(--duration-base)",
        slow: "var(--duration-slow)",
      },
    },
  },
  plugins: [],
};
export default config;
