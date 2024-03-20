// components/Navbar.js

import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Logo = styled.img`
  width: 100px;
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 20px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <Logo src="/path/to/your/logo-white.png" alt="Logo" />
      </div>
      <NavLinks>
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/contact">Contact Us</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
