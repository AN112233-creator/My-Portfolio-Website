/* import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from './BlogCard';
import { motion } from 'framer-motion';
import '../blog.css'

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=thepracticaldev&per_page=3')
      .then(res => res.json())
      .then(data => setBlogs(data.slice(0, 3)))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="blog-container">
      <h2 className="blog-header">Latest News</h2>
      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <BlogCard blog={blog} />
          </motion.div>
        ))}
      </div>
      <button onClick={() => navigate('/blogs')} className="view-more">View More</button>
    </section>
  );
};

export default BlogList;
 */

// BlogList.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../blog.css';

const blogs = [
  { id: 1, title: 'Understanding React Hooks', snippet: 'Hooks let you use state and other React features...', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Styling in React', snippet: 'CSS in JS vs traditional CSS...', image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'React Router Deep Dive', snippet: 'How to structure routes efficiently...', image: 'https://via.placeholder.com/150' },
];

const BlogList = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [direction, setDirection] = useState('left');

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(prev => (prev === 'left' ? 'right' : 'left'));
      setVisibleIndex(prev => (prev + 1) % blogs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    hiddenLeft: { x: '-100%', opacity: 0 },
    hiddenRight: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="blog-list">
      <motion.div
        className="blog-card"
        key={blogs[visibleIndex].id}
        initial={direction === 'left' ? 'hiddenLeft' : 'hiddenRight'}
        animate="visible"
        exit={direction === 'left' ? 'hiddenRight' : 'hiddenLeft'}
        variants={slideVariants}
        transition={{ duration: 0.6 }}
      >
        <img src={blogs[visibleIndex].image} alt={blogs[visibleIndex].title} />
        <h3>{blogs[visibleIndex].title}</h3>
        <p>{blogs[visibleIndex].snippet}</p>
        <Link to={`/blog/${blogs[visibleIndex].id}`}>Read More</Link>
      </motion.div>

      <Link className="view-more" to="/blog">View More</Link>
    </div>
  );
};

export default BlogList;
