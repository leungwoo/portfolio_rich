import React from 'react';
import { motion } from 'framer-motion';

import { Icons } from '../components';

const fadeIn = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 2,
      ease: 'linear',
    },
  },
};

function AboutMe() {
  return (
    <motion.div
      variants={fadeIn}
      animate="show"
      initial="hidden"
      className="flex-1 max-h-[300px] md:max-h-[400px] flex-col justify-center items-center overflow-y-auto px-5"
    >
      <div className="flex flex-row items-center justify gap-2">
        <h1 className="text-2xl">About Me</h1><div className="w-[50px] h-0.5 bg-primary" />
      </div>
      <p className="pt-5">Hi my name is Richard Leung Woo-Gabriel. I am a Full Stack Web Developer.
        I currently work remote as software engineer and have always had a passion for problem solving.
        I have a strong background in front end development and built experience with a variety of technologies.
      </p>
      <br />
      <p>
        Discipline and work ethic have been my strong points and belief to accomplish any task i undertake. Patience has been a key asset of mine when working with teams and accomplishing projects.
        Besides my passion for software development i enjoy competitive sports and visiting new places with my family.
        Please feel free to reach out if you want to connect or just hangout and chat about technology over coffee.
      </p>
      <br />
      <Icons />
    </motion.div>
  );
}

export default AboutMe;
