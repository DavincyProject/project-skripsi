import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import tailwindTypography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    daisyui: {
      dark: false,
      themes: ["light"],
    },
  },
  plugins: [daisyui, tailwindTypography],
};
export default config;
