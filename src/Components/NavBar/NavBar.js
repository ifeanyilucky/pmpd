import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  //   UncontrolledDropdown,
  //   DropdownToggle,
  //   DropdownMenu,
  //   DropdownItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="container mt-3">
        <Navbar color="transparent" light expand="md">
          <Link to="/">
            <NavbarBrand>PMPD</NavbarBrand>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink className="alink" href="#">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="alink">
                  <Link to="/who-we-are">Who we are</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="alink" href="#">
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="alink" href="#">
                  Hire developers
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="alink" href="#">
                  What we do
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="alink" href="#">
                  Contact us
                </NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            </Nav>
            <NavbarText>
              <a href="#" className="link">
                Let's talk
              </a>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
