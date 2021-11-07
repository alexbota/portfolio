import work_item_1 from '../../images/work_item_1.png';
import work_item_2 from '../../images/work_item_2.png';
import work_item_3 from '../../images/work_item_3.png';
import work_item_4 from '../../images/work_item_4.png';
import React from 'react';

const Work = () => {
  return (
    <>
      <div className="bg-background-secondary text-text-primary h-110 px-6">
        <div className="container mx-auto pt-32 max-w-screen-lg flex flex-col md:flex-row justify-between">
          <h2 className="text-4xl font-bold mb-5 tracking-widest flex-none">
            Projects
          </h2>
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl ">
              Prototypes, Digital Products (Apps, Websites, SaaS solutions) and
              design systems which are visually pleasing, user-centric and easy
              to use.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="container max-w-screen-xl grid md:grid-cols-2 relative bottom-10 justify-center mx-6 gap-12">
          <div className="h-150 flex flex-col bg-green-500 z-10 p-10 cursor-pointer transform transition duration-500 hover:scale-110 rounded-lg shadow-lg overflow-hidden">
            <p className="text-text-primary">Starbucks</p>
            <h3 className="text-3xl font-bold text-text-dark">
              Customer Service App & Ecommerce
            </h3>
            <div className="w-150 my-10">
              <img src={work_item_1} alt="" />
            </div>
          </div>
          <div className="h-150 flex flex-col bg-purple-500 z-10 p-10 cursor-pointer transform transition duration-500 hover:scale-110 rounded-lg shadow-lg overflow-hidden">
            <div className="w-150">
              <img src={work_item_2} alt="" />
            </div>
            <p className="text-text-primary">InvestPal</p>
            <h3 className="text-3xl font-bold text-text-dark object-contain">
              Investment planner Saas
            </h3>
          </div>
          <div className="h-150 flex flex-col bg-gray-400 z-10 p-10 cursor-pointer transform transition duration-500 hover:scale-110 rounded-lg shadow-lg overflow-hidden">
            <p className="text-text-primary">Searchful</p>
            <h3 className="text-3xl font-bold text-text-dark object-contain">
              Utility Web App for Components Searching
            </h3>
            <div className="w-120 mt-10">
              <img src={work_item_3} alt="" />
            </div>
          </div>
          <div className="h-150 flex flex-col bg-blue-300 z-10 p-10 cursor-pointer transform transition duration-500 hover:scale-110 rounded-lg shadow-lg overflow-hidden">
            <div className="w-120 my-10">
              <img src={work_item_4} alt="" />
            </div>
            <p className="text-text-primary">Statista</p>
            <h3 className="text-3xl font-bold text-text-dark object-contain">
              Data Analysis Dashboard
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
