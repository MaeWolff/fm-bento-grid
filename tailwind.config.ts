import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "var(--dm-sans-font)",
    },
    colors: {
      primary: {
        500: "#7551DC",
        100: "#DBD1FC",
      },
      secondary: {
        500: "#FFCC6A",
        100: "#F9EEE2",
      },
      neutral: {
        white: "#FFF",
        black: "#121212",
        gray: "#9E9E9E",
      },
    },
    extend: {
      borderRadius: {
        10: "10px",
      },
      boxShadow: {
        pill: "-9.78145px 11.7377px 24.4536px rgba(98, 26, 123, 0.05)",
      },
      gridTemplateRows: {
        "bento-grid-tablet": "auto 246px 496px 246px 132px 354px",
        "bento-grid-desktop": "320px 70px 140px 70px 140px",
      },
    },
  },
  plugins: [],
};
export default config;
