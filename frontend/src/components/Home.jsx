import React from "react";
import Categories from "./Category/Categories";
import Gallery from "./Gallery/Gallery";
import Hero from "./Hero/Hero";
import StatsSection from "./StatsSection/StatsSection";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProjects/>
      <Gallery />
      <StatsSection/>
    </>
  );
}

export default Home;
