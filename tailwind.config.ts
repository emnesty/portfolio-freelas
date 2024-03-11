import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      colors: {
        herobackground: "#0C111D",
        texthero: "#929FB1",
        texthero2: "#B3B7BD",
        white: "#ffffff",
        black: "#000000",
      },
      backgroundImage: {
        "hero-background": "url('/images/Background pattern2.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
