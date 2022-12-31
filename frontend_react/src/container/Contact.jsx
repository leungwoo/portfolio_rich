/* eslint-disable consistent-return */
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { BiMailSend } from 'react-icons/bi';

import { images } from '../constants';
import { Icons } from '../components';

const { contactProject } = images;

function ContactForm() {
  const [notification, setNotification] = useState('');
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

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_bkpc7ag', 'template_ophm5cg', form.current, 'qbFMLvC8bIjmsP9iB')
      .then(() => {
        setNotification(
          <div>
            <BiMailSend size={30} color="#5D3BEE" />
            <span>Email sent successfully</span>
          </div>,
        );
        setLoading(false);
        setFormState({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch(() => {
        setNotification('Error sending email');
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
       bg-bgContact dark:bg-bgContactDark bg-center bg-no-repeat bg-cover dark:text-white"
    >
      <div className="flex-1 justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-2">
          <div className="flex w-[86px] h-0.5 bg-primary mb-2" />
          <h1 className="text-[36px] md:text-[42px] font-medium pb-5">Got a project? Let’s talk</h1>
        </div>
        <h1 className="hidden md:flex">
          <span className="pb-4 text-secondary font-bold italic">
            “Plan, take Massive Action and Fail Forward.  –Richard Leung Woo-Gabriel ”
          </span>
        </h1>
        <Icons />
        <img src={contactProject} alt="contact" className=" object-cover max-h-[400px] md:max-h-[500px] rounded-full pb-5" />
      </div>
      <form onSubmit={sendEmail} ref={form} className=" flex-1 flex flex-col gap-4">
        <div className="mb-4">
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="mb-4">
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
        <div className="mb-4">
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
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-primary text-white p-2 rounded-lg font-medium hover:bg-gradient-to-tl from-primary to-white hover:cursor-pointer"
          >
            {!loading ? 'Send Message' : 'Sending....'}
          </button>
        </div>
        {notification && <div className="text-primary font-medium justify-center items-center mt-2">{notification}</div>}
      </form>
    </motion.div>
  );
}
export default ContactForm;

