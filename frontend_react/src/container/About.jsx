import React from 'react';
// import { motion } from 'framer-motion';

import images from '../constants/images';

const { react, js, next, sanity, mongodb, tailwind } = images;

// const about = [
//   { title: 'Web Developer', description: 'I am a great developer', imgUrl: '' },
//   { title: 'UI/UX', description: 'I am a great developer', imgUrl: '' },
//   { title: 'Web Design', description: 'I am a great developer', imgUrl: '' },
//   { title: 'Web Animations', description: 'I am a great developer', imgUrl: '' },
// ];

const techs = [
  { title: 'ReactJS', imgUrl: react },
  { title: 'NextJS', imgUrl: next },
  { title: 'Javascript', imgUrl: js },
  { title: 'Tailwind', imgUrl: tailwind },
  { title: 'Sanity', imgUrl: sanity },
  { title: 'MongoDB', imgUrl: mongodb },
];

function About() {
  return (
    <div className="border border-red-500 ">
      <div className="border border-red-200 flex  flex-col pt-[50px] md:flex-row md:pt-[110px] px-[200px] justify-between items-center font-medium text-[42px]">
        <div className="border border-yellow-300">
          <div className="flex w-[86px] h-0.5 bg-primary" />
          <div className="flex text-[28px] md:text-[42px] gap-2">
            <span>My</span>
            <br />
            <span>Technologies</span>
          </div>
        </div>
        <div className="border border-yellow-300 flex md:flex-row justify-between gap-3">
          {techs.map((tech) => (
            <div className="text-xs">{tech.title}
              <img className="shadow-md shadow-primary w-10 h-10 object-cover flex-1 items-center rounded-full" src={tech.imgUrl} />
            </div>
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
