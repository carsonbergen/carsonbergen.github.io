/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['Roboto Slab', 'sans-serif'], 
        'acidic': ['Acidic', 'display'],
      },
      colors: {
        primary: "#fafafa",
        secondary: "#0a0a0a",
        purple: "#a07cff",
        blue: "#3692e3",
        aqua: "#48fabd",
        green: "#60e336",
        yellow: "#fbeb3c",
        red: "#f7552f",
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
