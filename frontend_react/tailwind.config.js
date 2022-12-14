/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      glass: {
        backgroundColor: {
          'purple-800': '#5D3BEE',
        },
        boxShadow: {
          '2xl': '0 8px 32px 0 rgba(31,38,135,0.37)',
        },
        backdropFilter: {
          9.5: 'blur(9.5px)',
        },
        borderColor: {
          white: '#FFFFFF',
        },
      },
      height: {
        'viewport-height': 'calc(min(100vh))',
      },
      fontFamily: {
        primary: ['Bitter', 'serif'],
      },
      colors: {
        primary: '#5D3BEE',
        secondary: '#51586A',
        footer: '#525771',
        header: '#FBFAFF',
        navbarborder: '#D6D3E2',
        skills: 'rgba(231, 225, 255,0.5)',
      },
      backgroundImage: {
        backgroundHeaderDark: "url('https://i.postimg.cc/J0NGQDFC/headerdark.jpg')",
        backgroundHeader: "url('https://i.postimg.cc/zv8Gphfr/Header-2.jpg')",
        backgroundHeader2: "url('https://i.postimg.cc/RV8zZfzZ/Header-3.jpg')",
        backgroundHeader5: "url('https://i.postimg.cc/Fzdqrzr8/Header-5.jpg')",
        backgroundHeaderDark6: "url('https://i.postimg.cc/BbSV9brx/Header-6.jpg')",
        backgroundHeaderDark8: "url('https://i.postimg.cc/xd5qRF3t/Header-8.jpg')",
        backgroundHeaderDark2: "url('https://i.postimg.cc/cLgMQTcp/Header-1.jpg')",
        backgroundImgContact: "url('https://i.postimg.cc/nzQB8HBn/contactbg.png')",
        backgroundImgContactDark: "url('https://i.postimg.cc/2yQW620J/contactbgdark.jpg')",
        backgroundImgSm: "url('https://i.postimg.cc/xCqf34RT/bg-1.png')",
        backgroundImgSmNew: "url('https://i.postimg.cc/TwJmgrRg/Header-1.png')",
        backgroundImgLg: "url('https://i.postimg.cc/y6X1W52C/headerbg.jpg')",
        backgroundImgSmDark: "url('https://i.postimg.cc/MK78QSrC/Header-2.png')",
        backgroundImgLgDark: "url('https://i.postimg.cc/9MwKqnFj/headerbg-bl.jpg')",
        day: "url('https://images.unsplash.com/photo-1544829728-e5cb9eedc20e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        night: "url('https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')",
        sidebarLight: "url('https://i.postimg.cc/KvzvgYjM/contactbg.png')",
        sidebarDark: "url('https://i.postimg.cc/C5604j5f/contactbgdark.jpg')",
        bgContact: "url('https://i.postimg.cc/WzPCXj6k/Testimonal-2.png')",
        bgContactDark: "url('https://i.postimg.cc/Hsbb0DBb/Testimonal-1.png')",
      },

    },
  },
  plugins: [],
};
