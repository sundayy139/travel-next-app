/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'dark-primary': '#18191a',
        'dark-nav': '#242526',
        'dark-btn': '#3a3b3c',
        'hover-btn': '#4e4f50'
      },
      colors: {
        'primary': '#E4E6EB',
        'secondary': '#B0B3B8',

      }
    },
  },
  plugins: [],
}
