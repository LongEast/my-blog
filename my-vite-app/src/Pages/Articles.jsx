import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogForm from './Blogs/BlogForm';
import BlogList from './Blogs/BlogList';

const Articles = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/blogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const addBlog = async (blog) => {
    try {
      const response = await axios.post('http://localhost:5000/api/blogs', blog);
      setBlogs([...blogs, response.data]);
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  return (
    <div>
      <h1>My Blog</h1>
      <BlogForm addBlog={addBlog} />
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Articles;