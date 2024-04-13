// components/HeroSection.js

import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  background-image: url("https://media.istockphoto.com/id/1007957982/photo/sofa-and-lamp-in-living-room-for-mockup-3d-rendering.jpg?s=612x612&w=0&k=20&c=ePS9CQpPDqXjPoKte5AaSEGvIKKHolSTNg4xJguNcMQ=");
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Slogan = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Title>Welcome to Our Website</Title>
      <Slogan>Your slogan goes here</Slogan>
    </HeroContainer>
  );
};

export default HeroSection;
