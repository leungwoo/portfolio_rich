import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { urlFor, client } from '../client';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    client.fetch(query).then((data) => setTestimonials(data));
  }, []);

  const handleClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const fadeIn = {
    hidden: {
      opacity: 0,
      x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        duration: 1,
        ease: 'linear',
      },
    },
  };
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="flex-1 max-h-[300px] md:max-h-[400px] flex-col justify-center items-center overflow-y-auto px-4"
    >
      <div className="flex flex-row items-center justify gap-2 mb-4">
        <h1 className="text-2xl">Testimonials</h1><div className="w-[50px] h-0.5 bg-primary" />
      </div>
      {testimonials.map((testimonial, id) => (
        <div key={id}>
          <div
            className="rounded-lg hover:shadow-secondary shadow-md hover:shadow-lg dark:hover:shadow-primary transition-all duration-200 flex flex-col justify-center items-center py-4"
          >
            <img src={urlFor(testimonial.imgurl)} alt={testimonial.name} className="bg-backgroundImgSm bg-contain dark:bg-backgroundImgSmDark w-40 rounded-full" />
            <p className="font-bold text-lg mb-2">{testimonial.name} </p>
            <p className="font-bold text-base">{testimonial.company}</p>
            <motion.div
              onClick={() => handleClick(id)}
              className="cursor-pointer mb-2"
              whileHover={{ scale: 1.1 }}
            > says...
            </motion.div>
            <div className=" px-4">
              {expandedId === id && (<div className="text-base">{testimonial.feedback}</div>)}
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default Testimonials;
