import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import About from './components/About';
import ProjectDetails from './components/ProjectDetails';  // Ensure this path is correct
import BlogDetails from './components/blogdetails';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of project 1.', imageUrl: 'https://via.placeholder.com/150', website: 'http://project1.com' },
    { id: 2, title: 'Project 2', description: 'Description of project 2.', imageUrl: 'https://via.placeholder.com/150', website: 'http://project2.com' },
    { id: 3, title: 'Project 3', description: 'Description of project 3.', imageUrl: 'https://via.placeholder.com/150', website: 'http://project3.com' },
    { id: 4, title: 'Project 4', description: 'Description of project 4.', imageUrl: 'https://via.placeholder.com/150', website: 'http://project4.com' }
  ];

  const blogPosts = [
    { id: 1, title: 'Blog Post 1', summary: 'Summary of blog post 1.' },
    { id: 2, title: 'Blog Post 2', summary: 'Summary of blog post 2.' },
  ]; 
  return (
    <BrowserRouter>
      <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/skills" element={<Skills darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} projects={projects} />} />
          <Route path="/projectdetails/:projectId" element={<ProjectDetails darkMode={darkMode} projects={projects} />} />
          <Route path="/blogdetails/:blogId" element={<BlogDetails darkMode={darkMode} blogs={blogPosts} />} />
          <Route path="/blog" element={<Blog darkMode={darkMode} blogPosts={blogPosts} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
