import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectDetails = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find(project => project.id === parseInt(projectId));

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <section className="w-full py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center mb-8">
          <img src={project.imageUrl} alt={project.title} className="w-full h-auto max-h-96 rounded-lg shadow-md" />
        </div>
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="text-lg mb-8">{project.description}</p>
        <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:outline-none">Visit Website</a>
      </div>
    </section>
  );
};

ProjectDetails.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectDetails;
