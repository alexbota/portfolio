import work_item_1 from '../../resources/work_item_1.png';
import work_item_2 from '../../resources/work_item_2.png';
import work_item_3 from '../../resources/work_item_3.png';
import work_item_4 from '../../resources/work_item_4.png';
import React from 'react';

const WorkSection = () => {
  return (
    <>
      <div className="bg-background-intermediary text-text-primary text-center h-110 px-10 md:mx-8">
        <h2 className="text-3xl md:text-4xl font-bold pt-32 mb-5 tracking-widest">
          Projects
        </h2>
        <div className="flex justify-center">
          <p className="text-xl md:text-2xl max-w-2xl text-center">
            Prototypes, Digital Products (Apps, Websites, SaaS solutions) and
            design systems which are visually pleasing, user-centric and easy to
            use.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="container grid md:grid-cols-2 relative bottom-10 justify-center mx-14 gap-12">
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

export default WorkSection;
