import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../constants';
import { Button } from '../components';

function Header() {
  return (
    <motion.div className="md:bg-headerbg md:bg-cover md:bg-repeat bg-headerbg bg-contain bg-repeat-round">
      <div className="pt-[120px] md:pt-[150px] flex flex-col md:flex-row">
        <div className="md:flex md:w-1/2 mx-auto md:ml-20 justify-center items-center ">
          <img src={images.richard} alt="richard" />
        </div>
        <div className="p-8 justify-center">
          <div className="font-medium text-6xl md:text-7xl flex-1">An Interactive Designer</div>
          <p className="py-5 text-secondary">Software Engineer with a passion for building clean modern and scaleable user interferes. Lets collaborate and do something great. </p>
          <p> “Simplicity is the soul of efficiency.” <span className="italic">-Austin Freeman</span></p>
          <div className="flex gap-4 items-center py-5">
            <Button btnName="Book a Call" />
            <a className="underline font-bold" href="#WORK">My Works</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
