import React from 'react';
import { motion } from 'framer-motion';

import images from '../constants/images';

const { react, js, next, sanity, mongodb, tailwind } = images;

// const about = [
//   { title: 'Web Developer', description: 'I am a great developer', imgUrl: '' },
//   { title: 'UI/UX', description: 'I am a great developer', imgUrl: '' },
//   { title: 'Web Design', description: 'I am a great developer', imgUrl: '' },
//   { title: 'Web Animations', description: 'I am a great developer', imgUrl: '' },
// ];

const techs = [
  { title: 'ReactJS', imgUrl: react, link: 'https://reactjs.org/' },
  { title: 'NextJS', imgUrl: next, link: 'https://nextjs.org/' },
  { title: 'Javascript', imgUrl: js, link: 'https://www.javascript.com/' },
  { title: 'Tailwind', imgUrl: tailwind, link: 'https://tailwindcss.com/' },
  { title: 'Sanity', imgUrl: sanity, link: 'https://www.sanity.io/' },
  { title: 'MongoDB', imgUrl: mongodb, link: 'https://www.mongodb.com/' },
];

function About() {
  return (
    <div className="border border-red-500 ">
      <div className="flex flex-col pt-[50px] md:flex-row md:pt-[110px] md:px-[200px] justify-evenly items-center gap-10 md:gap-20">
        <div className="flex flex-col md:flex-row items-center flex-1">
          <div className="flex w-[86px] h-0.5 bg-primary mb-2" />
          <div className="flex text-[28px] md:text-[42px] gap-2">
            <span>My</span>
            <br />
            <span>Technologies</span>
          </div>
        </div>
        <div className="flex md:flex-row justify-between gap-2 flex-1 pt-">
          {techs.map((tech) => (
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={tech.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="text-xs">
                {tech.title}
                <img
                  className="shadow-md shadow-primary w-8 h-8 md:w-10 md:h-10 object-cover items-center rounded-full"
                  src={tech.imgUrl}
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      {/* <div className="flex flex-wrap">
        {about.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            {item.title}
            {item.description}
            {item.imgUrl}
          </motion.div>
        ))}
      </div> */}

    </div>
  );
}

export default About;
