import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

import { images } from '../constants';
import { Icons } from '../components';

function Header() {
  return (
    <div
      id="HOME"
      className="md:h-viewport-height lg:pt-[96px]
       md:bg-backgroundImgLg bg-backgroundImgSm dark:md:bg-backgroundImgLgDark dark:bg-backgroundImgSmDark bg-bottom bg-no-repeat md:bg-headerbg md:bg-cover md:bg-repeat dark:bg-black"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1] }}
        className="md:pt-[170px] pt-[100px] flex flex-col-reverse md:flex-row"
      >
        <div className=" flex-1  mx-auto md:ml-30 md:justify-center ">
          <img src={images.richard} alt="richard" className="md:mx-auto" />
        </div>
        <div className="flex-1  px-10 justify-center items-center dark:text-white">
          <div className="font-medium text-[42px] pb-5 md:text-7xl">An Interactive Designer</div>
          <p className="font-normal text-base pb-5 text-secondary">Software Engineer with a passion for building clean modern and scaleable user interfaces. Lets collaborate and do something great. </p>

          <h1 className="hidden md:flex">
            <span className="py-5 text-secondary font-bold italic">
              <Typewriter
                words={['“Simplicity is the soul of efficiency. – Austin Freeman”', '“Make it work, make it right, make it fast.  – Kent Beck”', '“First, solve the problem. Then, write the code.  – John Johnson” ']}
                loop={1}
                cursor
                cursorColor="#5D3BEE"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <div className="flex gap-4 items-center md:pt-5 pb-5">
            <a href="#CONTACT">
              <button type="button" className="bg-primary text-white p-2 rounded-lg font-medium hover:bg-gradient-to-tl from-primary to-white hover:cursor-pointer">
                Send Message
              </button>
            </a>
            <motion.a whileHover={{ scale: 1.1 }} className="underline font-bold" href="#PROJECTS">My Works</motion.a>
          </div>
          <Icons />
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
