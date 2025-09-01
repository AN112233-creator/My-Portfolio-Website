import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dev.to/api/articles/${id}`)
      .then(res => res.json())
      .then(data => setBlog(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="blog-detail">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>
      <h1>{blog.title}</h1>
      <img src={blog.cover_image || '/default.jpg'} alt={blog.title} />
      <div dangerouslySetInnerHTML={{ __html: blog.body_html }} />
    </div>
  );
};

 export default BlogDetail; 
