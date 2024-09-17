import React from "react";
import { FaPaintRoller } from "react-icons/fa";
import "./category.css";

const Categories = () => {
  return (
    <div className="maindiv"  id="services-section">
          <div class="section-heading">
  <h2><span>Our</span> Expertise</h2>
  <div class="underline"></div>
</div>
      <div className="parentcategorydiv">
        <div className="main_category main_catgeory1">
          <div className="category1 categories">
            <div className="categoryIcon">
              <img
                src="/images/civil_work.png"
                alt="Civil work image"
                srcset=""
                className="category_img"
              />
            </div>
            <h3 className="category_title">Civil Work</h3>
          </div>
          <div className="category2 categories">
            <div className="categoryIcon">
              <img
                src="/images/marbles.png"
                alt="Civil work image"
                srcset=""
                className="category_img"
              />
            </div>
            <h3 className="category_title">Marble & Tiles fixing</h3>
          </div>
          <div className="category3 categories">
            <div className="categoryIcon">
              <img
                src="/images/Marblepolishing1.png"
                alt="Civil work image"
                srcset=""
                className="manualsize"
              />
            </div>
            <h3 className="category_title">Marble Polishing</h3>
          </div>
          <div className="category4 categories">
            <div className="categoryIcon">
              <img
                src="/images/plumbing.png"
                alt="Civil work image"
                srcset=""
                className="category_img"
              />
            </div>
            <h3 className="category_title">Plumbing</h3>
          </div>
        </div>
        <div className="main_category main_catgeory2">
          <div className="category5 categories popfalse_div">
            <div className="categoryIcon">
              <img
                src="/images/PopFalseCeiling.png"
                alt="Civil work image"
                srcset=""
                className="manualsize"
              />
            </div>
            <h3 className="category_title">Pop & False ceiling</h3>
          </div>
          <div className="category6 categories painting_div">
            <div className="categoryIcon">
              <img
                src="/images/paint-roller.png"
                alt="Civil work image"
                srcset=""
                className="manualsize"
              />
            </div>
            <h3 className="category_title">Painting</h3>
          </div>
          <div className="category7 categories waterproffing_div">
            <div className="categoryIcon">
              <img
                src="/images/waterproof.png"
                alt="Waterproffing image"
                srcset=""
                className="category_img"
              />
            </div>
            <h3 className="category_title">Waterproffing</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
