import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function Home() {
  return (
    <div className="relative w-full">
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row w-full bg-white">
        {/* Left Section: About */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-8 md:p-16 text-left pt-32 md:pt-0">
          <Fade bottom>
            {/* <p className="text-3xl md:text-4xl lg:text-8xl font-bold text-left mb-6 md:mb-8 font-sans">
              .about
            </p> */}
          </Fade>

          <Fade bottom>
            <h1 className="text-lg md:text-2xl lg:text-3xl font-light mb-4 text-gray-500 font-sans">
            Hi, I'm Natan Mesele, a dedicated software engineer from Hawassa, Ethiopia.
            </h1>
          </Fade>

          <Fade bottom>
            <p className="text-base md:text-xl lg:text-xl font-light mb-4 text-gray-500 font-sans">
              As a passionate software engineer, I excel at simplifying complex challenges and delivering intuitive, scalable solutions. With expertise in both frontend and backend development, I build innovative applications that are efficient, maintainable, and user-centric. My technical skill set spans a wide range of technologies, including HTML, CSS, JavaScript, React, Spring Boot, Node.js, Express, MongoDB, MySQL, as well as modern UI frameworks like Material UI and ShadCN/UI. Driven by a commitment to continuous growth, I stay ahead of emerging trends to ensure that I can always provide cutting-edge solutions to meet the evolving needs of users and businesses
            </p>
          </Fade>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/2 h-full">
          <Zoom>
            <img
              src="https://images.unsplash.com/photo-1487260211189-670c54da558d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Designer"
              className="w-full h-full object-cover"
            />
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default Home;
