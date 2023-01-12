import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../constants';

const { meAnimated2 } = images;

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center pt-2 dark:bg-black dark:text-white">
      <div className="flex flex-col items-center justify-between mb-4">
        <img src={meAnimated2} alt="logo" className="flex-1 object-cover mb-4 max-w-[70px] max-h-[70px] shadow-primary dark:shadow-white shadow-sm rounded-full" />
        <ul className="md:flex flex-1 justify-end items-center list-none text-base">
          {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT', <a href="https://www.dropbox.com/s/5arl2s285thrzej/Richard_Leung%20Woo-Gabriel_Resume.pdf?dl=0" download="resume.pdf" target="_blank" rel="noreferrer">RESUME</a>,
          ].map((item) => (
            <li key={item} className="flex flex-col mx-4 cursor-pointer justify-center items-center ">
              <motion.a
                whileHover={{ scale: 1.1, fontWeight: 'bold' }}
                href={`#${item}`}
                className="flex flex-col font-medium no-underline hover:text-primary hover:transition-all duration-500 ease-in-out"
              >{item}
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
      <div className=" justify-center items-center">
        <div className="mx-[50px] h-1 bg-primary mb-2" />
        <p className="text-footer text-sm md:text-base">©RichardLeungWooGabriel 2022.
          All rights reserved.
        </p>
      </div>
    </div>
  );
}
export default Footer;
