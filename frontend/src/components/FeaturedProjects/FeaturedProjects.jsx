import React from 'react';
import { FaBuilding, FaFilm, FaCoffee } from 'react-icons/fa';
import './FeaturedProjects.css';

const works = [
  {
    icon: <FaBuilding />,
    title: 'Raheja Company',
    description: 'Vivera Building, Mahalaxmi\nMetal Box, Worli'
  },
  {
    icon: <FaFilm />,
    title: 'Movie Time Cinema',
    description: 'Chembur (Cubic Mall)\nMatunga (Star City)'
  },
  {
    icon: <FaCoffee />,
    title: 'Starbucks',
    description: 'Lower Parel (Phoenix Mall)\nNear CSMT'
  }
];

const FeaturedProjects = () => {
  return (
    <div className="featured-projects-container">
     <div class="section-heading">
  <h2><span>Featured</span> Projects</h2>
  <div class="underline"></div>
  </div>
      <div className="cards-container">
        {works.map((work, index) => (
          <div key={index} className="card">
            <div className="icon-container">{work.icon}</div>
            <h2 className="card-title">{work.title}</h2>
            <p className="card-description">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
