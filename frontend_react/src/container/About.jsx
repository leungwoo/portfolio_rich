/* eslint-disable no-console */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import images from '../constants/images';
// import {urlFor, client } from '../client';

import { AboutMe } from '../components';
import { Experience, Testimonials } from './index';

const { react, js, next, sanity, mongodb, tailwind, framer, figma, meAnimated, coding, thumbs, experience } = images;

const about = [
  { title: 'About Me', description: '<Web Developer/>', imgUrl: meAnimated },
  { title: 'Testimonials', description: '<What people say/>', imgUrl: thumbs },
  { title: 'Experience', description: '<Growth and Development/>', imgUrl: experience },
];

const techs = [
  { title: 'ReactJS', imgUrl: react, link: 'https://reactjs.org/' },
  { title: 'NextJS', imgUrl: next, link: 'https://nextjs.org/' },
  { title: 'Javascript', imgUrl: js, link: 'https://www.javascript.com/' },
  { title: 'Tailwind', imgUrl: tailwind, link: 'https://tailwindcss.com/' },
  { title: 'Sanity', imgUrl: sanity, link: 'https://www.sanity.io/' },
  { title: 'MongoDB', imgUrl: mongodb, link: 'https://www.mongodb.com/' },
  { title: 'Framer', imgUrl: framer, link: 'https://www.framer.com/motion/' },
  { title: 'Figma', imgUrl: figma, link: 'https://www.figma.com/community' },
];
const firstList = [...techs];
const secondList = [...techs];
firstList.splice(0, techs.length / 2);
secondList.splice(techs.length / 2, techs.length - 1);

function About({ theme }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  //   useEffect(() => {
  //     const query = '*[_type == "abouts"]';

  //     client.fetch(query).then((data) => setAbouts(data));
  //   }, []);

  return (
    <div
      id="ABOUT"
      className="h-viewport-height pt-[96px] overflow-y-auto"
    >
      <div className="flex flex-col pb-5 md:flex-row md:px-[200px] justify-evenly items-center gap-10 md:gap-20">
        <div className="flex flex-col md:flex-row items-center flex-1">
          <div className="flex w-[86px] h-0.5 bg-primary mb-2" />
          <div className="flex text-[28px] md:text-[42px] gap-2">
            <span>My</span>
            <br />
            <span>Technologies</span>
          </div>
        </div>
        <div className="items-center flex flex-row md:flex-col overflow-auto justify-start w-full">
          <div className="flex flex-col max-h-[140px] md:flex-row justify-between items-center p-2 md:gap-10 gap-5 flex-1 ">
            {firstList.map((tech, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1 }}
                href={tech.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className=" text-base font-medium justify-between items-center ">
                  <img
                    className="shadow-md shadow-primary w-11 h-11 md:w-10 md:h-10 object-cover items-center rounded-full mb-2"
                    src={tech.imgUrl}
                  />
                  {tech.title}
                </div>
              </motion.a>
            ))}
          </div>
          <div className="flex flex-col max-h-[140px] md:flex-row justify-between items-center flex-1 p-1 md:gap-10 gap-5">
            {secondList.map((tech, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1 }}
                href={tech.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className=" text-base font-medium justify-between items-center ">
                  <img
                    className="shadow-md shadow-primary w-11 h-11 md:w-10 md:h-10 object-cover items-center rounded-full mb-2"
                    src={tech.imgUrl}
                  />
                  {tech.title}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row md:px-[200px]">
        <div className="flex-1 px-4 z-0">
          {about.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleClick(index)}
              className={`flex flex-row md:flex-col my-4 md:p-4 p-2 ${theme === 'light' ? 'bg-skills' : 'bg-secondary'} cursor-pointer rounded-full justify-evenly items-center z-0 hover:bg-gradient-to-tl from-primary to-white`}
            >
              <div className={`text-2xl md:text-3xl ${theme === 'light' ? 'text-secondary' : 'text-white'}`}>
                {item.title}
              </div>
              <img src={item.imgUrl} alt={item.title} className="md:w-10 md:h-10 w-8 h-8 object-contain hover:animate-ping" />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="flex-1 justify-center items-center  "
        >
          {selectedItem === null ? <img src={coding} className="w-full object-cover max-h-[400px] rounded-full" /> : null}
          {selectedItem === 0 ? <AboutMe /> : null}
          {selectedItem === 1 ? <Testimonials /> : null}
          {selectedItem === 2 ? <Experience /> : null}
        </motion.div>
      </div>

    </div>
  );
}

export default About;
