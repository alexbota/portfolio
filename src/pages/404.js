import * as React from 'react';
import Layout from '../hoc/Layout';
import construction from '../images/construction.svg';
import { navigate } from 'gatsby';

const NotFoundPage = () => {
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 h-3/6 flex flex-col items-center justify-center mb-20">
        <img className="h-110 w-110" src={construction} alt="" />
        <h1 className="text-4xl font-bold text-background-intermediary mb-6 text-center">
          Sorry, this section is under construction.
        </h1>
        <button
          onClick={handleClick}
          className="text-center bg-main-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full md:text-lg md:py-3 md:px-5"
        >
          Head back
        </button>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
