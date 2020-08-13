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
            <div className="row">
              <div className="col-sm-10 mx-auto text-center">
                <h1>Career</h1>
                <div className="row mt-5">
                  <div className="col-sm-6 mx-auto">
                    <img
                      src="https://res.cloudinary.com/codack/image/upload/v1597304681/ticket-support_1_jgnljk.png"
                      alt="opening"
                    />
                    <h4 className="my-4 font-weight-lighter">
                      Mobile Full-stack Developer
                    </h4>
                    <p className="mt-4">
                      Looking for ambitious senior mobile full-stack developers
                      who wish to become part of the successful mobile/game
                      development startup. As a team we are a group of
                      super-talented, fun, laid-back software…
                    </p>
                  </div>
                  <div className={`${style.career} col-sm-6 mx-auto`}>
                    <img
                      src="https://res.cloudinary.com/codack/image/upload/v1597304681/ticket-support_1_jgnljk.png"
                      alt="opening"
                    />
                    <h4 className="my-4 font-weight-lighter">
                      Mobile Full-stack Developer
                    </h4>
                    <p className="mt-4">
                      Looking for ambitious senior mobile full-stack developers
                      who wish to become part of the successful mobile/game
                      development startup. As a team we are a group of
                      super-talented, fun, laid-back software…
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Careers;
