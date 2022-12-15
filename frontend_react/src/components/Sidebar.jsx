import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';

const sidebarVariants = {
  hidden: {
    opacity: 0,
    y: '100%',
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.6,
      damping: 10,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    y: '100%',
    transition: {
      type: 'tween',
      duration: 1.5,
      damping: 10,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: '100%',
  },
};

const listVariant = {
  closed: {
    opacity: 0,
    x: -10,
  },
  open: {
    opacity: 1,
    x: 1,
    staggerChildren: 0.3,
    staggerDirection: 1,
  },
};

function Sidebar({ setToggle, toggle, toggleTheme, theme }) {
  return (
    <AnimatePresence>
      <motion.div
        className={`container rounded-tl-3xl z-20 top-0 bottom-0 right-0 p-4 w-[50%] h-screen flex flex-col
         ${theme === 'light' ? 'bg-sidebarLight' : 'bg-sidebarDark'} justify-end items-end bg-cover bg-no-repeat bg-center bg-figma bg-white fixed`}
        animate={toggle ? 'open' : 'closed'}
        initial="hidden"
        exit="exit"
        variants={sidebarVariants}
      >
        <HiX onClick={() => setToggle(false)} className="w-[35px] h-[35px] text-primary" />
        <ul
          className="links  h-screen w-full list-none m-0 p-0 flex flex-col justify-start items-start "
        >
          {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT', 'RESUME', theme === 'light' ? <BsFillMoonStarsFill onClick={toggleTheme} size={20} /> : <BsSunFill onClick={toggleTheme} size={20} color="yellow" />].map((item) => (
            <motion.li
              variants={listVariant}
              key={item}
              className={`flex flex-col m-4 cursor-pointer border border-transparent p-2 rounded-lg bg-primary ${theme === 'light' ? 'text-white' : 'text-white'} `}
            >
              <a
                href={`#${item}`}
                onClick={() => setToggle(false)}
                className="flex flex-col font-medium text-sm no-underline hover:animate-pulse transition-all duration-500 ease-in-out"
              >{item}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}

export default Sidebar;
