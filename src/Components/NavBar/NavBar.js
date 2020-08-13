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
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import { FaClone } from "react-icons/fa";
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle2 = () => setModal(!modal);

  return (
    <>
      <div className="container mt-3">
        <Navbar color="transparent" light expand="md">
          <Link to="/">
            <NavbarBrand>PMPD</NavbarBrand>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
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
              <div>
                <button className={style.hireBtn} onClick={toggle2}>
                  HIRE A DEV <FaClone />
                </button>
                <Modal isOpen={modal} toggle2={toggle2} className={className}>
                  <ModalBody>
                    <div className="my-3">
                      <h2>Hire Talents</h2>
                      <span className="text-muted">
                        Contact us below let's get talking.
                      </span>
                    </div>
                    <span onClick={toggle2} className={style.cancel}>
                      x
                    </span>
                    <hr />
                    <form>
                      <div className="row">
                        <div className="col-6">
                          <label for="name">Full name *</label>
                          <input
                            type="text"
                            className="input-group-sm form-control-sm form-control py-4"
                            required
                          />
                        </div>
                        <div className="col-6">
                          <label for="name">Company name *</label>
                          <input
                            type="text"
                            className="input-group-sm form-control-sm form-control py-4"
                            required
                            aria-required
                          />
                        </div>
                        <div className="col-6">
                          <label for="email">Work email *</label>
                          <input
                            type="email"
                            className="input-group-sm form-control-sm form-control py-4"
                            required
                            aria-required
                          />
                        </div>
                        <div className="col-6">
                          <label for="name">Phone number *</label>
                          <input
                            type="tel"
                            className="input-group-sm form-control-sm form-control py-4"
                            required
                            aria-required
                          />
                        </div>
                        <div className="col-12">
                          <label for="location">Location</label>
                          <input
                            type="text"
                            className="input-group-sm form-control-sm form-control py-4"
                            required
                            aria-required
                          />
                        </div>
                        <div className="col-12">
                          <label for="location">
                            Let's know more about your need
                          </label>
                          <textarea
                            type="text"
                            className="input-group-sm form-control-sm form-control py-4"
                            rows="4"
                            cols="50"
                            required
                            aria-required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn-group-lg btn-block btn btn-primary my-4">
                          Submit
                        </button>
                      </div>
                    </form>
                  </ModalBody>
                </Modal>
              </div>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
