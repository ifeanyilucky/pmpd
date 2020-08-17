import React from "react";
import { Container } from "reactstrap";
import style from "./portfolio.module.css";

const Portfolio = () => {
  return (
    <>
      <Container>
        <section id="portfolio">
          <h4 className="text-center mb-5">SEE WHAT WE HAVE DONE</h4>
          <div className="row mx-auto align-items-center text-center">
            <div className={`${style.work} col-md-3 col-sm-4 mx-auto`}>
              <div className={style.workHead}>
                <h5>Ville Smart Security</h5>
                <p className="mt-3">
                  Ecommerce Website design using React, Wordpress and PHP
                </p>
              </div>
            </div>

            <div className={`${style.work} col-md-3 col-sm-6 mx-auto ml-5`}>
              <div className={style.workHead}>
                <h5>Ville Smart Security</h5>
                <p className="mt-3">
                  Ecommerce Website design using React, Wordpress and PHP
                </p>
              </div>
            </div>
            <div className={`${style.work} col-md-3 col-sm-4 ml-5 mx-auto`}>
              <div>
                <div className={style.workHead}>
                  <h5>Ville Smart Security</h5>
                  <p className="mt-3">
                    Ecommerce Website design using React, Wordpress and PHP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Portfolio;
