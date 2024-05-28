import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="main">
      <div className="mainContainer">
        <div className="leftSide">
          <div className="quoteSection ">
            <div className="stars">
              <span>★★★★</span>
            </div>
            <div className="quoteSection1 quote quote1">
              <span>ELEGANT</span>
              <span>INTERIORS</span>
            </div>
            <div className="quoteSection2">
              <span>
                Discover bespoke interior designs that blend elegance with
                practicality
              </span>
              <span>tailored to enhance the vibrancy and comfort </span>
              <span>of modern city living.</span>
            </div>

            <div className="enquireButton">
              <button className="enquireStyle">Enquire Now</button>
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
