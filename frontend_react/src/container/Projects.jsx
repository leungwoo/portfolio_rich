/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ImGithub } from 'react-icons/im';
import { AiOutlineEye } from 'react-icons/ai';

// import { images } from '../constants';
import { urlFor, client } from '../client';

// const { carRental, musicApp, trainApp, movieApp } = images;

// const projects = [
//   { title: 'Car Rental', description: 'An online car rental service company.', imgUrl: carRental, link: 'https://web3-car-rent.vercel.app/car-rent' },
//   { title: 'Music Universe', description: 'An Open source music application for music lovers. ', imgUrl: musicApp, link: 'https://musicuniverse.vercel.app/' },
//   { title: 'Fitness App', description: 'Want exercises on demand. Fitness enthusiasts can now search any body part or exercise and get videos and information.', imgUrl: trainApp, link: 'https://trainhard.vercel.app/' },
//   { title: 'Filmworld', description: 'A Movies application that keeps you up to date with what you love. Search different genres and watch trailers.', imgUrl: movieApp, link: 'https://filmworld.vercel.app/' },
// ];

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => setProjects(data));
  }, []);
  console.log(projects);
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
          <h1 className="text-[36px] md:text-[42px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600">Recent Projects
          </h1>
        </div>
        <div className="flex-1 ">
          <p className="flex-1 text-base md:text-lg font-normal mb-2">
            Explore my portfolio of cutting-edge projects built with the latest technologies.
            In these projects, you&apos;ll see how I&apos;ve used these tools to create fast, responsive, and scalable web applications that deliver a seamless user experience.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1] }}
        hidden={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        className="flex pb-5 flex-wrap md:px-[200px] px-5 justify-start w-full gap-2"
      >
        {projects.map((project, index) => (
          <div
            className="relative w-full group flex-1 md:min-w-[300px] min-w-[200px] md:max-h-[200px] rounded-lg shadow-lg "
            key={index}
          >
            <img
              src={urlFor(project.imgUrl)}
              alt={project.title}
              className="flex rounded-lg absolute object-cover w-full h-full inset-0 group-hover:opacity-10"
            />
            <div className="relative p-5">
              <div className="mt-20">
                <div className="transition-all transform
                               translate-y-6 opacity-0
                                group-hover:opacity-100
                                group-hover:-translate-y-20 duration-1000"
                >
                  <div className="p-2">
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex flex-row items-center justify-center">
                        <div className="flex w-12 h-0.5 bg-primary" />
                        <div className="flex text-3xl font-semibold">
                          {project.title}
                        </div>
                      </div>
                      <div className="flex ">
                        {project.description}
                      </div>
                      <div className="flex flex-row gap-4 mt-1">
                        <motion.a whileHover={{ scale: 1.1 }} className="flex flex-col justify-center items-center" href={project.codeLink} target="_blank">
                          <ImGithub size={25} />
                          <p className="text-xs">view code</p>
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.1 }} className="flex flex-col justify-center items-center" href={project.projectLink} target="_blank">
                          <AiOutlineEye size={25} />
                          <p className="text-xs">site</p>
                        </motion.a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
