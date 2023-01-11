/* eslint-disable max-len */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

import { images } from '../constants';
import { Icons } from '../components';

function Header() {
  return (
    <div
      id="HOME"
      className="md:h-viewport-height lg:pt-[96px] pb-4
       md:bg-backgroundHeader5 dark:md:bg-backgroundHeaderDark6 bg-no-repeat md:bg-headerbg md:bg-cover md:bg-repeat dark:bg-black overflow-auto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1] }}
        className="md:pt-[170px] pt-[100px] gap-5 md:gap-10 px-5 pb-5 flex flex-col-reverse md:flex-row md:bg-none bg-backgroundImgSmNew bg-cover bg-center items-center justify-center mx-auto"
      >
        <div className=" flex-1 mx-auto">
          <LazyLoadImage effect="blur" placeholderSrc={images.code1reduced} src={images.code1} alt="richard" className="md:h-80 h-72 w-full shadow-primary shadow-md dark:shadow-white dark:shadow-md border border-primary dark:border-primary bg-white dark:bg-opacity-5 dark:border-opacity-20 border-opacity-20 backdrop-blur-sm rounded-full bg-opacity-10 object-cover" />
        </div>
        <div className="flex-1 justify-center items-center dark:text-white space-y-4">
          <div className="font-medium text-[42px] md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600">Full Stack Developer</div>
          <p className="font-normal text-base"> A Software Engineer with a passion for building clean, modern, and scalable user interfaces.
            Let&apos;s collaborate and create something truly great.
          </p>

          <div>
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
          </div>
          <div className="flex gap-4 items-center md:pt-5">
            <a href="#CONTACT">
              <button type="button" className="bg-primary text-white p-2 rounded-lg font-medium hover:bg-gradient-to-tl from-primary to-white hover:cursor-pointer">
                Send Message
              </button>
            </a>
            <a className="font-medium p-2 border border-primary border-opacity-20 hover:bg-primary hover:bg-opacity-10 backdrop-blur-sm rounded-lg bg-white dark:bg-white dark:bg-opacity-5 dark:border-opacity-20 dark:hover:bg-opacity-20 text-secondary dark:text-white" href="#PROJECTS">My Works</a>
          </div>
          <Icons />
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
