import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiX } from "react-icons/hi";

import images from "../constants/images";

const { avatarrest } = images;

const sidebarVariants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      damping: 10,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    y: "100%",
    transition: {
      type: "tween",
      duration: 1.2,
      damping: 10,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: "100%",
  },
};

const listVariant = {
  closed: {
    opacity: 0,
    x: -10,
  },
  open: {
    opacity: 1,
    x: 0,
    staggerChildren: 0.3,
    staggerDirection: 1,
  },
};

function Sidebar({ setToggle, toggle }) {
  return (
    <AnimatePresence>
      <motion.div
        className="container rounded-tl-3xl z-20 top-0 bottom-0 right-0 p-4 w-[50%] h-screen flex flex-col
        justify-end items-end bg-cover bg-no-repeat bg-gradient-to-br from-white to-primary dark:bg-gradient-to-tl dark:from-primary dark:to-black fixed "
        animate={toggle ? "open" : "closed"}
        initial="hidden"
        exit="exit"
        variants={sidebarVariants}
      >
        <HiX
          onClick={() => setToggle(false)}
          className="w-[35px] h-[35px] text-primary"
        />
        <ul className="links h-screen w-full list-none m-0 p-0 flex flex-col justify-start items-start ">
          <img
            src={avatarrest}
            alt="meanimated"
            className="flex w-11 h-11 mx-auto object-cover mb-4 max-w-[70px] max-h-[70px] shadow-primary dark:shadow-white shadow-sm rounded-full"
          />
          {[
            "HOME",
            "ABOUT",
            "PROJECTS",
            "CONTACT",
            <a
              href="https://drive.google.com/file/d/1GEyh_LKR5QQJ6yAoAjSsrVpOsRyyZB1r/view?usp=sharing"
              download="resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              VIEW RESUME
            </a>,
          ].map((item) => (
            <motion.li
              variants={listVariant}
              key={item}
              className="flex flex-col m-4 cursor-pointer border border-transparent p-2 rounded-lg bg-white backdrop-blur-lg bg-opacity-20 dark:backdrop-blur-sm dark:bg-opacity-5"
            >
              <a
                href={`#${item}`}
                onClick={() => setToggle(false)}
                className="flex flex-col font-medium text-sm no-underline hover:animate-pulse transition-all duration-500 ease-in-out"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}

export default Sidebar;
