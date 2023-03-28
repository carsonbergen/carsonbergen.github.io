const { default: autoprefixer } = require('autoprefixer');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins-heading': ['Poppins', 'sans-serif'],
        'courier-prime-regular': ['Courier_Prime', 'monospace'],
      },
      colors: {
        primary: "#94e344",
        primaryTo: "#94e344",
        primaryFrom: "#46878f",
        secondaryTo: "#46878f",
        secondaryFrom: "#332c50",
        darkBase: "#332c50",
        lightBase: "#e2f3e4",

      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
}
