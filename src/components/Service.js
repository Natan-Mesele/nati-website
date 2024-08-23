import React from 'react';
import Fade from 'react-reveal/Fade';

function Service() {
  return (
    <div id="service" className="mt-20 bg-gray-100">
      <Fade bottom>
        <h1 className="pt-6 mb-4 text-3xl font-bold text-center">Why Choose My Services</h1>
        <p className="text-gray-600 mx-4 mb-8 text-center leading-relaxed">
          I'm a great team player, and I enjoy working with others. Some of my work qualities are listed below.
        </p>
      </Fade>
      <Fade bottom>
        <div className="grid gap-8 p-4 md:p-8 lg:grid-cols-3 lg:gap-12">
          <div className="border border-gray-200 bg-white shadow-lg p-6">
            <img src="img/aperture.svg" alt="aperture" className="mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Web Development</h2>
            <div className="flex gap-2 mb-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">Web</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">Graphics</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">SEO</a>
            </div>
            <p className="text-gray-700 leading-relaxed">
              I do some research before starting my development to choose the right way for the job.
            </p>
          </div>
          <div className="border border-gray-200 bg-white shadow-lg p-6">
            <img src="img/box.svg" alt="box" className="mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Fully Responsive</h2>
            <div className="flex gap-2 mb-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">Web</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">Graphics</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">SEO</a>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Working on projects, I write clean code to make them better readable for any partner or client.
            </p>
          </div>
          <div className="border border-gray-200 bg-white shadow-lg p-6">
            <img src="img/cloud-off.svg" alt="cloud-off" className="mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Beautiful Code</h2>
            <div className="flex gap-2 mb-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">Web</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">Graphics</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">SEO</a>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Always responsible to complete any given project on time.
            </p>
          </div>
          <div className="border border-gray-200 bg-white shadow-lg p-6">
            <img src="img/codesandbox.svg" alt="codesandbox" className="mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">On Time</h2>
            <div className="flex gap-2 mb-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">Web</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">Graphics</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">SEO</a>
            </div>
            <p className="text-gray-700 leading-relaxed">
              I like to learn new things and I have the ability to learn them quickly.
            </p>
          </div>
          <div className="border border-gray-200 bg-white shadow-lg p-6">
            <img src="img/gift.svg" alt="gift" className="mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Quick Learner</h2>
            <div className="flex gap-2 mb-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">Web</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">Graphics</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">SEO</a>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Easy to reach and happy to help.
            </p>
          </div>
          <div className="border border-gray-200 bg-white shadow-lg p-6">
            <img src="img/monitor.svg" alt="monitor" className="mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Online</h2>
            <div className="flex gap-2 mb-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">Web</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">Graphics</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">SEO</a>
            </div>
            <p className="text-gray-700 leading-relaxed">
              I do some research before starting my development to choose the right way for the job.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Service;
