// BlogDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = ({ blogs }) => {
  const { blogId } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(blogId));

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <section className="w-full py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
        <p className="text-lg mb-8">{blog.content}</p>
      </div>
    </section>
  );
};

export default BlogDetails;
