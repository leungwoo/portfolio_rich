import React, { createContext, useEffect, useMemo, useState } from 'react';
import { Navbar } from './components';
import { About, Contact, Footer, Header, Projects } from './container';

export const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const value = useMemo(() => ({ darkMode, setDarkMode }), [darkMode, setDarkMode]);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setDarkMode(storedDarkMode === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={value}>
      <div className={`${darkMode ? 'dark' : ''} max-w-[1980px]`}>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
