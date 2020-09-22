import React from "react";
import style from "./careers.module.css";
import { Container } from "reactstrap";

const Careers = () => {
  return (
    <>
      <section>
        <Container>
          <div>
            <div className="row">
              <div className="col-lg-4">
                <div>
                  <h1 className="secHead">Career</h1>
                </div>
              </div>
              <div className={`${style.career} col-sm-3 mx-auto text-center`}>
                <img
                  src="https://res.cloudinary.com/codack/image/upload/v1597304681/ticket-support_1_jgnljk.png"
                  alt="opening"
                />
                <h5 className="my-4">Mobile Full-stack Developer</h5>
                <p className={style.cTxt}>
                  Looking for ambitious senior mobile full-stack developers who
                  wish to become part of the successful mobile/game development
                  startup. As a team we are a group of super-talented, fun,
                  laid-back software…
                </p>
              </div>
              <div className={`${style.career} col-sm-3 mx-auto text-center`}>
                <img
                  src="https://res.cloudinary.com/codack/image/upload/v1597304681/ticket-support_1_jgnljk.png"
                  alt="opening"
                />
                <h5 className="my-4">
                  Senior Linux/AWS DevOps/Security Engineer
                </h5>
                <p className={style.cTxt}>
                  We are looking for an experienced DevOps Engineer with a
                  recent track record of building and maintaining complex
                  infrastructure within AWS (Amazon Web Services).
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 mx-auto text-center">
              <div className={style.apply}>
                <a
                  href="/"
                  className="Plink"
                  style={{ display: "inline-block" }}
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Careers;
