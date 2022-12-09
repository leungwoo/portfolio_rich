import React from 'react';
import { motion } from 'framer-motion';
import { TiSocialLinkedinCircular, TiSocialFacebookCircular } from 'react-icons/ti';
import { Typewriter } from 'react-simple-typewriter';

import { images } from '../constants';
import { Button } from '../components';

function Header() {
  return (
    <motion.div className="md:bg-headerbg md:bg-cover md:bg-repeat bg-figma bg-bottom bg-no-repeat">
      <div className="pt-[150px] md:pt-[150px] flex flex-col-reverse md:flex-row">
        <div className="md:flex md:w-1/2 mx-auto md:ml-20  ">
          <img src={images.richard} alt="richard" />
        </div>
        <div className="px-10 justify-center items-center">
          <div className="font-medium text-5xl md:text-7xl">An Interactive Designer</div>
          <p className="py-5 text-secondary">Software Engineer with a passion for building clean modern and scaleable user interferes. Lets collaborate and do something great. </p>

          <h1 className="hidden md:flex">
            <span className="py-5 text-secondary font-bold italic">
              <Typewriter
                words={['“Simplicity is the soul of efficiency. – Austin Freeman”', '“Make it work, make it right, make it fast.  – Kent Beck”', '“First, solve the problem. Then, write the code.  – John Johnson” ']}
                loop={1}
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <div className="flex gap-4 items-center pt-5 pb-5">
            <Button btnName="Book a Call" />
            <a className="underline font-bold" href="#WORK">My Works</a>
          </div>
          <div className="flex flex-row items-center gap-4 ">
            <p className="py-5 text-secondary">Follow me on:</p>
            <a className="hover:shadow-primary shadow-md rounded-full" href="https://www.facebook.com/richard.l.gabriel.3/">
              <TiSocialFacebookCircular size={30} />
            </a>
            <a className="hover:shadow-primary shadow-md rounded-full" href="https://www.linkedin.com/in/richard-leung-woo-gabriel-0b0822232/">
              <TiSocialLinkedinCircular size={30} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
