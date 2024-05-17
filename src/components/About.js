import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="w-full py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Profile Image */}
          <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg flex-shrink-0">
            <img
              src="/image.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Profile Details */}
          <div className="flex flex-col justify-center max-w-md md:max-w-none">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="mb-4">
              Md Danish Akhtar is a highly skilled .NET Full Stack Developer with extensive
              experience in building robust web applications. He possesses expertise in utilizing
              a wide array of technologies including .NET Core, .NET Core Web API, React, Redux, SQL Server, C#, HTML, CSS, Bootstrap, Tailwind CSS, and Azure technologies. With a passion for delivering high-quality solutions, Danish excels in both frontend and backend development, ensuring seamless integration and superior user experiences.
            </p>
            <p>
              Md Danish Akhtar is a results-oriented .NET Full Stack Developer with over 5 years of experience
              in designing, developing, and deploying scalable web applications. Proficient in leveraging cutting-edge technologies, Danish has a proven track record of delivering efficient solutions tailored to meet the unique needs of clients across various industries. With a keen eye for detail and a commitment to staying updated with the latest trends in technology, Danish consistently delivers projects on time and within budget, exceeding client expectations.
            </p>
            <div className="flex items-center space-x-4 my-4">
              <a
                href="https://github.com/mddanish867"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
