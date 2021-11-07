import React from 'react';
import Carousel from '../Carousel';

const Client = () => {
  return (
    <div className="my-14 flex flex-col justify-center items-center mx-6">
      <h2 className="text-4xl text-text-dark font-bold tracking-widest mb-10">
        Clients talking
      </h2>
      <Carousel />
    </div>
  );
};

export default Client;
