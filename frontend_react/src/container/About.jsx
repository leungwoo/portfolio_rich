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

  const firstList = [...abouts];
  const secondList = [...abouts];
  firstList.splice(0, abouts.length / 2);
  secondList.splice(abouts.length / 2, abouts.length - 1);

  const handleClick = (title) => {
    setSelectedItem(title);
  };

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));

    console.log(abouts);
  }, []);

  return (
    <div id="ABOUT" className="md:h-viewport-height pt-[110px] overflow-y-auto dark:bg-black dark:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1] }}
        hidden={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col pb-5 lg:flex-row md:px-[100px] lg:px-[200px] justify-evenly items-center gap-10 md:gap-20 z-0"
      >
        <div className="flex flex-col md:flex-row items-center flex-1 md:gap-2">
          <div className="flex w-[86px] h-0.5 bg-primary mb-2" />
          <div className="flex text-[36px] md:text-[42px] font-medium gap-2 dark:text-white">
            <span>My</span>
            <br />
            <span>Technologies</span>
          </div>
        </div>
        <div className="items-center flex flex-row md:flex-col overflow-auto justify-start w-full">
          <div className="flex flex-col max-h-[140px] md:flex-row justify-between items-center p-2 md:gap-10 gap-5 flex-1 ">
            {firstList.map((about, index) => (
              <motion.a
                key={about.title + index}
                whileHover={{ scale: 1.1 }}
                href={about.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className=" text-base font-medium justify-between items-center ">
                  <img
                    className="shadow-md shadow-primary w-11 h-11 md:w-10 md:h-10 object-cover items-center rounded-full mb-2"
                    src={urlFor(about.imgUrl)}
                    alt={about.title}
                  />
                  {about.title}
                </div>
              </motion.a>
            ))}
          </div>
          <div className="flex flex-col max-h-[140px] md:flex-row justify-between items-center p-2 md:gap-10 gap-5 flex-1">
            {secondList.map((about, index) => (
              <motion.a
                key={about.title + index}
                whileHover={{ scale: 1.1 }}
                href={about.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className=" text-base font-medium justify-between items-center ">
                  <img
                    className="shadow-md shadow-primary w-11 h-11 md:w-10 md:h-10 object-cover items-center rounded-full mb-2"
                    src={urlFor(about.imgUrl)}
                    alt={about.title}
                  />
                  {about.title}
                </div>
              </motion.a>
            ))}
          </div>
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
              className="flex flex-row md:flex-col my-4 md:p-4 p-2 bg-skills dark:bg-secondary cursor-pointer rounded-full justify-evenly items-center z-0 hover:bg-gradient-to-tl from-primary to-white"
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
