import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050814",
        panel: "#0b1224",
        cyan: { DEFAULT: "#00e5ff", deep: "#00b8d4" },
        neon: { DEFAULT: "#00ff88", deep: "#00cc6a" },
        azure: { DEFAULT: "#0088ff" }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-orbitron)", "sans-serif"]
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 50% 0%, rgba(0,229,255,0.15), transparent 60%)",
        "brand-gradient":
          "linear-gradient(90deg, #00b8d4 0%, #0088ff 50%, #00ff88 100%)"
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" }
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.5" },
          "50%": { opacity: "1" }
        }
      }
    }
  },
  plugins: []
};
export default config;
