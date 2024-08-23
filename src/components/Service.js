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
          {[
            {
              imgSrc: "img/aperture.svg",
              title: "Web Development",
              description: "I do some research before starting my development to choose the right way for the job.",
            },
            {
              imgSrc: "img/box.svg",
              title: "Fully Responsive",
              description: "Working on projects, I write clean code to make them better readable for any partner or client.",
            },
            {
              imgSrc: "img/cloud-off.svg",
              title: "Beautiful Code",
              description: "Always responsible to complete any given project on time.",
            },
            {
              imgSrc: "img/codesandbox.svg",
              title: "On Time",
              description: "I like to learn new things and I have the ability to learn them quickly.",
            },
            {
              imgSrc: "img/gift.svg",
              title: "Quick Learner",
              description: "Easy to reach and happy to help.",
            },
            {
              imgSrc: "img/monitor.svg",
              title: "Online",
              description: "I do some research before starting my development to choose the right way for the job.",
            },
          ].map((service, index) => (
            <div key={index} className="border border-gray-200 bg-white shadow-lg p-6">
              <img src={service.imgSrc} alt={service.title} className="mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-center">{service.title}</h2>
              <div className="flex justify-center gap-2 mb-4">
                <a href="#" className="text-gray-600 hover:text-blue-500">Web</a>
                <a href="#" className="text-gray-600 hover:text-blue-500">Graphics</a>
                <a href="#" className="text-gray-600 hover:text-blue-500">SEO</a>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}

export default Service;
