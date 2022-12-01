import React from 'react';

import { images } from '../constants';

function Navbar() {
  return (
    <nav className="flex flex-row justify-between ">
      <div>
        <img src={images.logo} alt="logo" className=" w-[200px] h-[200px]" />
      </div>
      <ul className="flex flex-row justify-between items-center">
        {['home', 'about', 'work', 'testimonials', 'skills', 'contact'].map((item) => (
          <li key={`link - ${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
