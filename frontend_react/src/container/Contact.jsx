/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { images } from '../constants';
import { Icons } from '../components';

const { shakehands } = images;

function ContactForm() {
  // const [notification, setNotification] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formState;

  const form = useRef();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: 'top-center',
        autoClose: 2500,
        hideProgressBar: 'false',
        closeOnClick: 'true',
        pauseOnHover: 'true',
        draggable: 'true',
        progress: undefined,
        className: 'border-b-2 border-primary text-primary ',
      });
    } else {
      toast.success(message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: 'false',
        closeOnClick: 'true',
        pauseOnHover: 'true',
        draggable: 'true',
        progress: undefined,
        className: 'border-b-2 border-primary text-primary ',
      });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_bkpc7ag', 'template_ophm5cg', form.current, 'qbFMLvC8bIjmsP9iB')
      .then(() => {
        notify('Email sent successfully', false);
        setLoading(false);
        setFormState({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch(() => {
        notify('Error sending email', true);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 1] }}
      hidden={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.25 }}
      id="CONTACT"
      className="flex flex-col md:flex-row md:h-viewport-height pt-[110px] md:gap-20 md:px-[100px] lg:px-[200px] px-5 overflow-y-auto
       md:bg-bgContact dark:md:bg-bgContactDark bg-backgroundImgSmNew dark:bg-black dark:bg-backgroundImgSmDark bg-center bg-cover dark:text-white z-0"
    >
      <div className="flex-1 justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-2">
          <div className="flex w-[86px] h-0.5 bg-primary mb-2" />
          <h1 className="text-[36px] md:text-[42px] font-medium pb-5 text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600">Got a project? Let’s talk</h1>
        </div>
        <h1 className="pb-4 text-secondary font-bold italic">
          “Plan, take Massive Action and Fail Forward.  –Richard Leung Woo-Gabriel ”
        </h1>
        <Icons />
        <img
          src={shakehands}
          alt="contact"
          className=" shadow-primary shadow-md dark:shadow-white dark:shadow-md mx-auto w-full border border-primary dark:border-primary
           bg-white dark:bg-opacity-5 dark:border-opacity-20 border-opacity-20 backdrop-blur-sm rounded-full bg-opacity-10 object-cover pb-5"
        />
      </div>
      <form onSubmit={sendEmail} ref={form} className="flex-1 flex flex-col gap-4">
        <div className="">
          <label
            htmlFor="name"
            className="block text-sm font-bold"
          >
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            />
          </label>
        </div>
        <div className="">
          <label
            htmlFor="email"
            className="block text-sm font-bold"
          >
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="">
          <label
            htmlFor="message"
            className="block text-sm font-bold"
          >
            Message
            <textarea
              type="message"
              name="message"
              value={message}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            />
          </label>
        </div>
        <div className="flex justify-center items-center pb-4">
          <button
            type="submit"
            className="bg-primary text-white p-2 rounded-lg font-medium hover:bg-gradient-to-tl from-primary to-white hover:cursor-pointer"
          >
            {!loading ? 'Send Message' : 'Sending....'}
          </button>
        </div>
        <ToastContainer />
      </form>
    </motion.div>
  );
}
export default ContactForm;

