import React from "react";
import { FaSmile, FaProjectDiagram, FaHeadset, FaUsers } from "react-icons/fa";
import "./StatsSection.css";

const stats = [
  { icon: <FaSmile />, number: 232, label: "Happy Clients" },
  { icon: <FaProjectDiagram />, number: 521, label: "Projects" },
  { icon: <FaHeadset />, number: 1463, label: "Years Of Experience" },
  { icon: <FaUsers />, number: 15, label: "Hard Workers" },
];

const StatsSection = () => {
  return (
    <div>
      <div class="section-heading main_all_container">
        <h2>
          <span>Our Journey</span> In Numbers
        </h2>
        <div class="underline"></div>
      </div>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="icon-container-stats">{stat.icon}</div>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
