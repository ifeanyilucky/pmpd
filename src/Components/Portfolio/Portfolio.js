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
            <div className={style.workrow}>
              <div className={`${style.work}`}>
                <div className={style.workHead}>
                  <h5>Ville Smart Security</h5>
                  <p className="mt-3">
                    Ecommerce Website design using React, Wordpress and PHP
                  </p>
                </div>
              </div>
              <div className={`${style.work}`}>
                <div className={style.workHead}>
                  <h5>Ville Smart Security</h5>
                  <p className="mt-3">
                    Ecommerce Website design using React, Wordpress and PHP
                  </p>
                </div>
              </div>
              <div className={`${style.work}`}>
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
          </div>
        </section>
      </Container>
    </>
  );
};

export default Portfolio;
