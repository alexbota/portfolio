import service_item_1 from '../../resources/service_item_1.svg';
import service_item_2 from '../../resources/service_item_2.svg';
import service_item_3 from '../../resources/service_item_3.svg';
import React from 'react';

const ServiceSection = () => {
  return (
    <div className="bg-background-secondary flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold pt-14 mt-14 mb-24 text-text-primary tracking-wide text-center tracking-widest">
        Services Spectrum
      </h2>
      <div className="grid md:grid-cols-3 text-text-primary gap-6 mx-10 mb-32">
        <div className="flex flex-col max-w-sm">
          <div className="h-64 w-64 flex self-center">
            <img src={service_item_1} alt="" />
          </div>
          <h4 className="text-2xl font-medium tracking-widest mb-5">
            UI/UX Design
          </h4>
          <p className="text-lg">
            Design involves planning and iterating a site's structure layout.
            Once the proper information architecture is in place, I design the
            visual layer to creat an optima user experience.
          </p>
        </div>
        <div className="flex flex-col max-w-sm">
          <div className="h-64 w-64 flex self-center">
            <img src={service_item_2} alt="" />
          </div>
          <h4 className="text-2xl font-medium tracking-widest mb-5">
            Web Apps and Corporate Sites
          </h4>
          <p className="text-lg">
            Create transformative web based digital products with me. Backend,
            data, cloud and frontend. I listen to and prototype your ides.
          </p>
        </div>
        <div className="flex flex-col max-w-sm">
          <div className="h-64 w-64 flex self-center">
            <img src={service_item_3} alt="" />
          </div>
          <h4 className="text-2xl font-medium tracking-widest mb-5">
            Front End Development
          </h4>
          <p className="text-lg">
            I'll help you to bridge the gap between design and development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
