import React from 'react';
import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';

function App() {
  return (
    <div className="max-w-[1980px]">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />

    </div>
  );
}

export default App;
