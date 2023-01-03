import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { urlFor, client } from '../client';
import { Icons } from '../components';

function Experience() {
  const [workExperience, setWorkExperience] = useState([]);

  useEffect(() => {
    const query = '*[_type == "workExperience"]';
    client.fetch(query).then((data) => setWorkExperience(data));
  }, []);

  const fadeIn = {
    hidden: {
      opacity: 0,
      y: -100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 2,
        ease: 'linear' } },
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="flex-1 max-h-[300px] md:max-h-[400px] flex-col justify-center items-center overflow-y-auto px-5"
    >
      <div className="flex flex-row items-center justify gap-2">
        <h1 className="text-2xl">Experience</h1><div className="w-[50px] h-0.5 bg-primary" />
      </div>
      {workExperience.map((work, index) => (
        <div
          className="flex flex-col justify-center items-center gap-4 py-6"
          key={index}
        >
          <img src={urlFor(work.imgUrl)} alt={work.name} className="w-11 h-11 rounded-full" />
          <div className="font-bold justify-center items-center">{work.company}</div>
          <div className="font-bold text-secondary">{work.name}</div>
          <p>{work.desc}</p>
        </div>
      ))}
      <Icons />
    </motion.div>
  );
}

export default Experience;
