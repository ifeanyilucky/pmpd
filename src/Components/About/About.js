import React from "react";
import { Container } from "reactstrap";
import NavBar from "../NavBar/NavBar";
import style from "./about.module.css";
import Helmet from "react-helmet";

const About = ({ title }) => {
  const about = "Who we are - PMPD Nigeria";
  return (
    <>
      <Helmet>
        <title>{title ? title : about}</title>
      </Helmet>
      <div>
        <Container>
          <NavBar />
          <div className="row">
            <div className="col-7 mx-auto text-center">
              <h1 className={style.headText}>
                We are passionate about helping your business with world class
                technology.
              </h1>
            </div>
          </div>
        </Container>

        <section className={style.section2}>
          <Container>
            <div className="row">
              <div className="col-9 mx-auto">
                <div className={`${style.box} text-center`}>
                  <h1 className={style.headText2}>About us</h1>
                  <p>
                    PMPD is a software Engineering Consulting Business. We are a
                    team of world-class agile developers, product managers, and
                    designers who work in concert with you to solve problems and
                    transform the digital experience of individuals, companies
                    and governments.
                  </p>
                  <p>
                    PMPD provides IT Consultancy, software design and
                    development as well as professional services and software
                    deployment and maintenance to the following to individuals,
                    companies and governments cross cutting the following
                    sectors: Governments, Financial Services, Transportation,
                    Hospitality, Logistics, E-Commerce, Education.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "6rem" }}>
              <div className={`${style.timeline} col-md-4 text-center`}>
                <div className={style.digit}>2+</div>
                <div>YEARS</div>
                <div>
                  PMPD has been actively involved in the Nigerian Tech
                  Ecosystem.
                </div>
              </div>

              <div className={`${style.timeline} col-md-4 text-center`}>
                <div className={style.digit}>20+</div>
                <div>PROJECTS</div>
                <div>
                  PMPD has completed numerous projects for clients, both big and
                  small.
                </div>
              </div>

              <div className={`${style.timeline} col-md-4 text-center`}>
                <div className={style.digit}>100</div>
                <div>PERCENT </div>
                <div>
                  PMPD has 100% delivery rate on every project we take on.
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default About;
