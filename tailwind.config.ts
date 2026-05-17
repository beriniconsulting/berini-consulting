import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        night: "#050914",
        navy: "#07111f",
        steel: "#0d1828",
        cyanx: "#31e5ff",
        limex: "#bfff63",
        violetx: "#8d6cff",
        soft: "#cbd7e8",
      },
      boxShadow: {
        premium: "0 35px 120px rgba(0,0,0,.48)",
        glow: "0 0 80px rgba(49,229,255,.18)",
      }
    },
  },
  plugins: [],
};
export default config;
