import React from 'react';
import { motion } from 'framer-motion';
import { TiSocialLinkedinCircular, TiSocialFacebookCircular } from 'react-icons/ti';
import { ImGithub } from 'react-icons/im';

import { images } from '../constants';

const { carRental, musicApp, trainApp, movieApp } = images;

const projects = [
  { title: 'Car Rental', description: 'Lorem ipsum dolor amet, consectetur adipiscing st elit.', imgUrl: carRental, link: 'https://web3-car-rent.vercel.app/car-rent' },
  { title: 'Music Universe', description: 'Lorem ipsum dolor amet, consectetur adipiscing st elit.', imgUrl: musicApp, link: 'https://musicuniverse.vercel.app/' },
  { title: 'Fitness App', description: 'Lorem ipsum dolor amet, consectetur adipiscing st elit.', imgUrl: trainApp, link: 'https://trainhard.vercel.app/' },
  { title: 'Filmworld', description: 'Lorem ipsum dolor amet, consectetur adipiscing st elit.', imgUrl: movieApp, link: 'https://filmworld.vercel.app/' },
];

function Projects() {
  return (
    <div
      id="PROJECTS"
      className="bg-gradient-to-tr from-primary to-skills md:h-viewport-height pt-[110px] overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1] }}
        hidden={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col pb-5 md:flex-row md:px-[100px] lg:px-[200px] px-5 justify-center items-center"
      >
        <div className="flex flex-col md:flex-row items-center flex-1 md:gap-2 mb-4">
          <div className="w-[86px] h-0.5 bg-primary mb-2" />
          <h1 className="text-[36px] md:text-[42px] font-medium">Take a look at
            my recent projects
          </h1>
        </div>
        <div className="flex-1 ">
          <p className="flex-1 text-base md:text-lg font-normal mb-2">
            Welcome to my portfolio of projects built with demand technologies.
            In these projects, you will see how i have used these tools to build fast, responsive, and scalable web applications.
          </p>
          <div className="flex flex-row justify-center items-center gap-4 pb-4">
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1] }}
        hidden={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        className="flex pb-5 flex-wrap md:px-[200px] px-5 justify-start w-full gap-4"
      >
        {projects.map((project, index) => (
          <motion.a
            className=" cursor-pointer flex-1 md:min-w-[300px] min-w-[200px] md:max-h-[200px] relative rounded-lg shadow-lg overflow-hidden"
            href={project.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            key={project.title + index}
          >
            <img src={project.imgUrl} alt={project.title} className="flex rounded-lg object-cover" />
          </motion.a>
        ))}

      </motion.div>
    </div>
  );
}

export default Projects;
