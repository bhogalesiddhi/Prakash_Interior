import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="main">
      <div className="mainContainer">
        <div className="leftSide">
          <div className="quoteSection">
            <div className="stars">
              <span>★★★★</span>
            </div>
            <div className="quoteSection1 quote quote1">
              <span>Experienced</span>
              <span>Civil Construction Expert</span>
            </div>
            <div className="quoteSection2">
              <span className="highlight">
                28 Years of Excellence
              </span>
              <span>in Italian Marble and Marble Polishing</span>
              <span>
                Delivering top-notch construction services with a commitment to
              </span>
              <span>
                quality and craftsmanship. 
              </span>
              
            </div>
            <div className="enquireButton">
              <button className="enquireStyle">Discover More</button>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="rightsideimg">
            <img
              src="/images/heroImg.jpg"
              alt="Hero"
              className="heroImage"
            ></img>
            <img
              src="/images/hero2.jpg"
              alt="Hero"
              className="heroImage2"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
