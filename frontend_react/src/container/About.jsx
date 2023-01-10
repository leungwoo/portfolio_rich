/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import images from '../constants/images';
import { urlFor, client } from '../client';
import { AboutMe, Experience, Testimonials } from './index';

const { meAnimated, coding, thumbs, experience } = images;

const sections = [
  { title: 'About Me', description: '<Web Developer/>', imgUrl: meAnimated },
  { title: 'Testimonials', description: '<What people say/>', imgUrl: thumbs },
  { title: 'Experience', description: '<Growth and Development/>', imgUrl: experience },
];

function About() {
  const [abouts, setAbouts] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (title) => {
    setSelectedItem(title);
  };

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <div id="ABOUT" className="md:h-viewport-height pt-[110px] overflow-y-auto bg-backgroundHeader2 dark:bg-backgroundHeaderDark8 bg-no-repeat bg-cover bg-center dark:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1] }}
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col pb-5 lg:flex-row md:px-[100px] lg:px-[200px] justify-evenly items-center gap-10 md:gap-20 z-0"
      >
        <div className="flex flex-col md:flex-row items-center flex-1 md:gap-2">
          <div className="flex w-[86px] h-0.5 bg-primary mb-2" />
          <div className="flex text-[32px] md:text-[42px] font-medium gap-2 dark:text-white">
            <span>My</span>
            <br />
            <span>Technologies</span>
          </div>
        </div>
        <div className="items-center flex flex-wrap justify-center gap-2 pt-2 px-4 w-full">
          {abouts.map((about, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.1 }}
              href={about.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className=" text-base font-medium justify-around items-center ">
                <img
                  className="shadow-md shadow-primary w-11 h-11 md:w-10 md:h-10 object-cover justify-center mx-auto items-center rounded-full mb-2"
                  src={urlFor(about.imgUrl)}
                  alt={about.title}
                />
                {about.title}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1] }}
        hidden={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col lg:flex-row md:px-[200px]"
      >
        <div className="flex-1 px-5 z-0">
          {sections.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item.title)}
              className="flex flex-row my-4 md:p-4 p-2 bg-white cursor-pointer rounded-full justify-evenly items-center z-0 hover:transition-all duration-1000 ease-in-out
                backdrop-blur-sm bg-opacity-0 hover:bg-primary dark:bg-white hover:bg-opacity-5 dark:hover:bg-opacity-10 dark:backdrop-blur-sm dark:bg-opacity-5 border dark:border-opacity-20 dark:border-primary border-primary border-opacity-20"
            >
              <div className="text-2xl md:text-3xl text-secondary dark:text-white">
                {item.title}
              </div>
              <img src={item.imgUrl} alt={item.title} className="md:w-10 md:h-10 w-8 h-8 object-contain" />
            </div>
          ))}
        </div>
        <div className="flex-1 justify-center items-center">
          {selectedItem === null ? <img src={coding} className="w-full object-cover max-h-[400px] rounded-full" /> : null}
          {selectedItem === 'About Me' && <AboutMe />}
          {selectedItem === 'Testimonials' ? <Testimonials /> : null}
          {selectedItem === 'Experience' ? <Experience /> : null}
        </div>
      </motion.div>

    </div>
  );
}

export default About;
