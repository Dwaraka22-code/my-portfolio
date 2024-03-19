import React from 'react';
import foodCheetah from '../assets/portfolio/foodCheetah.png';
import netflixGpt from '../assets/portfolio/netflixGpt.png';
import youtube from '../assets/portfolio/youtube-namaste.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: foodCheetah,
      codeUrl: 'https://github.com/Dwaraka22-code/food-cheetah.git',
      demoUrl: 'https://food-cheetah.netlify.app',
    },
    {
      id: 2,
      src: netflixGpt,
      codeUrl: 'https://github.com/Dwaraka22-code/namaste-netflix-gpt.git',
      demoUrl: 'https://namaste-netflix-gpt.vercel.app/',
    },
    {
      id: 3,
      src: youtube,
      codeUrl: 'https://github.com/Dwaraka22-code/youtube-ultra.git',
      demoUrl: 'https://youtube-namaste.netlify.app',
    },
  ];

  const handleDemoClick = (demoUrl) => {
    window.open(demoUrl, '_blank');
  };

  const handleCodeClick = (codeUrl) => {
    window.open(codeUrl, '_blank');
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoUrl, codeUrl }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-44 "
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105"
                  onClick={() => handleDemoClick(demoUrl)}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105"
                  onClick={() => handleCodeClick(codeUrl)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
