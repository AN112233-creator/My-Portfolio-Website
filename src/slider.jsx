  import React from "react";
  import {Swiper, SwiperSlide } from "swiper/react"
  import {Navigation, Pagination, Autoplay} from "swiper/modules"
  import AOS from "aos";
  import "aos/dist/aos.css";
  import "swiper/css";             
  import "swiper/css/navigation";  
  import "swiper/css/pagination";
  import './slider.css'

  

  /* import knustLogo from '../assets/Logos/knust-logo.png';
  import goilLogo from '../assets/Logos/goil-logo.png';
  import stuLogo from '../assets/Logos/stu-logo.png'; 
  import gctuLogo from '../assets/Logos/gctu-logo.jpg'; 
  */

 /* import HTMLLogo from './src/assets/icons8-html-5.png';
 import CSSLogo from './src/assets/icons8-css.png';
 import JavasLOGO from './src/assets/icons8-javascript.png'
 import ReLOGO from './src/assets/icons8-react.png'
 import pythLOGO from './src/assets/icons8-python.png'
 */
import HTMLLogo from './assets/icons8-html-5-480.png';
import CSSLogo from './assets/icons8-css-logo-480.png';
import JavasLOGO from './assets/icons8-javascript-480.png';
import ReLOGO from './assets/icons8-react-500.png';
/* import pythLOGO from './assets/icons8-python.png'; */
import pythLOGO from './assets/icons8-python-480.png';


  const ToolsSlider = () => {
    const testimonials  = [

      {
        title:'HTML',
        logo: HTMLLogo,
        text:  'HTML is a markup language for creating web pages which is used to structure content on the web.',
        /* date: "sep 30, 2024" */
      },
      {
        title:'CSS',
        logo: CSSLogo,
        text:  'CSS is a style sheet language that I use for describing the presentation of a document written in HTML or XML.',
       /*  date: "aug 20, 2024" */
      },
      {
        title:'Javascript',
        logo: JavasLOGO,
        text:  'Javascript is a programming language that I use to make web pages interactive and dynamic.',
        /* date: "march 30, 2022" */
      },
      {
        title:'React',
        logo: ReLOGO,
        text:  'React is a JavaScript library for building user interfaces, allowing me to create reusable UI components.',
        /* date: "sep 13, 2021" */
      },
      {
        title:'Python',
        logo: pythLOGO,
        text:  'Python is a versatile programming language that I use for machine learning and data visualization.',
        /* date: "sep 13, 2021" */
      },
  
    ];

    
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true,
          color: "black"
         }}
        autoplay={{ delay: 5000, 
          disableOnInteraction: false
        }}
        loop={true}
        speed={1400}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="swiper">
            <div style={{ textAlign: "center", padding: "20px", margin: "40px" }}>
              <img src={item.logo} alt={item.title} width="100" />
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              {/* <small>{item.date}</small> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  
  




export default ToolsSlider

 