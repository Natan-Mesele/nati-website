import React from 'react';

function Footer() {
  return (
    <div className="bg-[#FAFAFA] text-[#888888] w-full py-8 px-16 md:px-24 lg:px-32 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Copyright Section */}
        <p className="text-center text-sm md:text-base font-medium">
          ©2024 Natan Mesele
        </p>

        {/* Navigation Links */}
        <div className="flex space-x-12">
          <a href="#" className="text-sm md:text-base hover:text-black transition-colors duration-300">
            About
          </a>
          <a href="#" className="text-sm md:text-base hover:text-black transition-colors duration-300">
            Portfolio
          </a>
          <a href="#" className="text-sm md:text-base hover:text-black transition-colors duration-300">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
