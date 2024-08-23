import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SendIcon from '@material-ui/icons/Send';

export const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_45glgvg', 'template_618obgq', form.current, 'KJYp9oQqydHGE5fAr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contact" className="text-left mx-4 my-8 md:mx-auto md:my-16 md:w-1/2 lg:w-1/3">
      <h1 className="text-2xl font-bold mb-6">Contact</h1>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block text-lg font-semibold mb-2">Name</label>
          <input type="text" name="user_name" className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Email</label>
          <input type="email" name="user_email" className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Message</label>
          <textarea name="message" className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-40 resize-none"></textarea>
        </div>
        <div>
          <input type="submit" value="Send Message" className="bg-blue-500 text-white px-4 py-2 rounded-md border border-blue-500 cursor-pointer hover:bg-blue-600 transition-colors duration-300" />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
