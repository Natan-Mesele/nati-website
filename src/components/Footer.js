import React from 'react';
import Fade from 'react-reveal/Fade';
import ScrollToTop from 'react-scroll-to-top';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function Footer() {
  return (
    <div className="bg-[#051129] text-white w-full py-6 px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Main Footer */}
        <div className="text-left">
          <Fade bottom>
            <h1 className="text-xl font-semibold mb-4">Address</h1>
            <p className="text-gray-400 mb-2">Addis Ketema Subcity, Hawassa Ethiopia</p>
            <p className="text-gray-400 mb-2">huluale12@gmail.com / nattymesele@gmail.com</p>
            <p className="text-gray-400">+251926412563</p>
          </Fade>
        </div>

        {/* Navigation Footer */}
        <div className="text-left">
          <Fade bottom>
            <h1 className="text-xl font-semibold mb-4">Navigation</h1>
            <a href="#" className="block text-gray-400 mb-2 text-lg hover:text-white">Home</a>
            <a href="#" className="block text-gray-400 mb-2 text-lg hover:text-white">About</a>
            <a href="#" className="block text-gray-400 mb-2 text-lg hover:text-white">Contact</a>
          </Fade>
        </div>

        {/* Social Media Footer */}
        <div className="text-left">
          <Fade bottom>
            <h1 className="text-xl font-semibold mb-4">Social Media</h1>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/natan.mesele.1/" target="_blank" rel="noopener noreferrer">
                <img src="img/face.png" alt="Facebook" className="w-8 h-8 object-cover bg-white rounded-full border border-gray-300" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <img src="img/git.png" alt="GitHub" className="w-8 h-8 object-cover bg-white rounded-full border border-gray-300" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src="img/inst.png" alt="Instagram" className="w-8 h-8 object-cover bg-white rounded-full border border-gray-300" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src="img/linkedin.png" alt="LinkedIn" className="w-8 h-8 object-cover bg-white rounded-full border border-gray-300" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src="img/twitter1.png" alt="Twitter" className="w-8 h-8 object-cover bg-white rounded-full border border-gray-300" />
              </a>
            </div>
          </Fade>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-4 right-4">
        <ScrollToTop 
          smooth 
          top="20" 
          component={<ArrowUpwardIcon style={{ fontSize: 40, color: 'black' }} />} 
        />
      </div>
    </div>
  );
}

export default Footer;
