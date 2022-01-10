import work_item_1 from '../../images/work_item_1.png';
import work_item_2 from '../../images/work_item_2.png';
import work_item_3 from '../../images/work_item_3.png';
import work_item_4 from '../../images/work_item_4.png';
import React from 'react';

const Work = () => {
  return (
    <>
      <div className="bg-background-secondary text-text-primary h-120 px-6" />
      <div className="flex justify-center">
        <div className="container max-w-screen-xl grid md:grid-cols-2 relative bottom-10 justify-center mx-6 gap-12">
          <div className="h-full col-span-2 flex flex-col bg-background-primary z-10 p-10 rounded-lg shadow-lg overflow-hidden">
            <h2 className="text-4xl font-bold mb-5 tracking-widest flex-none">
              Projects
            </h2>
            <p className="text-xl md:text-2xl ">
              Prototypes, Digital Products (Apps, Websites, SaaS solutions) and
              design systems which are visually pleasing, user-centric and easy
              to use.
            </p>
          </div>
          <div className="h-150 col-span-2 md:col-span-1 flex flex-col bg-blue-200 z-10 p-10 cursor-pointer transform transition duration-500 hover:scale-110 rounded-lg shadow-lg overflow-hidden">
            <p className="text-text-primary">BookingScape</p>
            <h3 className="text-3xl font-bold text-text-dark mb-3">
              Room management platform
            </h3>
            <a className="text-center bg-blue-500 w-24 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href="https://github.com/alexbota/bookingscape-api" target="_blank" rel="noreferrer">
              Check
            </a>
            <div className="w-150 my-10">
              <img src={work_item_1} alt="" />
            </div>
          </div>
          <div className="h-150 col-span-2 md:col-span-1 flex flex-col bg-purple-500 z-10 p-10 cursor-pointer transform transition duration-500 hover:scale-110 rounded-lg shadow-lg overflow-hidden">
            <p className="text-text-primary">Stonks</p>
            <h3 className="text-3xl font-bold text-text-dark object-contain mb-3">
              Investment simulator
            </h3>
            <a className="text-center bg-blue-500 w-24 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href="https://github.com/alexbota/stonks" target="_blank" rel="noreferrer">
              Check
            </a>
            <div className="w-150 my-10">
              <img src={work_item_2} alt="" />
            </div>
          </div>
          <div className="h-150 col-span-2 md:col-span-1 flex flex-col bg-gray-400 z-10 p-10 cursor-pointer transform transition duration-500 hover:scale-110 rounded-lg shadow-lg overflow-hidden">
            <p className="text-text-primary">Searchful</p>
            <h3 className="text-3xl font-bold text-text-dark object-contain mb-3">
              Utility Web App for Components Searching
            </h3>
            <button className="text-center bg-gray-200 w-24 text-white font-bold py-2 px-4 rounded-full">
              Soon
            </button>
            <div className="w-120 mt-10">
              <img src={work_item_3} alt="" />
            </div>
          </div>
          <div className="h-150 col-span-2 md:col-span-1 flex flex-col bg-blue-300 z-10 p-10 cursor-pointer transform transition duration-500 hover:scale-110 rounded-lg shadow-lg overflow-hidden">
            <div className="w-120 my-10">
              <img src={work_item_4} alt="" />
            </div>
            <p className="text-text-primary">Statista</p>
            <h3 className="text-3xl font-bold text-text-dark object-contain mb-3">
              Data Analysis Dashboard
            </h3>
            <button className="text-center bg-gray-200 w-24 text-white font-bold py-2 px-4 rounded-full">
              Soon
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
