import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_tr8x3hy", "template_r9zhhsw", form.current, "85el7MKTL1vd_8b8q")
      .then((result) => {
        console.log('Success:', result.text);
        alert('Message sent successfully!');
        // Clear the form fields
        e.target.reset();
      })
      .catch((error) => {
        console.error('Error:', error.text);
        alert('Failed to send message.');
      });
  };

  return (
    <div id="contact" className="text-left mx-4 my-8 md:mx-auto md:my-16 md:w-1/2 lg:w-1/3">
      <h1 className="text-2xl font-bold mb-6">Contact</h1>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
        <div>
          <label htmlFor="user_name" className="block font-medium mb-1">Name</label>
          <input type="text" name="user_name" id="user_name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div>
          <label htmlFor="user_email" className="block font-medium mb-1">Email</label>
          <input type="email" name="user_email" id="user_email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium mb-1">Message</label>
          <textarea name="message" id="message" rows="4" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Send</button>
      </form>
    </div>
  );
};

export default Contact;