import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav
      className='w-full shadow bg-gray-200 text-white flex justify-around items-center px-6 py-4'
      role="navigation"
      aria-label="Main Navigation"
    >
      <h1 className="text-lg font-bold relative right-32">Little Lemon</h1>
      <ul className='flex gap-4'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Booking">Booking</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
