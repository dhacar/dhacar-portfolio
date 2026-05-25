import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Geist", "Satoshi", "ui-sans-serif", "system-ui"]
      },
      colors: {
        ink: {
          950: "#030303",
          900: "#090909",
          800: "#111111",
          700: "#1b1b1b"
        }
      },
      boxShadow: {
        glow: "0 0 80px rgba(255,255,255,0.12)",
        "soft-border": "inset 0 1px 0 rgba(255,255,255,0.10)"
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at center, rgba(255,255,255,0.13), transparent 58%)"
      }
    }
  },
  plugins: []
};

export default config;
