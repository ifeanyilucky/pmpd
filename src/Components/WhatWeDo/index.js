import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../assets/logosmall.png";
const WhatWeDo = () => {
  return (
    <WHAT_WE_DO>
      <WHO_WE_ARE>
        <div className="container">
          <div className="image__wrapper">
            <img
              src={Logo}
              // src="https://res.cloudinary.com/codack/image/upload/v1605990449/w1_ifjzqf.png"
              alt="who we are"
            />
          </div>
          <h1>WHO WE ARE</h1>
          <p className="text-muted">
            We are a boutique digital transformation, consultancy and software
            development company that focus on building world class products,
            providing excellent services using technology to inspire and
            implement solutions to enable businesses. We maximize our ability to
            take on any project by creating a diverse team who can bring their
            experience and perspectives together to solve problems.
          </p>
          <button className="pmpd-btn">
            <Link to="/who-we-are" className="link">
              ABOUT US
            </Link>
          </button>
        </div>
      </WHO_WE_ARE>
      <div className="container">
        <HeaderText>
          <h1>What we do</h1>
          <p className="text-muted">
            We build apps that scale on every platform or screen.
          </p>
        </HeaderText>
        {/* CARD WRAPPER */}
        <ImageBoxWrapper>
          {/* CARD 1 */}
          <div className="image__box">
            <img
              src="https://res.cloudinary.com/codack/image/upload/v1605986462/what-pic1_ir9gtv.jpg"
              alt="Waht-we-do"
              className="box__image"
            />
            <div className="box__container">
              <h4>CONSULTANCY</h4>
              <p className="text-muted">
                Let us help you or your organization with tech related projects
                and solutions.
              </p>
            </div>
          </div>
          {/* CARD 2 */}
          <div className="image__box">
            <img
              src="https://res.cloudinary.com/codack/image/upload/v1605987732/what-pic3_dljs55.jpg"
              alt="Waht-we-do"
              className="box__image"
            />
            <div className="box__container">
              <h4>THESIS WRITE UP</h4>
              <p className="text-muted">
                We specialize in writing PhD/Master's custom thesis projects for
                students.
              </p>
            </div>
          </div>
          {/* CARD 3 */}
          <div className="image__box">
            <img
              src="https://res.cloudinary.com/codack/image/upload/v1605986462/what-pic1_ir9gtv.jpg"
              alt="Waht-we-do"
              className="box__image"
            />
            <div className="box__container">
              <h4>DEVELOPMENT</h4>
              <p className="text-muted">
                We develop products that cut across all platforms, our world
                class software engineers can bring your projects to life.
              </p>
            </div>
          </div>
        </ImageBoxWrapper>
      </div>
    </WHAT_WE_DO>
  );
};
const HeaderText = styled.div`
  text-align: center;
  margin: 2rem 0;
`;
const ImageBoxWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;

  @media (max-width: 850px) {
    flex-flow: column nowrap;
    align-items: center;
    .box__image {
      width: 100%;
    }
  }
  .image__box {
    margin-right: 2rem;
    height: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    justify-content: center;
    border-radius: 5px;
    @media (max-width: 850px) {
      align-items: center;
      margin-bottom: 2rem;
      .box__container {
        margin-bottom: 0;
      }
    }
    .box__container {
      padding: 20px 20px;
      text-align: center;
    }
  }
`;

const WHAT_WE_DO = styled.section`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const WHO_WE_ARE = styled.div`
  text-align: center;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 5rem;
  @media (max-width: 860px) {
    width: 100%;
  }

  .image__wrapper {
    padding: 14px 14px;
    background-color: #c5e0ff;
    display: inline-block;
    border-radius: 50%;
    margin-bottom: 1.3rem;
  }
`;
export default WhatWeDo;
