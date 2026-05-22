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
      },
      keyframes: {
        'vinyl-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'gold-shimmer': {
          '0%, 100%': { backgroundPosition: '-200% center' },
          '50%': { backgroundPosition: '200% center' },
        },
        'lowrider-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-8px)' },
          '50%': { transform: 'translateY(0)' },
          '75%': { transform: 'translateY(-4px)' },
        },
        'bass-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.03)', opacity: '1' },
        },
        'gold-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 215, 0, 0.3), 0 0 10px rgba(255, 215, 0, 0.1)' },
          '50%': { boxShadow: '0 0 15px rgba(255, 215, 0, 0.6), 0 0 30px rgba(255, 215, 0, 0.3), 0 0 45px rgba(255, 215, 0, 0.1)' },
        },
        'grammy-glow': {
          '0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 5px rgba(255,215,0,0.3))' },
          '50%': { filter: 'brightness(1.2) drop-shadow(0 0 15px rgba(255,215,0,0.6))' },
        },
      },
      animation: {
        'vinyl-spin': 'vinyl-spin 8s linear infinite',
        'gold-shimmer': 'gold-shimmer 3s ease-in-out infinite',
        'lowrider-bounce': 'lowrider-bounce 2s ease-in-out infinite',
        'bass-pulse': 'bass-pulse 1.5s ease-in-out infinite',
        'gold-glow': 'gold-glow 3s ease-in-out infinite',
        'grammy-glow': 'grammy-glow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
