import React from 'react';
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <div id="about" className="text-left m-4 p-6 border-3 border-gray-200 border-opacity-10 shadow-xl flex flex-col items-center justify-center md:m-12 md:p-8 lg:flex-row lg:gap-12 lg:m-16 lg:justify-between">
        <img src="img/na.png" className="mt-8 w-40 h-52 rounded-full border-3 border-gray-200 border-opacity-10 shadow-xl" alt="Natan Mesele" />
        <div className="mt-8 md:mt-12 lg:mt-0">
          <Fade bottom>
            <h1 className="text-3xl font-bold mb-2">About</h1>
            <h2 className="text-2xl mb-2 leading-tight">FULL-STACK DEVELOPER & SOFTWARE DEVELOPER.</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4 tracking-wide">
              Hello! I'm <span className="text-blue-500 font-bold">Natan Mesele</span>, a Full-Stack web developer. I have a big interest in computer science.
              My dream is to be a computer scientist and a university professor (on computer science). I have attended full-stack development courses at Udemy and Evangadi Bootcamps. To further strengthen my future web development studies, I joined Coursera Inc. which is a U.S.-based massive open online course provider. I am a hardworking, honest, and willing to learn new skills.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-4 tracking-wide">
              I'm happy to connect, listen and help. Let's work together and build something awesome. Let's turn your idea into an even greater product.
            </p>
          </Fade>
          <Fade bottom>
            <div className="flex justify-center mt-4">
              <a href="cv.pdf" target="_blank" className="bg-blue-500 text-white font-bold text-base py-2 px-4 rounded-full mr-4 hover:bg-blue-600 transition">View Resume</a>
              <a href="cv.pdf" target="_blank" className="bg-blue-500 text-white font-bold text-base py-2 px-4 rounded-full hover:bg-blue-600 transition">View Certificates</a>
            </div>
          </Fade>
        </div>
    </div>
  );
}

export default About;
