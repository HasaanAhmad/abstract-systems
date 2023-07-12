import React from 'react';
import logo from '../images/abstract-systems-logo.jpg';
import OldButton from './OldButton';

const Navbar = () => {
  return (
    <div className='flex items-center justify-around h-16 bg-secondary drop-shadow-lg'>
      <div>
        <a href="#">
          <img className='h-12 rounded-[50px]' src={logo} alt="Abstract Systems" />
        </a>
      </div>

      <div className='p-3'>
        <ul className='flex list-none items-center space-x-6'>
          <li className='py-2 px-4 text-white font-barlow-condensed tracking-widest'>Home</li>
          <li className='py-2 px-4 text-white font-barlow-condensed tracking-widest'>Services</li>
          <li className='py-2 px-4 text-white font-barlow-condensed tracking-widest'>Projects</li>
          <li className='py-2 px-4 text-white font-barlow-condensed tracking-widest'>About</li>
        </ul>
      </div>

      <div>
        <OldButton text='Contact' />
      </div>
    </div>
  );
};

export default Navbar;
