import React, { useState, useEffect } from "react";
import "./testimonial.css";

const testimonials = [
  {
    name: "Mr John Doe",
    title: "Creative Director",
    image: null,
    text: "Dolor facilis veritatis doloremque dicta eos Voluptate earum nulla ad et esse Saepe asperiores nisi facere ipsam corporis.",
  },
  {
    name: "Jane Smith",
    title: "Project Manager",
    image: null,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eius.",
  },
  {
    name: "David Wilson",
    title: "Architect",
    image: null,
    text: "Consectetur, culpa! Quis voluptate aspernatur assumenda aliquam minus quidem corporis.",
  },
];

const PushOutSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonial-section">
      <div className="testimonial-overlay">
        <div className="slider-container">
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div className="testimonial-card" key={index}>
                <img src={item.image} alt={item.name} className="testimonial-img" />
                <h2>{item.name}</h2>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PushOutSlider;

