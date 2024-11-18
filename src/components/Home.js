import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";  // Importing Zoom for the image animation

function Home() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 flex flex-col md:flex-row w-full h-full bg-white">
        {/* Left Section: About */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-8 md:p-16 text-left pt-32 md:pt-0"> {/* Added pt-20 for mobile */}
          <Fade bottom>  {/* Text Fade Animation */}
            <p className="text-3xl md:text-4xl lg:text-8xl font-bold text-left mb-6 md:mb-8 font-sans">
              .about
            </p>
          </Fade>
          
          <Fade bottom>  {/* Text Fade Animation */}
            <h1 className="text-lg md:text-2xl lg:text-3xl font-light mb-4 text-gray-500 font-sans">
              I'm a product designer based in sunny Sydney, Australia.
            </h1>
          </Fade>
          
          <Fade bottom>  {/* Text Fade Animation */}
            <p className="text-base md:text-xl lg:text-2xl font-light mb-4 text-gray-500 font-sans">
              Since 2005, I've enjoyed turning complex problems into simple,
              beautiful, and intuitive designs. When I'm not pushing pixels, you'll
              find me cooking, gardening, or working out in the park.
            </p>
          </Fade>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/2 h-2/3 md:h-full">
          <Zoom>  {/* Image Zoom Animation */}
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
