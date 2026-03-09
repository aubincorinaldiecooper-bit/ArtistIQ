import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        card: "#12121a",
        border: "#1e1e2e",
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
