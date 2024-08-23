import React from "react";
import Fade from "react-reveal/Fade";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words: [
      "Front-End Developer!",
      "Web Developer",
      "UI/UX Design",
      "Software Engineer",
    ],
    loop: {},
  });

  return (
    <div
      id="home"
      className="relative w-full h-screen bg-cover bg-center bg-opacity-80"
      style={{
        backgroundImage:
          'url("https://plus.unsplash.com/premium_photo-1669069604732-568bbcf3ac6a?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 md:px-12 md:py-16 lg:px-20 lg:py-24 bg-gradient-to-t from-black via-transparent to-transparent">
        <Fade bottom>
          <p className="text-lg font-bold tracking-wider mb-4 md:text-xl lg:text-2xl text-white">
            WELCOME TO MY WORLD
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 lg:mb-10 text-white">
            Hi, I’m <span className="text-gray-600">Natan Mesele</span>
          </h1>
        </Fade>
        <Fade bottom>
          <div className="relative mt-4 md:mt-6 lg:mt-8">
            <div className="text-2xl md:text-3xl lg:text-4xl flex items-center justify-center text-white">
              <span>{text}</span>
              <Cursor cursorColor="white" />
            </div>
            <a
              href="#"
              className="mt-4 inline-block bg-gray-600 text-white text-base md:text-lg lg:text-xl font-bold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 border-2 border-gray-400 rounded-full hover:bg-gray-500 hover:border-gray-300 transition"
            >
              Go To Portfolio
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Home;
