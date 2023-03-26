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
      },
    },
  },
  plugins: [require("daisyui")],
}
