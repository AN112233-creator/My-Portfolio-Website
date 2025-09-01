import React from 'react';
import { useEffect, useState } from 'react';
import './Home.css'
import Navbar from './navbar.jsx';


const items = [
  "Designing UI",
  "Building Websites",
  "IT Support",
  "Solving Problems"
];

const TYPING_SPEED = 30;
const ERASING_SPEED = 30;
const DELAY_BETWEEN = 2000;

const Home = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    let typingTimeout;

    if (!isErasing && displayedText.length < items[currentItem].length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(items[currentItem].slice(0, displayedText.length + 1));
      }, TYPING_SPEED);
    } else if (isErasing && displayedText.length > 0) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(items[currentItem].slice(0, displayedText.length - 1));
      }, ERASING_SPEED);
    } else if (!isErasing && displayedText.length === items[currentItem].length) {
      typingTimeout = setTimeout(() => setIsErasing(true), DELAY_BETWEEN);
    } else if (isErasing && displayedText.length === 0) {
      setIsErasing(false);
      setCurrentItem((prev) => (prev + 1) % items.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isErasing, currentItem]);

  return (
    <section id='home'>
    <div className="hero">
      
     <Navbar/>

      {/* Navbar */}
     {/*  <nav className= {`navbar ${isOpen ? "" : ""}`} id='navbar'>
        <div className="logo">ANDREWS</div>
        <ul className= {`nav-links ${isOpen ? "open" : ""}`}>
          <li ><a href="" className="active">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Works</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contact</a></li>
        </ul>

        
         <div className= {`menu-icon ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                </div> 
        
      </nav> */}

      

      {/* Hero Text */}
      <div className="hero-text">
        <h1>Hi! I'm <span>Andrews.</span></h1>
        <p>Creative Designer & Developer located in Kumasi-Ghana.</p>
         <p>
          Specialized in <strong className="typewriter">{displayedText}<span className="cursor">|</span></strong>
        </p>
       {/*  <p>Specialized in <strong>Designing UI</strong></p> */}
      </div>

      {/* Down Arrow */}
      <div className="down-arrow">&#x25BC;</div>

     
 <div className="hero-curve">
  <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path
      fill="#ffffff"
      d="M0,256 C320,320 1120,160 1440,224 L1440,320 L0,320 Z"
    />
  </svg>
</div> 



      
    </div>
    </section>
  );
};

export default Home;
