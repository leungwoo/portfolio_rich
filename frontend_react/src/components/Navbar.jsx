/* eslint-disable react/jsx-no-bind */
import React, { useState, useContext } from 'react';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../constants';
import { Sidebar } from './index';
import { DarkModeContext } from '../App';

const { avatarrest } = images;

function Navbar() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className="appBar flex flex-row justify-between items-center px-4 py-3 w-full backdrop-blur-sm backdrop-filter z-50 border-b-2 border-navbarborder md:border-transparent fixed dark:text-white"
    >
      <a
        href="#HOME"
        className="logo flex justify-start items-center "
      >
        <img src={avatarrest} alt="logo" className="flex-1 object-cover mb-2 max-w-[60px] max-h-[60px] shadow-primary shadow-sm dark:shadow-white rounded-full " />
      </a>
      <ul className="links hidden md:flex flex-1 justify-end items-center list-none text-base">
        {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT', <a href="https://drive.google.com/file/d/11_fwc60Qyv1DbOg0NMz4drF9QY25SHLH/view?usp=sharing" download="resume.pdf" target="_blank" rel="noreferrer">RESUME</a>,
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
      <div className="cursor-pointer hover:text-primary hover:transition-all duration-500 ease-in-out ">
        {darkMode ? <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} size={20} /> : <BsSunFill onClick={() => setDarkMode(!darkMode)} size={20} />}
      </div>

      <div className="appBarMenu flex md:hidden w-[39px] h-[35px] justify-center items-center relative rounded-full bg-primary">
        <HiMenu className="text-white w-[70%] h-[70%] " onClick={() => setToggle(true)} />
        <Sidebar setToggle={setToggle} toggle={toggle} />
      </div>
    </nav>
  );
}

export default Navbar;
