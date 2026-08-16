/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chic: {
          bg: '#F9F8F6', // Soft warm off-white
          alt: '#F0EFEB', // Slightly darker off-white for contrast
          text: '#2C2C2C', // Soft black for primary text
          muted: '#6E6D69', // Muted text
          darkBg: '#1A1918', // Warm dark background
          darkAlt: '#242321', // Slightly lighter dark background
          darkText: '#EAE8E3', // Soft off-white for dark mode text
          darkMuted: '#A09F9C', // Muted text in dark mode
          accent: '#f472b6', // pink-400 for highlights
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
