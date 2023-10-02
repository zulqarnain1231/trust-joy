import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#7B71EB",
          secondary: "#5500BF",
        },
        white: {
          main: "#FFF",
          off: "#E6E7FF",
          secondary: "#F1F0F5",
        },
        black: {
          main: "#000",
          secondary: "#2E2C34",
          off: "#4B5563",
        },
      },
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        dmSans: ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
