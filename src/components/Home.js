import React from 'react';
import Fade from 'react-reveal/Fade';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Home() {
    const [text] = useTypewriter({
        words: ['Front-End Developer!', 'Web Developer', 'UI/UX Design', 'Software Engineer'],
        loop: {},
    });

    return (
        <div id="home" className="relative w-full h-screen bg-cover bg-center bg-opacity-80" style={{ backgroundImage: 'url("img/hacker.jpg")' }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 py-8 md:px-12 md:py-16 lg:px-20 lg:py-24">
                <Fade bottom>
                    <p className="text-lg font-bold tracking-wider mb-4 md:text-xl lg:text-2xl">
                        WELCOME TO MY WORLD
                    </p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 lg:mb-10">
                        Hi, I’m <span className="text-blue-400">Natan Mesele</span>
                    </h1>
                </Fade>
                <Fade bottom>
                    <div className="relative mt-4 md:mt-6 lg:mt-8">
                        <div className="text-2xl md:text-3xl lg:text-4xl flex items-center justify-center">
                            <span>{text}</span>
                            <Cursor cursorColor="white" />
                        </div>
                        <a href="#" className="mt-4 inline-block bg-black text-white text-base md:text-lg lg:text-xl font-bold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 border-2 border-white rounded-full hover:bg-blue-400 hover:border-black transition">
                            Go To Portfolio
                        </a>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Home;
