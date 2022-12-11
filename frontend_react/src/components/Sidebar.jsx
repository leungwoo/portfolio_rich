import React from 'react';
import { motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { BsFillMoonStarsFill } from 'react-icons/bs';

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
    },
  },
  closed: {
    opacity: 1,
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

function Sidebar({ setToggle, toggle }) {
  return (
    <motion.div
      className="z-20 top-0 bottom-0 right-0 p-4 w-[70%] h-screen flex flex-col justify-end items-end bg-repeat bg-cover bg-center bg-figma bg-white fixed "
    //   whileInView={{ y: [300, 0] }}
    //   transition={{ duration: 0.85, ease: 'easeOut' }}
      animate={toggle ? 'open' : 'closed'}
      initial="hidden"
      exit="exit"
      variants={sidebarVariants}
    >
      <HiX onClick={() => setToggle(false)} className="w-[35px] h-[35px] text-primary" />
      <ul className="links font-burton h-screen w-full list-none m-0 p-0 flex flex-col justify-start items-start ">
        {['HOME', 'WORK', 'SKILLS', 'CONTACT', <Button btnName="RESUME" />, <BsFillMoonStarsFill />].map((item) => (
          <li key={item} className="flex flex-col m-4 cursor-pointer text-secondary ">
            <a href={`#${item}`} onClick={() => setToggle(false)} className="flex flex-col font-medium text-base no-underline hover:text-primary hover:animate-pulse transition-all duration-500 ease-in-out">{item}</a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Sidebar;
