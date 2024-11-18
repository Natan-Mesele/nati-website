import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom for image animation
import Fade from 'react-reveal/Fade'; // Importing Fade for fade-in animation
import Slide from 'react-reveal/Slide'; // Importing Slide for slide animation

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
    <div className="min-h-screen bg-white flex flex-col mt-32">
      {/* Contact Form Section */}
      <div id="contact" className="flex flex-col md:flex-row mx-4 my-8 md:mx-auto md:my-16 md:w-4/5 lg:w-3/4 pb-16 md:pb-20 px-6 md:px-10 space-y-8 md:space-x-8">

        {/* Left Section: Text and Social Media Links */}
        <Fade bottom cascade>
          <div className="md:w-1/2 flex flex-col justify-start items-center md:items-start text-center md:text-left mb-8 md:mb-0 mt-32">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-8xl font-bold text-left mb-6 md:mb-8 font-sans">Contact.</h1>
              <p className="text-lg md:text-2xl font-light mb-4 text-gray-500 font-sans">Get in touch with me via social media or send me an email.</p>
            </div>

            {/* Social Media Icons */}
            <div className="grid grid-cols-2 gap-x-14 gap-y-6 mt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors">
                <FaGithub className="w-14 h-14 mb-2" />
                <span>Github</span>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors">
                <FaLinkedin className="w-14 h-14 mb-2" />
                <span>LinkedIn</span>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors">
                <FaFacebook className="w-14 h-14 mb-2" />
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors">
                <FaInstagram className="w-14 h-14 mb-2" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </Fade>

        {/* Right Section: Image with background lightened */}
        <Zoom>
          <div className="md:w-1/2 mt-8 md:mt-0 relative">
            {/* Image Zoom Animation */}
            <div className="absolute" />
            <img
              src="img/c.png"
              alt="Designer"
              className="w-full h-full object-cover"  // Reduced opacity for blending
            />
          </div>
        </Zoom>
      </div>

      {/* Contact Form Section: Positioned at the bottom */}
      <Slide bottom>
        <div className="flex justify-center px-6 md:px-10 py-8 md:py-12 bg-white">
          <div className="w-full md:w-3/4 lg:w-3/4 bg-white p-8 rounded-lg shadow-lg relative z-10">
            <h2 className="text-3xl font-semibold mb-6 text-left text-gray-400">Send Me a Message</h2>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 text-left">
              <div className="flex flex-col space-y-6 md:w-1/2">
                <div>
                  <label htmlFor="user_name" className="block text-lg font-normal mb-2 text-gray-400">Name</label>
                  <input type="text" name="user_name" id="user_name" className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-gray-500" required />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-lg font-normal mb-2 text-gray-400">Email</label>
                  <input type="email" name="user_email" id="user_email" className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-gray-500" required />
                </div>
              </div>
              <div className="flex flex-col space-y-6 md:w-1/2">
                <div>
                  <label htmlFor="message" className="block text-lg font-normal mb-2 text-gray-400">Message</label>
                  <textarea name="message" id="message" rows="6" className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-gray-500" required></textarea>
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="bg-gray-600 text-white text-lg font-normal py-3 px-6 rounded-md w-40 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Contact;
