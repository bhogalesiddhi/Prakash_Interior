import React from "react";
import Categories from "./Category/Categories";
import Gallery from "./Gallery/Gallery";
import Hero from "./Hero/Hero";
import StatsSection from "./StatsSection/StatsSection";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import Contact from "./Contact/Contact"
import Hsection from "./Hsection/Hsection";

function Home() {
  return (
    <>
      {/* <Hero /> */}
      <Hsection/>
      <Categories />
      <FeaturedProjects/>
      <StatsSection/>
      <Gallery />
      
      <Contact/>
    </>
  );
}

export default Home;
