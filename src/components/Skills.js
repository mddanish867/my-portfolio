import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare  } from 'react-icons/fa';
import { SiDotnet, SiMicrosoftazure } from 'react-icons/si';

const Skills = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const skillsData = [
    { name: '.NET', icon: <SiDotnet className="text-purple-600" /> },
    { name: 'Azure', icon: <SiMicrosoftazure className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="text-blue-500" /> },  
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
    
  ];

  const filteredSkills = skillsData.filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="skills" className={`w-full py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'} text-white`}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>

        <input
          type="text"
          placeholder="Search skills"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border rounded w-full focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-4">
          {filteredSkills.map((skill, index) => (
            <div key={index} className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 flex flex-col items-center justify-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-bold">{skill.name}</h3>
            </div>
          ))}
          {filteredSkills.length === 0 && <p className="col-span-full text-center">No skills found.</p>}
        </div>
      </div>
    </section>
  );
};

export default Skills;
