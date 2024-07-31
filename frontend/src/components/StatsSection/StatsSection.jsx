import React from 'react';
import { FaSmile, FaProjectDiagram, FaHeadset, FaUsers } from 'react-icons/fa';
import './StatsSection.css';

const stats = [
  { icon: <FaSmile />, number: 232, label: 'Happy Clients' },
  { icon: <FaProjectDiagram />, number: 521, label: 'Projects' },
  { icon: <FaHeadset />, number: 1463, label: 'Years Of Experience' },
  { icon: <FaUsers />, number: 15, label: 'Hard Workers' },
];

const StatsSection = () => {
  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="icon-container">{stat.icon}</div>
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
