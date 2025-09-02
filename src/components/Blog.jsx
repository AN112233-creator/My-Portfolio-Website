// Blog.jsx
 import React from "react";
 import { useEffect, useState } from 'react';
 import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../blog.css";
import smartHome from "./images/Smart-home.jpg"
import sustainableHome from "./images/sustainable-const.jpg"
import BuildingReg from "./images/build-reg.jpg"
import woodFur from "./images/wood.jpg"
import affordableH from "./images/Afford-housing.jpg"
import challengeIndustry from "./images/challenges.jpg"
import ToolsSlider from "../slider.jsx";
import PushOutSlider from "../testimonial.jsx";

const blogs = [
  {
    id: 1,
    title: "Sustainable Construction",
    image: sustainableHome,
    description: "The Net Zero Series | An introduction to retrofits....",
    link:"https://www.buildpass.co.uk/blog/the-net-zero-series-an-introduction-to-retrofits/",
    PubDate: "2025-07-08"
   
  },
  {
    id: 2,
    title: "Smart Homes",
    image: smartHome,
    description: "Building a smart city? Then start with smart buildings...",
    link:"https://smartbuildingsmagazine.com/blog/building-a-smart-city-then-start-with-smart-buildings",
    PubDate: "2019-04-30"
  },
  {
    id: 3,
    title: "Building Regulations",
    image: BuildingReg,
    description: "What you need to know before you build...",
    link:"https://www.blackridgeresearch.com/blog/building-regulations-and-codes-in-construction-projects",
    PubDate: "2025-07-18"
    
  },
  {
    id: 4,
    title: "Interior Design Trends",
    image: woodFur,
    description: "All You Need To Know About Teak Wood Furniture...",
     link:"https://www.designcafe.com/blog/home-interiors/all-about-teak-wood-furniture/",
    PubDate: "2025-07-08"
  },
  {
    id: 5,
    title: "Affordable Housing",
    image: affordableH,
    description: "List Of Affordable Housing In Ghana with their Prices...",
    link:"https://blog.meqasa.com/list-of-affordable-housing-in-ghana/",
    PubDate: "2020-10-12"
  },
  {
    id: 6,
    title: "Construction Challenges",
    image: challengeIndustry,
    description: "Why Developers Are Struggling with Building Safety...",
    link:"https://www.letsbuild.com/blog/why-developers-are-struggling-with-building-safety-regulator-standards",
    PubDate: "2025-03-06"
  },
];



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Blog = () => {
  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  return (
   
    <section className="blog-section" id="blog">
  <h1>Blog</h1>
  <h2>Latest News</h2>

  <Carousel
    responsive={responsive}
    autoPlay
    autoPlaySpeed={3000}
    infinite
    arrows={false}
    showDots={false}
    containerClass="carousel-container"
  >
    {blogs.map((blog, index) => ( 
      <div className="blog-card" key={index} data-aos="fade-up"
            data-aos-delay={index * 100} >
        <img src={blog.image || '/fallback.jpg'} alt={blog.title} />
        <h3>{blog.title}</h3>
        <p>{blog.description?.slice(0, 100)}...</p>

        <div className="blog-footer">
          <span className="blog-date">
            {new Date(blog.PubDate).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </span>

          <a
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="read-more"
          >
            Read More
          </a>
        </div>
      </div>
    ))}
  </Carousel>

  <h1>Programming Languages</h1>
 
 <ToolsSlider/>

</section>




  );
};

export default Blog;
 

// Blog.jsx
/* import React, { useEffect, useState } from 'react';
import '../blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  
    useEffect(() => {
  fetch('https://newsdata.io/api/1/news?apikey=pub_64b747b866fe433f83129a7a99aaad70&q=construction&language=en')
    .then((res) => res.json())
    .then((data) => {
      if (data.results && Array.isArray(data.results)) {
        setBlogs(data.results.slice(0, 6)); // Show only first 6
        console.log('Fetched blogs:', data.results.slice(0, 6));
      } else {
        console.error('Unexpected API response:', data);
      }
    })
    .catch((err) => console.error('Fetch error:', err));
}, []); 

  return (
    <div className="blog-container">
      {blogs.map((blog, index) => (
        <div className="blog-card" key={index}>
          <img src={blog.image_url || '/fallback.jpg'} alt={blog.title} />
          <h3>{blog.title}</h3>
          <p>{blog.description?.slice(0, 100)}...</p>
          <a href={blog.link} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default Blog; */

/* import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://newsdata.io/api/1/news?apikey=pub_64b747b866fe433f83129a7a99aaad70&q=construction&language=en')
      .then((res) => res.json())
      .then((data) => {
        if (data.results && Array.isArray(data.results)) {
          setBlogs(data.results.slice(0, 6)); // Show only first 6
          console.log('Fetched blogs:', data.results.slice(0, 6));
        } else {
          console.error('Unexpected API response:', data);
        }
      })
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="blog-container">
      <h2 className="text-2xl font-bold mb-4">Latest Construction Blogs</h2>

      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        arrows={false}
        showDots={false}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        containerClass="carousel-container"
        itemClass="px-2"
      >
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img
              src={blog.image_url || '/fallback.jpg'}
              alt={blog.title}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
            <p className="text-sm text-gray-700 mt-1">
              {blog.description?.slice(0, 100)}...
            </p>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 mt-2 inline-block"
            >
              Read more →
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Blog; */

// src/components/Blog.jsx
/* import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(
      'https://newsdata.io/api/1/news?apikey=pub_64b747b866fe433f83129a7a99aaad70&q=construction&language=en'
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results && Array.isArray(data.results)) {
          setBlogs(data.results.slice(0, 6));
           console.log('Fetched blogs:', data.results.slice(0, 6)); 
        }  else {
          console.error('Unexpected API response:', data);
        } 
      })
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  useEffect(() => {
  console.log('Updated blogs:', blogs);
}, [blogs]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="blog-container px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Latest Construction Blogs</h2>

      {blogs.length === 0 ? (
        <p>Loading blogs...</p>
      ) : (
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {blogs.map((blog, index) => (
            <div className="blog-card p-4" key={index}>
              <img
                src={blog.image_url || '/fallback.jpg'}
                alt={blog.title || 'No title'}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{blog.title || 'Untitled Blog'}</h3>
              <p className="text-sm mt-1">
                {blog.description ? blog.description.slice(0, 100) + '...' : 'No description available.'}
              </p>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-2 block"
              >
                Read more
              </a>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Blog;
 */

/* GOOD RENDER
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../blog.css'; // Make sure this exists or comment out

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1440 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(
      'https://newsdata.io/api/1/news?apikey=pub_64b747b866fe433f83129a7a99aaad70&q=construction&language=en'
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results && Array.isArray(data.results)) {
          setBlogs(data.results.slice(0, 6));
        } else {
          console.error('Unexpected API response:', data);
        }
      })
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  useEffect(() => {
    console.log('Updated blogs:', blogs);
  }, [blogs]);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Latest Construction Blogs</h2>

      {blogs.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Loading blogs...</p>
      ) : (
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
          {blogs.map((blog, index) => (
            <div
              key={index}
              style={{
                background: '#fff',
                borderRadius: '10px',
                padding: '15px',
                margin: '10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                height: '100%',
              }}
            >
              <img
                src={blog.image_url || '/fallback.jpg'}
                alt={blog.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <h3 style={{ marginTop: '10px', fontSize: '18px' }}>{blog.title}</h3>
              <p style={{ fontSize: '14px' }}>
                {blog.description ? blog.description.slice(0, 100) + '...' : 'No description'}
              </p>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#007bff', fontSize: '14px' }}
              >
                Read more
              </a>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Blog; */

