// Stats.jsx
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {FaUsers, FaThumbsUp, FaPenFancy, FaTrophy} from "react-icons/fa";
import "./stats.css";

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  const stats = [
    { icon: <FaUsers/>, value: 3, label: "Happy Clients" },
    { icon: <FaThumbsUp/>, value: 10, label: "Projects Completed" },
    { icon: <FaPenFancy/>, value: 4200, label: "Lines Of Code" },
    { icon: <FaTrophy/>, value: 0, label: "Awards Achieved" },
  ];

  return (
    <div className="stats-section" ref={ref}>
      <div className="overlay" />
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="icon">{stat.icon}</div>
            <h2>
              {inView ? (
                <CountUp end={stat.value} duration={2.5} />
              ) : (
                0
              )}
            </h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;

