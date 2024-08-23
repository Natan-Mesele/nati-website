import React from 'react';
import Fade from 'react-reveal/Fade';

function Portfolio() {
  return (
    <div id="portfolio" className="pt-8 md:pt-12 pb-8 md:pb-12 bg-gray-100">
      <Fade bottom>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8">Recent Works</h1>
      </Fade>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8">
        <Fade bottom>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Natan-Mesele/Tesla-clone"
            className="relative block overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-white transition-transform transform hover:scale-105"
          >
            <img
              src="img/tesla.jpg"
              alt="Tesla Clone"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity"></div>
          </a>
        </Fade>
        <Fade bottom>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Natan-Mesele/apple-clone"
            className="relative block overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-white transition-transform transform hover:scale-105"
          >
            <img
              src="img/apple.png"
              alt="Apple Clone"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity"></div>
          </a>
        </Fade>
        <Fade bottom>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Natan-Mesele/amazon-clone"
            className="relative block overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-white transition-transform transform hover:scale-105"
          >
            <img
              src="img/amazon.jpg"
              alt="Amazon Clone"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity"></div>
          </a>
        </Fade>
        <Fade bottom>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Natan-Mesele/netflix-clone"
            className="relative block overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-white transition-transform transform hover:scale-105"
          >
            <img
              src="img/netflix.jpg"
              alt="Netflix Clone"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity"></div>
          </a>
        </Fade>
        <Fade bottom>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Natan-Mesele/disney-clone"
            className="relative block overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-white transition-transform transform hover:scale-105"
          >
            <img
              src="img/disney.jpg"
              alt="Disney Clone"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity"></div>
          </a>
        </Fade>
        <Fade bottom>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Natan-Mesele/linkedin-clone"
            className="relative block overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-white transition-transform transform hover:scale-105"
          >
            <img
              src="img/linkp.jpg"
              alt="LinkedIn Clone"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity"></div>
          </a>
        </Fade>
      </div>
    </div>
  );
}

export default Portfolio;
