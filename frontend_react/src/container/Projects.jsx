import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../constants';
import { Icons } from '../components';

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
      className="bg-gradient-to-tr from-primary to-skills dark:bg-gradient-to-tr dark:from-primary dark:to-black md:h-viewport-height pt-[110px] overflow-y-auto dark:text-white"
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
          <Icons />
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
            className="relative w-full  group cursor-pointer flex-1 md:min-w-[300px] min-w-[200px] md:max-h-[200px] rounded-lg shadow-lg overflow-hidden"
            href={project.link}
            target="_blank"
            rel="noreferrer"
            key={project.title + index}
          >
            <img
              src={project.imgUrl}
              alt={project.title}
              className="flex rounded-lg absolute object-cover w-full h-full inset-0 group-hover:opacity-10"
            />
            <div className="relative p-5">
              <div className="mt-40">
                <div className="transition-all transform
                               translate-y-6 opacity-0
                                group-hover:opacity-100
                                group-hover:-translate-y-20 duration-1000"
                >
                  <div className="p-2">
                    <div className="flex items-center justify-center">
                      <div className=" w-12 h-0.5 bg-primary" />
                      <p className="text-3xl font-semibold">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        ))}

      </motion.div>
    </div>
  );
}

export default Projects;
