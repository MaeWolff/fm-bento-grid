import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
      },
    },
  },
  plugins: [],
};
export default config;
