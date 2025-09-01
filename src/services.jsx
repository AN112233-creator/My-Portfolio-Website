import React, { useEffect } from 'react';
import { FaLaptop, FaCogs, FaMobileAlt, FaRocket, FaPencilAlt, FaLifeRing } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './services.css';
import Stats from './stats.jsx';

const servicesData = [
  {
    icon: <FaLaptop />,
    title: 'WEB DESIGN',
    description: 'Beautiful, functional, and mobile-friendly web designs that make your brand stand out.'
  },
  {
    icon: <FaCogs/>,
    title: 'WEB DEVELOPMENT',
    description: 'I develop fast, secure, and scalable websites with clean code, ensuring smooth functionality and great performance.'
  },
  {
    icon: <FaMobileAlt/>,
    title: 'RESPONSIVE DESIGN',
    description: 'I build mobile-friendly websites that adapt perfectly to all screen sizes, providing a seamless experience for users everywhere.'
  },
  {
    icon: <FaRocket/>,
    title: 'BRANDING IDENTITY',
    description: 'I help create a strong and consistent brand identity that communicates your values and stands out in the market.'
  },
  {
    icon: <FaPencilAlt/>,
    title: 'CREATIVE DESIGN',
    description: 'I craft unique and visually compelling designs that capture attention and leave a lasting impression.'
  },
  {
    icon: <FaLifeRing/>,
    title: 'SUPPORT',
    description: 'I provide reliable ongoing support to ensure your website or brand continues to run smoothly and stays up to date.'
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1400, once: true });
  }, []);

  return (
    <section className='sections' id='services'>
    <section className="services" >
      <h2>WHAT I CAN DO</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="service-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="icon-circle">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
    
    <Stats/>
    </section>
  );
};

export default Services;

