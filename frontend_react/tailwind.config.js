/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      height: {
        'viewport-height': 'calc(min(100vh))',
      },
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
        backgroundImgSm: "url('https://i.postimg.cc/xCqf34RT/bg-1.png')",
        backgroundImgLg: "url('https://i.postimg.cc/y6X1W52C/headerbg.jpg')",
        backgroundImgSmDark: "url('https://i.postimg.cc/GhyVpNgP/bg-1-bl.jpg')",
        backgroundImgLgDark: "url('https://i.postimg.cc/9MwKqnFj/headerbg-bl.jpg')",
        day: "url('https://images.unsplash.com/photo-1544829728-e5cb9eedc20e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        night: "url('https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')",
      },

    },
  },
  plugins: [],
};
