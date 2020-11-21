import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <Nav>
        <div className="navbarLogo">
          <h1>
            <Link to="/" className="logoLink">
              PMPD
            </Link>
          </h1>
        </div>
        <Burger />
      </Nav>
    </div>
  );
};

const Nav = styled.nav`
  width: 100%;
  height: 68px;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  padding-left: 5rem;
  padding-right: 5rem;

  @media (max-width: 678px) {
    padding-left: 1rem;
  }
  .navbarLogo {
    padding: 15px 0;
    .logoLink {
      text-decoration: none;
      color: black;
      font-weight: 800;
    }
  }
`;

export default Navbar;
