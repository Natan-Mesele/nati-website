import React, { useState, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { animateScroll as scroll, scroller } from 'react-scroll';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            smooth: true,
            offset: -70, // Adjust if needed to account for fixed header height
        });
        setBurgerStatus(false); // Close the burger menu after scrolling
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 transition-colors ${scrolling ? 'bg-black' : 'bg-transparent'}`}>
            <a href="#">
                <img src="img/white-logo.png" className="w-20" alt="Logo" />
            </a>
            <nav className="hidden md:flex">
                <a href="#home" className="px-4 text-white font-bold">Home</a>
                <a href="#about" className="px-4 text-white font-bold">About</a>
                <a href="#service" className="px-4 text-white font-bold">Service</a>
                <a href="#portfolio" className="px-4 text-white font-bold">Portfolio</a>
                <a href="#contact" className="px-4 text-white font-bold">Contact</a>
            </nav>
            <div className="md:hidden">
                <MenuIcon className="text-white cursor-pointer" onClick={() => setBurgerStatus(true)} />
            </div>
            <div className={`fixed top-0 right-0 bg-white w-1/2 h-full flex flex-col text-left p-6 transition-transform transform ${burgerStatus ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end">
                    <CloseIcon className="text-black cursor-pointer" onClick={() => setBurgerStatus(false)} />
                </div>
                <a href="#home" className="text-black font-bold py-4 border-b border-gray-300" onClick={() => scrollToSection('home')}>Home</a>
                <a href="#about" className="text-black font-bold py-4 border-b border-gray-300" onClick={() => scrollToSection('about')}>About</a>
                <a href="#service" className="text-black font-bold py-4 border-b border-gray-300" onClick={() => scrollToSection('service')}>Service</a>
                <a href="#portfolio" className="text-black font-bold py-4 border-b border-gray-300" onClick={() => scrollToSection('portfolio')}>Portfolio</a>
                <a href="#contact" className="text-black font-bold py-4 border-b border-gray-300" onClick={() => scrollToSection('contact')}>Contact</a>
            </div>
        </header>
    );
}

export default Header;
