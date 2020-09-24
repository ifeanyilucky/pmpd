import React from "react";
import { Container } from "reactstrap";
import style from "./Services.module.css";
import Helmet from "react-helmet";
import Navi from "../Navigation/Navi";

import Footer from "../Footer/Footer";

const Services = ({ title }) => {
  const about = "What we do - PMPD Nigeria";
  return (
    <>
      <Helmet>
        <title>{title ? title : about}</title>
      </Helmet>
      <Navi />
      <div className="pgHeroBg">
        <Container>
          <div className="row" data-aos="fade">
            <div className="col-12 mx-auto text-center">
              <h1 className="secHead1 mt-5">
                We Provide World Class Software Engineering Services
              </h1>
              <h5 className="my-4 text-center">
                Innovation.Strategy.Technology
              </h5>
              <a href="/" className="Plink" style={{ fontSize: "23px" }}>
                Get in touch
              </a>
            </div>
          </div>
        </Container>
      </div>
      <div className={style.services}>
        <Container>
          <div data-aos="fade-in">
            <h1 style={{ fontWeight: "700" }}>
              We offer the following services:
            </h1>

            <p>We will like to work with you, check our service offering.</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className={`${style.cardBox} card`} data-aos="fade-in">
                <div className="card-body">
                  <div className="card-title">
                    <h5>SOFTWARE ENGINEERING</h5>
                  </div>
                  <p>
                    PMPD’s approach includes inception, iteration planning,
                    daily standup meetings, test-driven development and
                    iterative processes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${style.cardBox} card`} data-aos="fade-in">
                <div className="card-body">
                  <div className="card-title">
                    <h5>PRODUCT ADVISORY</h5>
                  </div>
                  <p>
                    Our Product Advisory service enables our team work through
                    the product ideation with the client to fine tune it to meet
                    market needs and expectations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${style.cardBox} card`} data-aos="fade-in">
                <div className="card-body">
                  <div className="card-title">
                    <h5>TEAMS ENGINEERING ARCHITECTURE</h5>
                  </div>
                  <p>
                    Let PMPD help you design the best engineering team that will
                    help maximise your ROI and bring efficiency to your every
                    day engineering processes.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className={`${style.cardBox} card`} data-aos="fade-in">
                  <div className="card-body">
                    <div className="card-title">
                      <h5>PRODUCT DEVELOPMENT & MANAGEMENT</h5>
                    </div>
                    <p>
                      Our experience in helping organizations build and scale
                      mission critical software projects has helped us gain a
                      vast amount of experience in managing products vital to
                      the success of software products.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={`${style.cardBox} card`} data-aos="fade-in">
                  <div className="card-body">
                    <div className="card-title">
                      <h5>SOFTWARE ENGINEERING ARCHITECTURE</h5>
                    </div>
                    <p>
                      The software architecture of a program or computing system
                      is the structure or structures of the system, which
                      comprise software elements, the externally visible
                      properties of those elements, and the relationships among
                      them.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={`${style.cardBox} card`} data-aos="fade-in">
                  <div className="card-body">
                    <div className="card-title">
                      <h5>SOFTWARE TESTING </h5>
                    </div>
                    <p>
                      Are you building a new product or you just launched one
                      into the market. Let our team of professional software
                      testers help you test the system past what you had
                      initially anticipated.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div>
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-right">
                We speak <br />9 Languages
              </h1>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Services;
