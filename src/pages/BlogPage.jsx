import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import '../blog.css';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=thepracticaldev&per_page=6')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="blog-container">
      <h2 className="blog-header">All Blogs</h2>
      <div className="blog-cards">
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
