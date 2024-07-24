import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              
              <h1 className="lobster-regular text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500  font-bold ">Misha's Portfolio
              </h1>
             </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 poppins-regular ">
                <a href='/' className='poppins-regular  text-1xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500  font-bold'>Home</a>
                <a href='#about'className='poppins-regular  text-1xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500  font-bold'>About</a>
                <a href='#projects'className='poppins-regular  text-1xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500  font-bold'>Projects</a>
                <a href='#contact'className='poppins-regular  text-1xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500  font-bold'>Contact</a>
                <a href='https://mysha-tech-world.blogspot.com/'className='poppins-regular text-1xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500  font-bold'>Blog</a>
                </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path className={!isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                <path className={isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={isOpen ? 'block' : 'hidden'} md:hidden>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
