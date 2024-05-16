import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = ({ darkMode, projects }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="projects" className="w-full py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Projects</h2>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search projects"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-3 border rounded w-full focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              <div className="mb-4">
                <img src={project.imageUrl} alt={project.title} className="w-full h-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              <div className="flex mt-4">
                <Link to={`/projectdetails/${project.id}`} className="text-blue-600 hover:underline focus:outline-none">View Details</Link>
              </div>
            </div>
          ))}
          {filteredProjects.length === 0 && <p>No projects found.</p>}
        </div>
      </div>
    </section>
  );
};

export default Projects;
