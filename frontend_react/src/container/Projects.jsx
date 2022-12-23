import React from 'react';
import { motion } from 'framer-motion';

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
      className="bg-gradient-to-tr from-primary to-skills md:h-viewport-height pt-[96px] overflow-y-auto"
    >
      <div className="flex flex-col pb-5 md:flex-row md:px-[200px] px-5 justify-center items-center">
        <h1 className="flex-1 text-[30px] md:text-[40px] font-medium">Take a look at
          my recent projects
        </h1>
        <p className="flex-1 text-base md:text-lg font-normal">
          The projects required learning new technologies and team effort and collaboration under the guidance,
          of Senior Mentors. Each project encouraged fast critical thinking and problem solving while under deadlines.
        </p>
      </div>
      <div
        className="flex pb-5 flex-wrap md:px-[200px] px-5 justify-start w-full gap-4"
      >
        {projects.map((project, index) => (
          <motion.a
            className=" cursor-pointer flex-1 md:min-w-[300px] min-w-[200px] md:max-h-[200px] rounded-lg"
            href={project.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.01 }}
            key={index}
          >
            <img src={project.imgUrl} alt={project.title} className="flex rounded-lg object-cover" />
          </motion.a>
        ))}

      </div>
    </div>
  );
}

export default Projects;
