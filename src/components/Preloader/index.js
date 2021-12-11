import React from 'react';
import Logo from '../../images/Logo.svg';
import { Progressbar } from './styled';

const Preloader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="mb-10">
        <div className="h-20 w-fit flex flex-row">
          <img className="mr-3" src={Logo} alt="logo" />
          <div className="flex flex-col justify-between">
            <p className="text-gray-400">Interactive developer</p>
            <h1 className="text-5xl font-bold">Alex Bota</h1>
          </div>
        </div>
        <div className="absolute left-0 h-2 w-full bg-gray-300 rounded overflow-hidden">
          <Progressbar />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
