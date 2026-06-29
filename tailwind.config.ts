import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B66A3",
        ink: "#081120",
        mist: "#E5E7EB"
      },
      borderRadius: {
        card: "8px"
      },
      boxShadow: {
        soft: "0 16px 40px rgba(8, 17, 32, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
