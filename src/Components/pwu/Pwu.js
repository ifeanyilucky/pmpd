import React from "react";
import style from "./pwu.module.css";
import { Container } from "reactstrap";

const Pwu = () => {
  return (
    <>
      <Container>
        <div className={style.projectW}>
          <div className="row">
            <div className={`${style.pText} col-md-6`} data-aos="fade-right">
              <div className={style.content}>
                <h2 className="secHead">
                  COMPLETE SCHOOL PROJECT TOPICS MATERIALS
                </h2>
                <p className="pr-5">
                  PMPD provides free Research Project Topics for Final Year
                  Undergraduate Students in Nigeria, with available Complete
                  Project Materials, Abstracts and other previews for courses in
                  Business Management, Sciences, Engineering and more for
                  Nigerian and foreign projects on OND, HND, B.Sc and other
                  projects writing (no plagiarism).
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                className="w-75 ml-5"
                data-aos="fade-left"
                src="https://res.cloudinary.com/codack/image/upload/v1600109115/undraw_book_lover_mkck_mlkn58.svg"
                alt="Project-write-up"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Pwu;
