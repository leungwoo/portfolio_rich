/* eslint-disable no-console */
import React from 'react';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit clicked');
    // Send the message to you here (e.g., via email or a messaging service)
  };
  return (
    <section id="CONTACT">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label htmlFor="email">
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label htmlFor="message">
          Message:
          <textarea name="message" />
        </label>
        <br />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
