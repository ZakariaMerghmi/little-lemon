import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav
      className='w-full shadow   flex flex-col lg:flex-row justify-around items-center px-6 py-4'
      role="navigation"
      aria-label="Main Navigation"
    >
      <img src="logo.png" alt="logo" className='w-[20%] h-[80%]'/>
      <ul className='flex gap-4 text-green-800'>
        <li><Link to="/" className=' !text-green-800'>Home</Link></li>
        <li><Link to="/Booking" className="!text-green-800">Booking</Link></li>
        <li><Link to="/OnlineMenu" className="!text-green-800">Online Menu</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
