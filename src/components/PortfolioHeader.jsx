import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import PortfolioCards from './PortfolioCards';

function PortfolioHeader() {
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to top when the page loads
  }, []);
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
              Check out my latest projects and contributions
            </h2>
            <p className="text-lg md:text-xl text-black mb-6 font-sans font-light">
              I’ve had the opportunity to work with startups, agencies, and corporations, developing software solutions that have made a significant impact on our users. I've led and collaborated on projects focused on building scalable, efficient, and innovative applications.
            </p>
          </Fade>
        </div>

        {/* Right Section (Image) */}
        <div className="md:w-1/2">
          <Fade bottom>
            <img
              src="https://images.ctfassets.net/xvqp5pvs1vfv/cXZ5W9AxY0xG7V1cIpkoD/2393bc866334c8f85671678a7157db6b/Issuu_SEO_Portfolio.png"
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
