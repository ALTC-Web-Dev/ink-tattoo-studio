/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        // home: "url('/bg_img.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};