/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "ligh-white": "#F7F7F7",
      "sylos-blue": "#323587",
      "dark-gray": "#252529",
      white: "#FFFFFF",
    },
  },
  plugins: [],
});
