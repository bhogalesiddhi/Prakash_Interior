import React from "react";
import HeroSection from "./HeroSection";
import AddReview from "./AddReview";
import Categories from "./Category/Categories";
import Footer from "./Footer/Footer";
import Gallery from "./Gallery";
import Hero from "./Hero/Hero";

function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      {/* <AddReview /> */}
      <Hero />
      <Categories />
      <Gallery />
    </>
  );
}

export default Home;
