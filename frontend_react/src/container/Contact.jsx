/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { motion } from 'framer-motion';

import { images } from '../constants';

const { contactProject } = images;

function ContactForm({ theme }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('message sent!');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 1] }}
      hidden={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.25 }}
      id="CONTACT"
      className={`flex flex-col md:flex-row md:h-viewport-height pt-[110px] md:gap-20 md:px-[200px] px-5  overflow-y-auto ${theme === 'light' ? 'bg-backgroundImgLg' : 'bg-backgroundImgLgDark'} bg-cover bg-no-repeat bg-center`}
    >
      <div className="flex-1 justify-center items-center">
        <div className="flex flex-col md:flex-row items-center md:gap-2">
          <div className="flex w-[86px] h-0.5 bg-primary mb-2" />
          <h1 className="text-[30px] md:text-5xl font-medium pb-5">Got a project? Let’s talk</h1>
        </div>
        <h1 className="hidden md:flex">
          <span className="py-5 text-secondary font-bold italic">
            “Plan, take Massive Action and Fail Forward.  –Richard Leung Woo-Gabriel ”
          </span>
        </h1>
        <img src={contactProject} alt="contact" className=" object-cover max-h-[400px] md:max-h-[500px] rounded-full pb-5" />
      </div>
      <form onSubmit={handleSubmit} className=" flex-1 mx-auto max-w-md">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block  text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-primary text-white p-2 rounded-lg font-medium hover:bg-gradient-to-tl from-primary to-white hover:cursor-pointer"
          >
            Send
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default ContactForm;
// service_l9e6o0j
// service_bkpc7ag
