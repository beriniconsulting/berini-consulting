import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#f6f9ff",
        night: "#030812",
        navy: "#071221",
        cyanx: "#35e4ff",
        violetx: "#9d65ff",
        limex: "#bfff73",
      },
      boxShadow: {
        premium: "0 36px 120px rgba(0,0,0,.46)",
        glow: "0 0 70px rgba(53,228,255,.18)",
      },
      borderRadius: {
        premium: "2rem",
      }
    },
  },
  plugins: [],
};

export default config;
