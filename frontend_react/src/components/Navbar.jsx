/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../constants';
import { Sidebar } from './index';

const { logo } = images;

function Navbar({ toggleTheme, theme }) {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className="appBar flex flex-row justify-between items-center px-4 py-3 w-full backdrop-blur-sm backdrop-filter z-50 border-b-2 border-navbarborder md:border-transparent fixed"
    >
      <a
        href="#HOME"
        className="logo flex justify-start items-center "
      >
        <img src={logo} alt="logo" className="flex-1 object-cover max-w-[70px] max-h-[70px] shadow-primary shadow-sm rounded-full" />
      </a>
      <ul className="links hidden md:flex flex-1 justify-end items-center list-none text-base">
        {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT', <a href="https://drive.google.com/file/d/1Ao2pGWNp7wgU9uFilX5GqzV5AJ85zBBd/view?usp=sharing" download="resume.pdf" target="_blank" rel="noreferrer">RESUME</a>,
        ].map((item) => (
          <li key={item} className="flex flex-col mx-4 cursor-pointer justify-center items-center ">
            <motion.a
              whileHover={{ scale: 1.1, fontWeight: 'bold' }}
              href={`#${item}`}
              className="flex flex-col font-medium no-underline hover:text-primary hover:transition-all duration-500 ease-in-out"
            >{item}
            </motion.a>
          </li>
        ))}
      </ul>
      <div>
        {theme === 'light' ? <BsFillMoonStarsFill onClick={toggleTheme} size={20} /> : <BsSunFill onClick={toggleTheme} size={20} color="yellow" />}
      </div>

      <div className="appBarMenu flex md:hidden w-[39px] h-[35px] justify-center items-center relative rounded-full bg-primary">
        <HiMenu className="text-white w-[70%] h-[70%] " onClick={() => setToggle(true)} />
        <Sidebar setToggle={setToggle} toggle={toggle} toggleTheme={toggleTheme} theme={theme} />
      </div>
    </nav>
  );
}

export default Navbar;
