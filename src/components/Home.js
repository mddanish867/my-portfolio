import React from 'react';

const Home = () => {
  const handleGetInTouch = () => {
    window.location.href = 'mailto:mddanish867@gmail.com';
  };

  return (
    <section id="home" className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20">
      <div className="w-full text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Hello, I'm Md Danish Akhtar</h1>
        <p className="text-xl mb-8">I'm a Full-Stack Developer specialized in building exceptional digital experiences.</p>
        <button onClick={handleGetInTouch} className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Get in Touch</span>
          </span>
          <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </button>
      </div>
    </section>
  );
};

export default Home;
