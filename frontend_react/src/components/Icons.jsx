import React from 'react';
import { motion } from 'framer-motion';
import { ImGithub } from 'react-icons/im';
import { TiSocialFacebookCircular, TiSocialLinkedinCircular } from 'react-icons/ti';

function Icons() {
  return (
    <div className="flex flex-row items-center gap-4 pb-4">
      <p className="flex text-secondary">Let&apos;s Connect: </p>
      <div className="flex flex-row">
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
    </div>
  );
}

export default Icons;
