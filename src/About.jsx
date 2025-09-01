import React from "react";
 import { useEffect, useState } from 'react';
 import AOS from "aos";
import "aos/dist/aos.css";
   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
   import { faFacebookF, faTwitter, faGooglePlusG, faGithub, faTiktok, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
 import "./About.css"; 
import profileImg from "../IMG/My-image.png"; // include the correct file extension

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section id="about" className="section">
    <div className="about-container" data-aos="fade-up" data-aos-delay="100">
      <div className="about-image">
         <img src={profileImg} alt="Andrews Naworagyere" /> 
      </div>
      <div className="about-content">
        <h2>ABOUT ME.</h2>
        <h4>UI/UX Designer & Web Developer</h4>
        <p>
          I'm <strong>Andrews Naworagyere</strong> a passionate UI/UX designer and web developer with a keen eye for creating clean, user-friendly, and visually appealing digital experiences.
        </p>
        <p>
          I specialize in turning complex ideas into elegant and functional interfaces that not only look great but also deliver seamless user interactions. My approach combines creativity with modern web technologies to design and build websites that are fast, responsive, and optimized for user engagement.When I’m not designing or coding, I’m exploring the latest trends in design systems, improving my development workflow, and learning new technologies to stay ahead in this ever-evolving industry.
        </p>
        <div className="social-icons">
           {/* <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-google-plus-g"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>  */}
            {/* <a href=""> <FontAwesomeIcon className="fab fa-facebook-f" icon={faFacebookF} /> </a> */}
             <a href="http://www.tiktok.com/@waynecodes" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fab fa-tiktok" icon={faTiktok} /> </a>
             <a href="http://www.x.com/@ANaworagyere" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fab fa-twitter" icon={faTwitter} /> </a>
             {/* <a href=""><FontAwesomeIcon className="fab fa-google-plus-g" icon={faGooglePlusG} /> </a> */}
             <a href="https://www.linkedin.com/in/andrews-naworagyere-b917b6345" target="_blank" rel="noopener noreferrer">
                 <FontAwesomeIcon className="fab fa-linkedin" icon={faLinkedin} />
            </a>
             <a href="https://github.com/AN112233-creator?tab=repositories" target="_blank"><FontAwesomeIcon className="fab fa-github" icon={faGithub} /> </a>
        </div>
        <button className="cv-button" onClick={() => {
    const link = document.createElement("a");
    link.href = "/Andrews_CV.pdf";
    link.download = "Andrews_CV.pdf";
    link.click();
  }}>DOWNLOAD CV</button>
      </div>
    </div>
    </section>
  );
};

export default About;
