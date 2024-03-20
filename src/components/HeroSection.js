// components/HeroSection.js

import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  background-image: url("https://www.aertsen.in/wp-content/uploads/2022/11/Stunning-Modern-Living-Room-Interior-Design-Ideas-in-India.jpg");
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
