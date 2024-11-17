import React from 'react';
import Fade from 'react-reveal/Fade';
import PortfolioCards from './PortfolioCards';

function PortfolioHeader() {
  return (
    <div className="pt-8 md:pt-12 pb-8 md:pb-12 bg-white min-h-screen flex flex-col justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 text-left mt-64 mb-16">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col justify-center px-16 text-center md:text-left">
          <Fade bottom>
            <h1 className="text-3xl md:text-4xl lg:text-8xl font-bold text-left mb-6 md:mb-8 font-sans">
              portfolio.
            </h1>
            <h2 className="text-lg md:text-2xl font-light mb-4 text-gray-500 font-sans">
              Check out some of my latest design case studies.
            </h2>
            <p className="text-lg md:text-xl text-black mb-6 font-sans font-light">
              I’ve worked for startups, agencies, corporations, and government and have led projects to design products used by millions of people.
            </p>
          </Fade>
        </div>

        {/* Right Section (Image) */}
        <div className="md:w-1/2">
          <Fade bottom>
            <img
              src="https://miro.medium.com/v2/resize:fit:1000/1*8G1vA7egoxrL4Bb7RAgnPQ.jpeg"
              alt="Portfolio Image"
              className="w-3/4 h-auto object-cover rounded-lg shadow-lg mx-auto"
            />
          </Fade>
        </div>
      </div>

      {/* Increased shadow between PortfolioHeader and PortfolioCards */}
      <div className="shadow-2xl border-solid border-b-4 border-white-300 mt-8"></div>

      <div className="mt-16">
        <PortfolioCards />
      </div>
    </div>
  );
}

export default PortfolioHeader;
