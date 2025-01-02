import React from 'react';

const BlogItem = ({ blog }) => {
  return (
    <div className="blog-item">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogItem;