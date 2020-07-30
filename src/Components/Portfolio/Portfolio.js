import React from "react";
import { Container } from "reactstrap";
import style from "./portfolio.module.css";

const Portfolio = () => {
  return (
    <>
      <Container>
        <section>
          <h4 className="text-center mb-5">SEE WHAT WE HAVE DONE</h4>
          <div>
            <div className="row">
              <div data-aos="fade-left" className="col-sm-6">
                <div className={`${style.text} text-right`}>
                  <h4 className="pb-3">CARDINAL FLEET LIMITED</h4>
                  <h5 style={{ color: "#46dbc9" }}>Website development</h5>
                  Cardinal Fleet Limited, a Logistic company based in Lagos,
                  needed
                </div>
              </div>
              <div className="col-xl-6">
                <img
                  src="https://res.cloudinary.com/codack/image/upload/v1595956536/cfl222_qpt75u.png"
                  alt="cardinal-fleet-limited"
                  className={style.pImg}
                  data-aos="fade-right"
                />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Portfolio;
