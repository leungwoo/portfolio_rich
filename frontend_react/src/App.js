import React, { useState } from 'react';
import { About, Contact, Footer, Header, Projects } from './container';
import { Navbar } from './components';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.classList.remove('bg-white', 'text-gray-900');
      document.body.classList.add('bg-gray-900', 'text-white');
    } else {
      setTheme('light');
      document.body.classList.remove('bg-gray-900', 'text-white');
      document.body.classList.add('bg-white', 'text-gray-900');
    }
  };

  return (
    <div className="max-w-[1980px]">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Header theme={theme} />
      <About theme={theme} />
      <Projects theme={theme} />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
