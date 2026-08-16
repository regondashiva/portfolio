import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        stone: {
          50: "#FAF9F6",
          100: "#F3F1EC",
          200: "#E7E3DC",
          300: "#DDD9D2",
          400: "#C8C2B7",
          500: "#9E988E",
          600: "#78736B",
          700: "#5A554E",
          800: "#383531",
          900: "#1F1E1D",
          950: "#141312",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
