/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        burton: 'burtons',
      },
      colors: {
        primary: '#5D3BEE',
        secondary: '#51586A',
        header: '#FBFAFF',
      },
      backgroundImage: {
        figma: "url('https://i.postimg.cc/xCqf34RT/bg-1.png')",
      },

    },
  },
  plugins: [],
};
