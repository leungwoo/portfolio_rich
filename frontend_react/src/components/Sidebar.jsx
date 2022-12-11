import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';

import { Button } from './index';

const sidebarVariants = {
  hidden: {
    opacity: 0,
    y: '100%',
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
  closed: {
    opacity: 0,
    y: '100%',
    transition: {
      delay: 2,
      stiffness: 400,
      damping: 40,
    },
  },
  exit: {
    opacity: 0,
    y: '100%',
  },
};

function Sidebar({ setToggle, toggle, toggleTheme, theme }) {
  return (
    <AnimatePresence>
      <motion.aside
        className={`rounded-tl-3xl z-20 top-0 bottom-0 right-0 p-4 w-[70%] h-screen flex flex-col
         ${theme === 'light' ? 'bg-day' : 'bg-night '}
       justify-end items-end bg-repeat bg-cover bg-center bg-figma bg-white fixed`}
    //   whileInView={{ y: [300, 0] }}
    //   transition={{ duration: 0.85, ease: 'easeOut' }}
        animate={toggle ? 'open' : 'closed'}
        initial="hidden"
        exit="exit"
        variants={sidebarVariants}
      >
        <HiX onClick={() => setToggle(false)} className="w-[35px] h-[35px] text-primary" />
        <ul className="links  h-screen w-full list-none m-0 p-0 flex flex-col justify-start items-start ">
          {['HOME', 'WORK', 'SKILLS', 'CONTACT', <Button btnName="RESUME" />, theme === 'light' ? <BsFillMoonStarsFill onClick={toggleTheme} size={30} /> : <BsSunFill onClick={toggleTheme} size={30} color="yellow" />].map((item) => (
            <li key={item} className={`flex flex-col m-4 cursor-pointer border border-transparent p-3 rounded-lg bg-transparent backdrop-blur-3xl ${theme === 'light' ? 'text-white' : 'text-gray-400'} `}>
              <motion.a
                key={item.id}
                whileHover={{ scale: 1.1 }}
                href={`#${item}`}
                onClick={() => setToggle(false)}
                className="flex flex-col font-medium text-base no-underline hover:text-primary hover:animate-pulse transition-all duration-500 ease-in-out"
              >{item}
              </motion.a>
            </li>
          ))}
        </ul>
      </motion.aside>
    </AnimatePresence>
  );
}

export default Sidebar;
