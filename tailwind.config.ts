import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Brand colors
        primary: {
          DEFAULT: "#543585",
          50: "#f4f2f7",
          100: "#e8e3ef",
          200: "#d1c7df",
          300: "#b4a3c9",
          400: "#9579b0",
          500: "#7d5f9a",
          600: "#6a4d84",
          700: "#543585",
          800: "#45306d",
          900: "#3a2859",
          950: "#231735",
        },
        secondary: {
          DEFAULT: "#BE418C",
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#BE418C",
          900: "#831843",
          950: "#500724",
        },
      },
    },
  },
  plugins: [],
};
export default config;
