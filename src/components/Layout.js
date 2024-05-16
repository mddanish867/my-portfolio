import React from 'react';

const Layout = ({ children, darkMode, toggleDarkMode }) => {
  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {children}
    </div>
  );
};

export default Layout;
