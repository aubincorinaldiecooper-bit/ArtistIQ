import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0d0d16",
        card: "#1a1a2a",
        border: "rgba(255,255,255,0.06)",
        accent: "#6c47ff",
        positive: "#22c55e",
        negative: "#ef4444",
        amber: "#f59e0b",
        "text-primary": "#f1f5f9",
        "text-secondary": "#64748b"
      }
    }
  },
  plugins: []
};

export default config;
