import React from 'react';
import Fade from 'react-reveal/Fade';

const PortfolioCards = () => {
  const projects = [
    {
      title: 'My UI design book',
      subtitle: 'Book',
      githubUrl: 'https://github.com/Natan-Mesele/PMJ',
      liveDemoUrl: '#',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1000/1*8G1vA7egoxrL4Bb7RAgnPQ.jpeg',
      altText: 'UI Design Book',
    },
    {
      title: 'Creating a lean design system',
      subtitle: 'Design system',
      githubUrl: 'https://github.com/Natan-Mesele/fd',
      liveDemoUrl: '#',
      imageUrl: 'https://d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/sites/3/2020/04/03173944/online-food-delivery-industry-min.jpg',
      altText: 'Design System',
    },
    {
      title: 'Interior design news feed',
      subtitle: 'Side project',
      githubUrl: 'https://github.com/Natan-Mesele/blog-master',
      liveDemoUrl: '#',
      imageUrl: 'https://images.ctfassets.net/nnyjccrtyeph/2rJhFCc49b2EidjW8v1kqb/12008c3ec9695c960cbea685366a081e/5_Smart_Ways_to_Manage_Content_for_Multiple_Websites.png?w=1250&h=1250&q=50&fm=png',
      altText: 'Interior Design',
    },
    {
      title: 'Qantas homepage refresh',
      subtitle: 'Website design',
      githubUrl: 'https://github.com/Natan-Mesele',
      liveDemoUrl: '#',
      imageUrl: 'https://media.istockphoto.com/id/1094753332/vector/church-christian-icon.jpg?s=612x612&w=0&k=20&c=zjmHenhRdVWyxbStbK9nX6cf4-giUWWYySvZxL4Iikg=',
      altText: 'Qantas Homepage',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 md:px-8 mt-8 mx-32">
      {/* Check if projects is an array and has items */}
      {Array.isArray(projects) && projects.length > 0 ? (
        projects.map((project, index) => (
          <Fade bottom key={index}>
            <div className="relative bg-white border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              {/* Image section with overlay */}
              <div className="relative">
                <img
                  src={project.imageUrl}
                  alt={project.altText}
                  className="w-full h-48 object-cover"
                />
                {/* Overlay section for buttons */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-800 text-white py-1 px-4 rounded-md hover:bg-gray-700 transition"
                  >
                    View on GitHub
                  </a>
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-400 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
              {/* Text section */}
              <div className="p-4 text-left">
                <h3 className="text-lg font-light text-gray-500">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.subtitle}</p>
              </div>
            </div>
          </Fade>
        ))
      ) : (
        <p>No projects available</p>
      )}
    </div>
  );
};

export default PortfolioCards;
