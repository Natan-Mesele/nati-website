import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { scroller } from 'react-scroll';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);

    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            smooth: true,
            offset: -70, // Adjust if needed to account for fixed header height
        });
        setBurgerStatus(false); // Close the burger menu after scrolling
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 lg:px-16 bg-gray-800">
            {/* Logo */}
            <Link to="/" className="mr-18">
                <img src="img/loo.png" className="w-20" alt="Logo" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav>
                <ul className="hidden md:flex space-x-6">
                    <li><Link to="/home" className="text-white font-bold hover:text-gray-300 transition-colors">Home</Link></li>
                    <li><Link to="/portfolio" className="text-white font-bold hover:text-gray-300 transition-colors">Portfolio</Link></li>
                    <li><Link to="/contact" className="text-white font-bold hover:text-gray-300 transition-colors">Contact</Link></li>
                </ul>
            </nav>

            {/* Desktop Social Media Links */}
            <div className="hidden md:flex space-x-4 px-4 ml-4 mr-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                    <FaGithub className="w-6 h-6 mx-2" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                    <FaLinkedin className="w-6 h-6 mx-2" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                    <FaFacebook className="w-6 h-6 mx-2" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                    <FaInstagram className="w-6 h-6 mx-2" />
                </a>
            </div>

            {/* Burger Icon for Mobile */}
            <div className="md:hidden">
                <MenuIcon className="text-white cursor-pointer" onClick={() => setBurgerStatus(true)} />
            </div>

            {/* Burger Menu */}
            <div className={`fixed top-0 right-0 bg-gray-800 w-3/4 h-full flex flex-col text-left p-6 transition-transform transform ${burgerStatus ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end mb-6">
                    <CloseIcon className="text-white cursor-pointer" onClick={() => setBurgerStatus(false)} />
                </div>
                <Link to="/" className="text-white font-bold py-4 border-b border-gray-700 text-4xl mx-2" onClick={() => setBurgerStatus(false)}>Home</Link>
                <Link to="/portfolio" className="text-white font-bold py-4 border-b border-gray-700 text-4xl mx-2" onClick={() => setBurgerStatus(false)}>Portfolio</Link>
                <Link to="/contact" className="text-white font-bold py-4 border-b border-gray-700 text-4xl mx-2" onClick={() => setBurgerStatus(false)}>Contact</Link>
            </div>
        </header>
    );
}

export default Header;
