/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Bitter', 'serif'],
      },
      colors: {
        primary: '#5D3BEE',
        secondary: '#51586A',
        header: '#FBFAFF',
        navbarborder: '#D6D3E2',
      },
      backgroundImage: {
        figma: "url('https://i.postimg.cc/xCqf34RT/bg-1.png')",
        headerbg: "url('https://i.postimg.cc/y6X1W52C/headerbg.jpg')",
      },

    },
  },
  plugins: [],
};
