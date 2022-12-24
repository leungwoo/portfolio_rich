import React from 'react';
import { motion } from 'framer-motion';

import { TiSocialLinkedinCircular, TiSocialFacebookCircular } from 'react-icons/ti';
import { ImGithub } from 'react-icons/im';

function Testimonials() {
  const fadeIn = {
    hidden: {
      opacity: 0,
      x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        duration: 1,
        ease: 'linear',
      },
    },
  };
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="flex-1 max-h-[300px] md:max-h-[400px] flex-col justify-center items-center overflow-y-auto px-5"
    >
      <div className="flex flex-row items-center justify gap-2">
        <h1 className="text-2xl">Testimonials</h1><div className="w-[50px] h-0.5 bg-primary" />
      </div>
      <p className="pt-5">Hi my name is Richard Leung Woo-Gabriel. I am a Full Stack Web Developer.
        I currently work remote as software engineer and have always had a passion for problem solving.
        I have a strong background in front end development and built experience with a variety of technologies.
      </p>
      <br />
      <p>
        Discipline and work ethic have been my strong points and belief to accomplish any task i undertake. Patience has been a key asset of mine when working with teams and accomplishing projects.
        Besides my passion for software development i enjoy competitive sports and visiting new places with my family.
        Please feel free to reach out if you want to connect or know about any interesting hiring opporitunities.
      </p>
      <br />
      <div className="flex flex-row items-center gap-4 pb-20">
        <p className=" text-secondary">Feel free to reach out to me: </p>
        <motion.a whileHover={{ scale: 1.1 }} className="hover:shadow-primary shadow-md rounded-full" href="https://www.facebook.com/richard.l.gabriel.3/" target="_blank">
          <TiSocialFacebookCircular size={35} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} className="hover:shadow-primary shadow-md rounded-full" href="https://www.linkedin.com/in/richard-leung-woo-gabriel-0b0822232/" target="_blank">
          <TiSocialLinkedinCircular size={35} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} className="hover:shadow-primary shadow-md rounded-full" href="https://github.com/leungwoo" target="_blank">
          <ImGithub size={30} />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default Testimonials;
