import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/log.jpg'; // Correct path after moving logo to src/assets

const Navbar = () => {
  return (
    <nav className="bg-pink-800 bg-opacity-25 fixed top-0 w-full z-50 p-0">
      <div className="container mx-auto flex justify-between items-center text-white py-4 px-6">
        {/* Brand Name and Logo */}
        <div className="flex items-center space-x-2 font-semibold text-lg cursor-pointer">
          <img src={logo} alt="LuxeWhisper Logo" className="w-8 h-8" /> {/* Adjust width and height as needed */}
          <Link to="home" spy={true} smooth={true} duration={500}>
            LuxeWhisper
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer font-semibold text-lg hover:text-indigo-400"
          >
            Home
          </Link>
          <Link
            to="products"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer font-semibold text-lg hover:text-indigo-400"
          >
            Products
          </Link>
          <Link
            to="footer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer font-semibold text-lg hover:text-indigo-400"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
