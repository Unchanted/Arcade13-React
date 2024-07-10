// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Education Trust</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-300">About Us</Link></li>
          <li><Link to="/programs" className="text-white hover:text-gray-300">Programs</Link></li>
          <li><Link to="/events" className="text-white hover:text-gray-300">Events</Link></li>
          <li><Link to="/donate" className="text-white hover:text-gray-300">Donate</Link></li>
          <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
