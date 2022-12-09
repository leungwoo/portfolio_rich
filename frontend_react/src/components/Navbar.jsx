/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../constants';
import { Button } from './index';

const { logo } = images;

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="appBar flex flex-row justify-between items-center px-4 py-8 w-full backdrop-blur-md backdrop-filter z-0 border-b border-navbarborder md:border-transparent fixed">
      <a href="#HOME" className="logo flex justify-start items-center ">
        <img src={logo} alt="logo" className="flex-1 object-cover max-w-[80px] max-h-[80px] shadow-primary shadow-md rounded-full" />
      </a>
      <ul className="links hidden md:flex flex-1 justify-center items-center font-burton list-none text-secondary text-base">
        {['HOME', 'WORK', 'SKILLS', 'CONTACT', <Button btnName="RESUME" />, <BsFillMoonStarsFill />].map((item) => (
          <li key={`link - ${item}`} className="flex flex-col mx-4 cursor-pointer justify-center items-center">
            <a href={`#${item}`} className="flex flex-col font-medium no-underline hover:text-primary hover:animate-pulse transition-all duration-500 ease-in-out">{item}</a>
          </li>
        ))}
      </ul>

      <div className="appBarMenu flex md:hidden w-[39px] h-[35px] justify-center items-center relative rounded-full bg-primary">
        <HiMenu className="text-white w-[70%] h-[70%] " onClick={() => setToggle(true)} />
        {toggle
        && (
        <motion.div
          className="z-20 top-0 bottom-0 right-0 p-4 w-[80%] h-screen flex flex-col justify-end items-end bg-repeat bg-cover bg-center bg-figma bg-white fixed "
          whileInView={{ x: [300, 2] }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
        >
          <HiX onClick={() => setToggle(false)} className="w-[35px] h-[35px] text-primary" />
          <ul className="links font-burton h-[100%] w-full list-none m-0 p-0 flex flex-col justify-start items-start ">
            {['HOME', 'WORK', 'SKILLS', 'CONTACT', <Button btnName="RESUME" />, <BsFillMoonStarsFill />].map((item) => (
              <li key={item} className="flex flex-col m-4 cursor-pointer text-secondary ">
                <a href={`#${item}`} onClick={() => setToggle(false)} className="flex flex-col font-medium text-base no-underline hover:text-primary hover:animate-pulse transition-all duration-500 ease-in-out">{item}</a>
              </li>
            ))}
          </ul>
        </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
