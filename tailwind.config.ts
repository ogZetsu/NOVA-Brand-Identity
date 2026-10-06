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
        cream: {
          50: "#FAF7F2",
          100: "#F8F4EC",
          200: "#EFE8DA",
          300: "#E3D7C2",
          400: "#D3C2A5",
          900: "#1A1712",
        },
        charcoal: {
          50: "#404040",
          100: "#333333",
          500: "#242424",
          800: "#181818",
          900: "#121212",
          950: "#0A0A0A",
        },
        peach: {
          100: "#FDF0EB",
          300: "#F8D9CE",
          500: "#F3C7B5",
          600: "#E5A890",
        },
        powder: {
          100: "#F1F6FA",
          300: "#DBE7F1",
          500: "#C9DDEA",
          600: "#A2C3DA",
        },
        sage: {
          100: "#F0F4EF",
          300: "#D4E0D2",
          500: "#B8C8B5",
          600: "#98AC95",
        },
        lavender: {
          100: "#F5F2F9",
          300: "#E5DEF0",
          500: "#D8CEE6",
          600: "#B9A5CF",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      backgroundImage: {
        "cream-grid": "linear-gradient(to right, rgba(36, 36, 36, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(36, 36, 36, 0.04) 1px, transparent 1px)",
        "dark-grid": "linear-gradient(to right, rgba(248, 244, 236, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(248, 244, 236, 0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
