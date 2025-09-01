import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.cover_image || '/default.jpg'} alt={blog.title} className="blog-img" />
      <div className="blog-content">
        <h3>{blog.title}</h3>
        <p>{blog.description}</p>
        <div className="blog-meta">
          <Link to={`/blog/${blog.id}`}>Read More</Link>
          <span>{new Date(blog.published_at).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
