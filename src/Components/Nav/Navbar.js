import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-router-dom";
import Logo from "../Nav/logo2.png";

const Navbar = () => {
  return (
    <div className="container mb-5">
      <Nav>
        <div className="navbarLogo">
          <h1>
            <Link to="/" className="logoLink">
              <img src={Logo} className="logoImg" alt="PMPD LOGO" />
              <span style={{ color: "#0157cc" }}>PMPD</span>
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
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
  padding-left: 5rem;
  padding-right: 5rem;

  @media (max-width: 678px) {
    padding-left: 1rem;
  }
  .navbarLogo {
    padding: 15px 0;
    h1 {
      font-size: 35px;
      color: #0157cc !important;
    }
    .logoLink {
      text-decoration: none;
      color: black;
      font-weight: 800;

      .logoImg {
        width: 20%;
      }
    }
  }
`;

export default Navbar;
