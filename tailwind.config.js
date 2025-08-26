/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
  azonix: ['Azonix', 'sans-serif'],
  orbitron: ['Orbitron', 'sans-serif'],
  titillium: ['"Titillium Web"', 'sans-serif'],
  sans: ['Rajdhani', 'sans-serif'],
},

    },
  },
  plugins: [],
}
