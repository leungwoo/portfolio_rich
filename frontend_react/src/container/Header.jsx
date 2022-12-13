import React from 'react';
import { TiSocialLinkedinCircular, TiSocialFacebookCircular } from 'react-icons/ti';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

import { images } from '../constants';
import { Button } from '../components';

function Header({ theme }) {
  return (
    <div className={`md:h-viewport-height lg:pt-[96px] ${theme === 'light' ? 'md:bg-backgroundImgLg && bg-backgroundImgSm' : 'md:bg-backgroundImgLgDark && bg-backgroundImgSmDark'} bg-bottom bg-no-repeat md:bg-headerbg md:bg-cover md:bg-repeat`}>
      <div className="md:pt-[170px] pt-[100px] flex flex-col-reverse md:flex-row">
        <div className=" flex-1  mx-auto md:ml-30 md:justify-center ">
          <img src={images.richard} alt="richard" className="md:mx-auto" />
        </div>
        <div className="flex-1  px-10 justify-center items-center">
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
            <Button btnName="Book a Call" btnColor="primary" />
            <motion.a whileHover={{ scale: 1.1 }} className="underline font-bold" href="#WORK">My Works</motion.a>
          </div>
          <div className="flex flex-row items-center gap-4 pb-20">
            <p className=" text-secondary">Follow me on:</p>
            <motion.a whileHover={{ scale: 1.1 }} className="hover:shadow-primary shadow-md rounded-full" href="https://www.facebook.com/richard.l.gabriel.3/" target="_blank">
              <TiSocialFacebookCircular size={35} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} className="hover:shadow-primary shadow-md rounded-full" href="https://www.linkedin.com/in/richard-leung-woo-gabriel-0b0822232/" target="_blank">
              <TiSocialLinkedinCircular size={35} />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
