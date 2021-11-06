import React from 'react';
import { useRive } from 'rive-react';

function Laptop() {
  const params = {
    src: 'new_file.riv',
    autoplay: false,
  };

  const { RiveComponent, rive } = useRive(params);

  function onMouseEnter() {
    if (rive) {
      rive.play();
    }
  }

  function onMouseLeave() {
    if (rive) {
      rive.pause();
    }
  }

  return (
    <RiveComponent onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
  );
}

const Hero = () => {
  return (
    <>
      <div className="mx-8 mt-14 md:mt-32 flex flex-col md:flex-row md:mb-16 md:mt-0 items-center justify-center">
        <div className="text-center md:text-left max-w-lg flex-grow-0">
          <h1 className="text-xl md:text-2xl mb-2 text-main-primary">
            Better design better experiences.
          </h1>
          <h2 className="text-3xl font-bold mb-4 tracking-wide text-text-dark">
            Freelance UX/UI/Product Designer & Front-end developer
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary mb-7">
            I specialize in helping businesses integrate design and technology
            to better serve customers, extend online reach, and increase
            revenue.
          </p>
          <button className="text-center bg-main-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full md:text-lg md:py-3 md:px-5">
            View my work
          </button>
        </div>
        <div className="h-96 w-96 md:h-120 md:w-120 h z-10 relative top-40 -mt-40 md:static md:top-0 flex-grow-0">
          <Laptop />
        </div>
      </div>
    </>
  );
};
export default Hero;
