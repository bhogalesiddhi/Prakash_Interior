import React from "react";
import { FaPaintRoller } from "react-icons/fa";
import "./category.css";

const Categories = () => {
  return (
    <div className="maindiv">
      <div className="heading">
        <h1>Our Services</h1>
      </div>
      <div className="main_category">
        <div className="category1 categories">
          <div className="categoryIcon">
            <FaPaintRoller />
          </div>
          <h3 className="category_title">Painting</h3>
          <p>
            Our expert painters offer a wide range of painting services to
            transform your space. Whether it's interior or exterior painting,
            residential or commercial, we deliver exceptional results.
          </p>
        </div>
        <div className="category2 categories">
          <div className="categoryIcon">
            <FaPaintRoller />
          </div>
          <h3 className="category_title">Painting</h3>
          <p>
            Our expert painters offer a wide range of painting services to
            transform your space. Whether it's interior or exterior painting,
            residential or commercial, we deliver exceptional results.
          </p>
        </div>
        <div className="category3 categories">
          <div className="categoryIcon">
            <FaPaintRoller />
          </div>
          <h3 className="category_title">Painting</h3>
          <p>
            Our expert painters offer a wide range of painting services to
            transform your space. Whether it's interior or exterior painting,
            residential or commercial, we deliver exceptional results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
