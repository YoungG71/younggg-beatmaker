/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'west-gold': '#FFD700',
        'west-gold-dark': '#B8860B',
        'west-black': '#0a0a0a',
        'west-purple': '#4B0082',
        'west-purple-dark': '#2E004F',
        'west-orange': '#FF8C00',
      },
      fontFamily: {
        'gothic': ['"UnifrakturMaguntia"', 'cursive'],
        'sans': ['"Inter"', 'sans-serif'],
        'street': ['"Oswald"', 'sans-serif'],
      },
      backgroundImage: {
        'vinyl': "url('https://www.transparenttextures.com/patterns/vinyl.png')",
        'paisley': "url('https://www.transparenttextures.com/patterns/dark-matter.png')", // Placeholder for paisley
      }
    },
  },
  plugins: [],
}
