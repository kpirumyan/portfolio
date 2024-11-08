import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "var(--color-1)",
        secondary: "var(--color-2)",
        tertiary: "var(--color-3)",
      },
      boxShadow: {
        1: `3px -3px 0 0px rgba(253, 253, 254, 1)`,
        2: "-3px -3px 0 0px rgba(253, 253, 254, 1)",
        3: "5px 5px 0 0px rgba(0, 0, 0, .2)",
      },
      textShadow: {
        DEFAULT:
          "2px -2px 0 #000, " +
          "2px 2px 0 #000, " +
          "-2px 2px 0 #000, " +
          "-2px -2px 0 #000, " +
          "5px 5px 0 rgba(0, 0, 0, .2)",
      },
      lineHeight: {
        13: "3.25rem",
        14: "3.5rem",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};
export default config;
