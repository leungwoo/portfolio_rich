import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs';
import { ImQuotesLeft } from 'react-icons/im';

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
        duration: 2,
        ease: 'linear',
      },
    },
  };
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className=" flex-1 max-h-[300px] md:max-h-[400px] flex-col justify-center items-center overflow-auto py-8 px-5 bg-opacity-5 backdrop-blur-sm bg-white dark:backdrop-blur-sm rounded-lg border border-opacity-20
       dark:border-opacity-20 dark:border-primary border-primary"
    >
      <div className="flex flex-row items-center justify gap-2 mb-4">
        <h1 className="text-2xl">Testimonials</h1><div className="w-[50px] h-0.5 bg-primary" />
      </div>
      {testimonials.map((testimonial, id) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1] }}
          viewport={{ once: false, amount: 0.35 }}
          key={id}
        >
          <div
            className="hover:shadow-lg dark:hover:shadow-sm dark:hover:shadow-secondary  transition-all duration-1000  flex flex-col justify-center items-center py-4"
          >
            <img src={urlFor(testimonial.imgurl)} alt={testimonial.name} className="w-40 rounded-full" />
            <p className="font-bold text-lg mb-2">{testimonial.name} </p>
            <p className="font-bold text-secondary text-base">{testimonial.company}</p>
            <motion.div
              onClick={() => handleClick(id)}
              className="cursor-pointer mb-2"
              whileHover={{ scale: 1.1 }}
            >{expandedId === id ? <BsFillArrowUpCircleFill size={20} /> : <BsFillArrowDownCircleFill size={20} />}
            </motion.div>
            <div className=" px-4">
              {expandedId === id && (
                <>
                  <ImQuotesLeft size={30} className="text-primary mb-2" />
                  <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate="show"
                    className="text-base "
                  >{testimonial.feedback}
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Testimonials;
