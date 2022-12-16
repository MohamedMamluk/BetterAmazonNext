/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        nBlack: '#373737',
        'nWhite-100': '#f6f6f6',
        'nWhite-300': '#e4e4e4',
        aOrange: '#ff9900',
        aLightBlue: '#18a9fb',
        aDeepBlue: '#02346b',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
