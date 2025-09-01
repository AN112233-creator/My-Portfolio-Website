
import React, { useEffect } from "react";
import "./works.css";
import { FaSearch } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import WebApplication from "../IMG/web-application.jpg";
import webDesign from "../IMG/web-design.jpg";
import Image1 from "../IMG/Image-1.jpg";
import Image2 from "../IMG/Image-2.jpg";
import Image3 from "../IMG/Image-3.jpg";
import Image4 from "../IMG/image-4.jpg";
import Image7 from "../IMG/image-7.jpg";
import Image8 from "../IMG/image-8.jpg";
import Image9 from "../IMG/app.jpg";
import Image10 from "../IMG/web.jpg";

const portfolioItems = [
  {
    title: "WEB SITE WITH REACT",
    image: Image9,
    link: "https://an112233-creator.github.io/buildora-website/"
  },
  {
    title: "WEB SITE WITH REACT",
    image: Image9,
    link: "https://an112233-creator.github.io/buildora-website/"
  },
  {
    title: "WEB APP WITH HTML/CSS/JS",
    image: Image2,
    link: "https://an112233-creator.github.io/REST/"
  },
  {
    title: "AMAZON CLONE WITH REACT",
    image: Image4,
    link: "https://an112233-creator.github.io/My-First-React-cart_app/"
  },
  {
    title: "AMAZON CLONE WITH REACT",
    image: Image4,
    link: "https://an112233-creator.github.io/My-First-React-cart_app/"
  },
   {
    title: "DESIGN",
    image: Image2,
  },
  /* {
    title: "UI/UX",
    image: Image9,
  },
  {
    title: "GRAPHICS",
    image: Image10,
  },  */
];

const Works = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="sections" id="works">
    <div className="works-section" id="works">
      <h5 className="section-subtitle">PORTFOLIO</h5>
      <h2 className="section-title">WORK I HAVE DONE</h2>

      <div className="filter-buttons">
        <button>ALL</button>
        <button>WEB DESIGN</button>
        <button>APPLICATIONS</button>
        <button>DEVELOPMENT</button>
      </div>

      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <a href={item.link} target="_blank"
            rel="noopener noreferrer" className="link-sites" key={index} >
          <div className="portfolio-card" data-aos="fade-up">
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <h4 className="title">{item.title}</h4>
              {/*  <FaSearch className="search-icon" />  */}
            </div>
          </div>
          </a>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Works;
