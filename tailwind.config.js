/** @type {import('tailwindcss').Config} */
const colors = require("./colors.tailwind");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        vietnam: ["Be Vietnam Pro", "sans-serif"],
        garamond: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
