import React from 'react';
import client from '../../resources/client.png';

const ClientSection = () => {
  return (
    <div className="my-10 flex flex-col justify-center items-center mx-5">
      <h2 className="text-4xl text-text-dark font-bold tracking-wider mb-10">
        Clients talking
      </h2>
      <div className="flex flex-col items-center">
        <p className="text-xl text-text-secondary max-w-5xl mb-10 text-center">
          Alex is a genius in his field. I have worked with several app
          designers in the past, and Ivo's grasp of user experience is top
          notch. He took my general concepts and delivered to me clean,
          intuitive, attractive designs that also had personality behind them.
          He's responsive and honest, and I couldn't recommend him more.
        </p>
        <div className="flex items-center justify-center mb-10">
          <img className="w-16 h-16 rounded-full mr-5" src={client} alt="" />
          <div>
            <p className="text-2xl font-medium tracking-tighter text-text-dark">
              Alex Bota
            </p>
            <p className="text-lg tracking-tighter text-text-secondary">
              Founder at Microsoft Ink.
            </p>
          </div>
        </div>
      </div>
      <ol className="flex">
        <li className="h-1 w-10 bg-text-dark mx-1 cursor-pointer" />
        <li className="h-1 w-10 bg-text-dark mx-1 cursor-pointer" />
        <li className="h-1 w-10 bg-text-dark mx-1 cursor-pointer" />
      </ol>
    </div>
  );
};

export default ClientSection;
