import React from 'react';
import Fade from 'react-reveal/Fade';

function Portfolio() {
  return (
    <div id="portfolio" className="pt-8 md:pt-12 pb-8 md:pb-12 bg-gray-100">
      <Fade bottom>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8">Recent Works</h1>
      </Fade>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8">
        {projects.map((project, index) => (
          <Fade bottom key={index}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.githubUrl}
              className="relative block overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-white transition-transform transform hover:scale-105"
            >
              <img
                src={project.imageUrl}
                alt={project.altText}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2 inline-block bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition"
                  >
                    View on GitHub
                  </a>
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </a>
          </Fade>
        ))}
      </div>
    </div>
  );
}

// Example projects array
const projects = [
  {
    githubUrl: 'https://github.com/Natan-Mesele/Tesla-clone',
    liveDemoUrl: '#', // Add live demo URLs here if available
    imageUrl: 'img/tesla.jpg',
    altText: 'Tesla Clone',
  },
  {
    githubUrl: 'https://github.com/Natan-Mesele/apple-clone',
    liveDemoUrl: '#', // Add live demo URLs here if available
    imageUrl: 'img/apple.png',
    altText: 'Apple Clone',
  },
  {
    githubUrl: 'https://github.com/Natan-Mesele/amazon-clone',
    liveDemoUrl: '#', // Add live demo URLs here if available
    imageUrl: 'img/amazon.jpg',
    altText: 'Amazon Clone',
  },
  {
    githubUrl: 'https://github.com/Natan-Mesele/netflix-clone',
    liveDemoUrl: '#', // Add live demo URLs here if available
    imageUrl: 'img/netflix.jpg',
    altText: 'Netflix Clone',
  },
  {
    githubUrl: 'https://github.com/Natan-Mesele/disney-clone',
    liveDemoUrl: '#', // Add live demo URLs here if available
    imageUrl: 'img/disney.jpg',
    altText: 'Disney Clone',
  },
  {
    githubUrl: 'https://github.com/Natan-Mesele/linkedin-clone',
    liveDemoUrl: '#', // Add live demo URLs here if available
    imageUrl: 'img/linkp.jpg',
    altText: 'LinkedIn Clone',
  },
];

export default Portfolio;
