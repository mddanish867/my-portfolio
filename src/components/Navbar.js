import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the hamburger menu

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    navigate('/');
  };
  
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-100 dark:bg-gray-900 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-bold cursor-pointer" onClick={handleClick}>
          <span className={darkMode ? "text-white" : "text-gray-900"}>Danish</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className="text-gray-900 dark:text-gray-100" activeClassName="text-blue-500">Home</NavLink>
          <NavLink to="/about" className="text-gray-900 dark:text-gray-100" activeClassName="text-blue-500">About</NavLink>
          <NavLink to="/skills" className="text-gray-900 dark:text-gray-100" activeClassName="text-blue-500">Skills</NavLink>
          <NavLink to="/projects" className="text-gray-900 dark:text-gray-100" activeClassName="text-blue-500">Projects</NavLink>
          <NavLink to="/blog" className="text-gray-900 dark:text-gray-100" activeClassName="text-blue-500">Blog</NavLink>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={handleToggleMenu} className="text-gray-900 dark:text-gray-100 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <label className="hidden md:flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="sr-only"
            />
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div
              className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
                darkMode ? 'transform translate-x-6' : ''
              }`}
            ></div>
          </div>
        </label>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900 py-4 px-4">
          <NavLink to="/" className="block text-gray-900 dark:text-gray-100 mb-2" onClick={handleToggleMenu}>Home</NavLink>
          <NavLink to="/about" className="block text-gray-900 dark:text-gray-100 mb-2" onClick={handleToggleMenu}>About</NavLink>
          <NavLink to="/skills" className="block text-gray-900 dark:text-gray-100 mb-2" onClick={handleToggleMenu}>Skills</NavLink>
          <NavLink to="/projects" className="block text-gray-900 dark:text-gray-100 mb-2" onClick={handleToggleMenu}>Projects</NavLink>
          <NavLink to="/blog" className="block text-gray-900 dark:text-gray-100 mb-2" onClick={handleToggleMenu}>Blog</NavLink>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
                className="sr-only"
              />
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div
                className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
                  darkMode ? 'transform translate-x-6' : ''
                }`}
              ></div>
            </div>
          </label>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
