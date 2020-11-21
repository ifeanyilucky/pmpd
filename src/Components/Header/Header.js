import React from "react";

import { Container } from "reactstrap";
import style from "./header.module.css";
import Navbar from "../Nav/Navbar";
import styled from "styled-components";

const BtnGroup = styled.div`
  display: flex;
  text-align: center;

  justify-content: center space-between;
  flex-flow: row;
  margin-top: 2rem;

  button:nth-child(2) {
    margin-left: 10px;
    display: block;
  }
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Header = () => {
  return (
    <>
      <div className={style.header}>
        <Container>
          <Navbar />
          <div className="row mt-5" data-aos="fade">
            <div className={`${style.heroText} col-md-5`}>
              <span className="text-muted">SOFTWARE DESIGN & DEVELOPMENT</span>
              <h1>
                {/* Software Development{" "} */}
                Go beyond <br />
                <span>technology,</span>
                <br />
                Do PMPD
              </h1>
              <p>
                We are Software Engineers, Designers, Product Managers and
                Strategists. We help startups and established companies
                implement and advance their client experiences using technology.
              </p>
              <BtnGroup>
                <button className="pmpd-btn">About</button>
                <button className="pmpd-btn pmpd-btn-outline">Enquiry</button>
              </BtnGroup>
            </div>

            <div className="col-lg-7">
              <div>
                <img
                  src="https://res.cloudinary.com/codack/image/upload/v1599419960/front-end-development-main-banner_wkhp8c.png"
                  alt="hero"
                  className="mt-5 w-100"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
