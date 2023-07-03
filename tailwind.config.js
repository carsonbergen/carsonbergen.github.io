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
        blue: "#3692E3",
        aqua: "#48FABD",
        green: "#60E336",
        yellow: "#FBEB3C"
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
