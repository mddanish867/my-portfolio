import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const routes = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/blog', label: 'Blog' },
];

const NavLinks = ({ onClick, isMobile = false }) => (
  <>
    {routes.map(({ path, label }) => (
      <NavLink
        key={path}
        to={path}
        className={({ isActive }) =>
          `${isActive ? 'text-blue-500' : 'text-gray-900 dark:text-gray-100'} ${
            isMobile ? 'block mb-2' : 'inline-block'
          }`
        }
        onClick={onClick}
      >
        {label}
      </NavLink>
    ))}
  </>
);

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => (
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
);

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleMenu = () => setIsOpen((prev) => !prev);
  const handleNavigateHome = () => navigate('/');

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-100 dark:bg-gray-900 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div
          className="text-xl font-bold cursor-pointer"
          onClick={handleNavigateHome}
        >
          <span className={darkMode ? 'text-white' : 'text-gray-900'}>Danish</span>
        </div>

        <div className="hidden md:flex space-x-4">
          <NavLinks />
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={handleToggleMenu}
            className="text-gray-900 dark:text-gray-100 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900 py-4 px-4">
          <NavLinks onClick={handleToggleMenu} isMobile />
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;