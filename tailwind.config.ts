import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "var(--color-3)",
        secondary: "var(--color-4)",
        tertiary: "var(--color-2)",
      },
      boxShadow: {
        shadow1: `3px -3px 0 0px rgba(253, 253, 254, 1)`,
        shadow2: "-3px -3px 0 0px rgba(253, 253, 254, 1)",
      },
      textShadow: {
        DEFAULT:
          "2px -2px 0 #000, " +
          "2px 2px 0 #000, " +
          "-2px 2px 0 #000, " +
          "-2px -2px 0 #000, " +
          "5px 5px 0 rgba(0, 0, 0, .2)",
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
