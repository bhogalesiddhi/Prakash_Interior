import React from "react";
import Categories from "./Category/Categories";
import Gallery from "./Gallery/Gallery";
import Hero from "./Hero/Hero";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Gallery />
    </>
  );
}

export default Home;
