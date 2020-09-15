import React from "react";
import { Container } from "reactstrap";

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
      <div>
        <Container>
          <Navi />
          <div className="row">
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

        <Footer />
      </div>
    </>
  );
};

export default Services;
