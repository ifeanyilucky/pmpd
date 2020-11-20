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
            <Link to="/">PMPD</Link>
          </h1>
        </div>
        <Burger />
      </Nav>
    </div>
  );
};

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  padding: 0 20;

  .navbarLogo {
    padding: 15px 0;
  }
`;

export default Navbar;
