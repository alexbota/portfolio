import React from 'react';
import hero from '../../images/hero.jpeg'

const Hero = () => {
  return (
    <div className="mx-6">
      <div className="container mx-auto max-w-screen-lg mt-14 md:mt-32 flex flex-col md:flex-row md:mt-0 items-center justify-center">
        <div className="max-w-2xl mb-12">
          <h1 className="text-xl md:text-2xl mb-2 text-main-primary">
            Better design better experiences.
          </h1>
          <h2 className="text-4xl font-bold mb-4 tracking-widest text-text-dark">
            UX/UI/Product Designer &{' '}
            <span className="whitespace-nowrap">Front-end</span> developer
          </h2>
          <p className="text-xl md:text-2xl font-medium text-text-secondary mb-7">
            I specialize in helping businesses integrate design and technology
            to better serve customers, extend online reach, and increase
            revenue.
          </p>
          <button
            onClick={() => document.getElementById('footer').scrollIntoView()}
            className="text-center bg-gradient-to-r from-blue-700 to-main-primary hover:from-main-primary hover:to-blue-700 text-white font-bold py-2 px-4 rounded-full md:text-lg md:py-3 md:px-5"
          >
            Get in touch
          </button>
        </div>
        <div className="h-28">
          <img className="rounded" src={hero} alt=""/>
        </div>
      </div>
    </div>
  );
};
export default Hero;
