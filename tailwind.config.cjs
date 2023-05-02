const { default: autoprefixer } = require('autoprefixer');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins-heading': ['Poppins', 'sans-serif'],
        'courier-prime-regular': ['Courier_Prime', 'monospace'],
        'pt-mono' : ['PT Mono', 'monospace'],
      },
      colors: {
        primary: "#fafafa",
        secondary: "#0a0a0a",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
  daisyui: {
    styled: true,
    themes: false,
    base: true
  }
}
