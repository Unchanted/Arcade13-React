// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-xl font-bold">Education Trust</a>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="/about" className="text-white hover:text-gray-300">About Us</a></li>
          <li><a href="/programs" className="text-white hover:text-gray-300">Programs</a></li>
          <li><a href="/events" className="text-white hover:text-gray-300">Events</a></li>
          <li><a href="/donate" className="text-white hover:text-gray-300">Donate</a></li>
          <li><a href="/contact" className="text-white hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
