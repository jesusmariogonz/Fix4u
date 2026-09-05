import type { Config } from "tailwindcss";

// Brand colors for Fix4U. Adjust here once the final logo/brand guide is
// provided by the client — every component references these tokens rather
// than hard-coded hex values, so a rebrand only touches this file.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B4C8C",
          light: "#1665B8",
          dark: "#083A6B",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          soft: "#1A1A1A",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E6C866",
        },
        "red-accent": {
          DEFAULT: "#C81E1E",
          dark: "#A11616",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
