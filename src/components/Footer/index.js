import React from 'react';
import Logo from '../../images/Logo.svg';
import Link from 'gatsby-link';

const Footer = () => {
  return (
    <div
      id="footer"
      className="px-6 pt-14 lg:pt-32 pb-36 lg:pb-60 bg-background-secondary text-text-primary"
    >
      <div className="container mx-auto lg:flex lg:justify-between lg:max-w-screen-xl">
        <div className="flex items-start">
          <img className="w-6 mr-4" src={Logo} alt="" />
          <div className="font-medium">
            <p>Alex Bota</p>
            <p className="text-gray-400">passionate web developer.</p>
          </div>
        </div>
        <span className="block h-px w-full bg-background-intermediary my-4 lg:hidden" />
        <div className="ml-10 lg:ml-0">
          <h4 className="text-3xl font-bold mb-5">Sitemap</h4>
          <ul className="font-medium text-xl">
            <li className="cursor-pointer hover:text-gray-400 transition duration-500 ease-in-out">
              <Link to="/">Profile</Link>
            </li>
            <li className="cursor-pointer text-background-intermediary">
              Work
            </li>
            <li className="cursor-pointer text-background-intermediary">
              Insights
            </li>
            <li className="cursor-pointer text-background-intermediary">
              Contact
            </li>
          </ul>
        </div>
        <span className="block h-px w-full bg-background-intermediary my-4 lg:hidden" />
        <div className="ml-10 lg:ml-0">
          <h4 className="text-3xl font-bold mb-5">Social Networks</h4>
          <ul className="font-medium text-xl">
            <li className="cursor-pointer hover:text-gray-400 transition duration-500 ease-in-out">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/alexbota/"
              >
                LinkedIn
              </a>
            </li>
            <li className="cursor-pointer hover:text-gray-400 transition duration-500 ease-in-out">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/alexbota"
              >
                Github
              </a>
            </li>
            <li className="cursor-pointer hover:text-gray-400 transition duration-500 ease-in-out">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/vladalexbota"
              >
                Twitter
              </a>
            </li>
            <li className="cursor-pointer hover:text-gray-400 transition duration-500 ease-in-out">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dev.to/alexbota"
              >
                Dev
              </a>
            </li>
          </ul>
        </div>
        <span className="block h-px w-full bg-background-intermediary my-4 lg:hidden" />
        <div className="ml-10 lg:ml-0">
          <h4 className="text-3xl font-bold mb-5">Legal</h4>
          <ul className="font-medium text-xl">
            <li className="cursor-pointer text-background-intermediary">
              Privacy Policy
            </li>
          </ul>
        </div>
        <span className="block h-px w-full bg-background-intermediary my-4 lg:hidden" />
        <div className="ml-10 lg:ml-0">
          <ul className="font-medium text-xl">
            <li className="cursor-pointer mb-5">20131 Milan, Italy</li>
            <li className="cursor-pointer hover:text-gray-400 transition duration-500 ease-in-out">
              <a href="mailto:info@alexbota.tech">info@alexbota.tech</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
