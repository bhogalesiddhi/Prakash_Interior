import React from "react";
import HeroSection from "./HeroSection";
import AddReview from "./AddReview";
import Categories from "./Category/Categories";
import Footer from "./Footer/Footer";
import Gallery from "./Gallery";

function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      {/* <AddReview /> */}
      <Categories />
      <Footer />
      <Gallery />
    </>
  );
}

export default Home;
