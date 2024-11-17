import React from 'react';
import Fade from 'react-reveal/Fade';

const PortfolioCards = () => {
  const projects = [
    {
      githubUrl: 'https://github.com/Natan-Mesele/PMJ',
      liveDemoUrl: '#',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1000/1*8G1vA7egoxrL4Bb7RAgnPQ.jpeg',
      altText: 'Tesla Clone',
    },
    {
      githubUrl: 'https://github.com/Natan-Mesele/fd',
      liveDemoUrl: '#',
      imageUrl: 'https://d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/sites/3/2020/04/03173944/online-food-delivery-industry-min.jpg',
      altText: 'Apple Clone',
    },
    {
      githubUrl: 'https://github.com/Natan-Mesele/blog-master',
      liveDemoUrl: '#',
      imageUrl: 'https://images.ctfassets.net/nnyjccrtyeph/2rJhFCc49b2EidjW8v1kqb/12008c3ec9695c960cbea685366a081e/5_Smart_Ways_to_Manage_Content_for_Multiple_Websites.png?w=1250&h=1250&q=50&fm=png',
      altText: 'Amazon Clone',
    },
    {
      githubUrl: 'https://github.com/Natan-Mesele',
      liveDemoUrl: '#',
      imageUrl: 'https://media.istockphoto.com/id/1094753332/vector/church-christian-icon.jpg?s=612x612&w=0&k=20&c=zjmHenhRdVWyxbStbK9nX6cf4-giUWWYySvZxL4Iikg=',
      altText: 'Netflix Clone',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8 mt-8">
      {/* Check if projects is an array and has items */}
      {Array.isArray(projects) && projects.length > 0 ? (
        projects.map((project, index) => (
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
        ))
      ) : (
        <p>No projects available</p> // Fallback message in case projects is empty or not an array
      )}
    </div>
  );
};

export default PortfolioCards;
