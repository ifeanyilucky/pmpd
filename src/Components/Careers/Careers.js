import React from "react";
import style from "./careers.module.css";
import { Container } from "reactstrap";
import { FaCode } from "react-icons/fa";

const Careers = () => {
  return (
    <>
      <section>
        <Container>
          <div>
            <h3>Careers</h3>
            <p>Join our telented team</p>
          </div>
          <div className="row">
            <div data-aos="fade-right" className="col-xl-7">
              <div>
                <div className="row">
                  <div className="col-2">
                    <div className={style.iconList}>
                      <FaCode />
                    </div>
                  </div>
                  <div className="col-10">
                    <h4 className="pt-5">Senior Software Engineer</h4>
                    <p>
                      Looking for ambitious senior mobile full-stack developers
                      who wish to become part of the successful mobile/game
                      development startup. As a team we are a group of
                      super-talented, fun, laid-back software…
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="row mt-4">
                  <div className="col-2">
                    <div className={style.iconList}>
                      <FaCode />
                    </div>
                  </div>
                  <div className="col-10">
                    <h4>Intermediate Software Developer</h4>
                    <p>
                      Looking for ambitious intermediate mobile full-stack
                      developers who wish to become part of the successful
                      mobile/game development startup. As a team we are a group
                      of super-talented, fun, laid-back software…
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img
                data-aos="fade-left"
                src="https://res.cloudinary.com/codack/image/upload/v1595868419/SVG/drawkit-grape-pack-illustration-10_lqhsto.svg"
                alt="opening"
                className="w-100"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Careers;
