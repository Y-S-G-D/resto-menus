import type { Config } from "tailwindcss";

const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D15A4B", // Terracotta
        secondary: "#A3B18C", // Olive Green
        accent: "#FFB74D", // Golden Yellow
        background: "#FFF8E1", // Light Beige
        text: "#3E2723", // Dark Brown
      },
      fontFamily:{
        'syne': ['var(--font-syne)', 'sans-serif'],
      },
      keyframes: {
        orbit: {
          "0%": {
            transform: "rotate(0deg) translateX(100px) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(100px) rotate(-360deg)",
          },
        },
        moveAlongArc: {
          "0%": {
            transform: "translate(100px, 0) rotate(0deg)",
          },
          "10%": {
            transform: "translate(100px, 0) rotate(36deg)",
          },
          "20%": {
            transform: "translate(100px, 0) rotate(72deg)",
          },
          "30%": {
            transform: "translate(0, 100px) rotate(108deg)",
          },
          "40%": {
            transform: "translate(-100px, 0) rotate(144deg)",
          },
          "50%": {
            transform: "translate(-100px, 0) rotate(180deg)",
          },
          "60%": {
            transform: "translate(0, -100px) rotate(216deg)",
          },
          "70%": {
            transform: "translate(100px, 0) rotate(252deg)",
          },
          "80%": {
            transform: "translate(100px, 0) rotate(288deg)",
          },
          "90%": {
            transform: "translate(0, 100px) rotate(324deg)",
          },
          "100%": {
            transform: "translate(100px, 0) rotate(360deg)",
          },
        },
      },
      animation: {
        "move-diamond":
          "moveAlongArc 10s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite",
        orbit: "orbit 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite",
      },
    },
  },
  plugins: [flowbite.plugin()],
};

export default config;
