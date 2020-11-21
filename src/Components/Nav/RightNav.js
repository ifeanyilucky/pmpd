import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const RightNav = ({ open }) => {
  return (
    <div>
      <Ul open={open}>
        <li>
          <Link className="navbar__link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/who-we-are">
            About
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/contact">
            Contact
          </Link>
        </li>
        <div className="btn-wrapper">
          <button className="pmpd-btn styledInNav">
            <Link to="/enquiry" className="link">
              Enquiry
            </Link>
          </button>
        </div>
      </Ul>
    </div>
  );
};

const Ul = styled.ul`
  list-style: none;
  display: flex;

  li {
    padding: 18px 10px;
    .navbar__link {
      color: black;
      text-decoration: none;

      &:hover {
        color: grey;
      }
    }
  }
  @media (max-width: 768px) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.4s;
    overflow-y: hidden;
    flex-flow: column nowrap;
    overflow: hidden;
    align-items: left;
    background-color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    overflow: ${({ open }) => (open ? "visible" : "hidden")};
    width: 100%;
    height: 100vh;
    z-index: 10;
    padding-top: 3.8rem;
    vertical-align: middle;
    li {
      color: black;
      border-bottom: 1px solid #f3f3f3;

      .navbar__link {
        text-decoration: none;
        color: black;
        &:hover {
          color: grey;
        }
      }
    }

    .btn-wrapper {
      justify-content: center;
      align-items: center;
      display: flex;

      .styledInNav {
        display: inline-block;
        margin-top: 5rem;
        margin-right: 4rem;

        width: 100%;
      }
    }
  }

  .btn-wrapper {
    margin-top: 0.5rem;
    padding-left: 2rem;
  }
`;
export default RightNav;
