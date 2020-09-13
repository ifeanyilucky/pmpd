import React from "react";
import { Container } from "reactstrap";
import style from "./Hire.module.css";

function Hire() {
  return (
    <>
      <section>
        <Container>
          <div className="row">
            <div className="col-md-6">
              <h3 className="secHead mb-4">
                Fullstack <br />
                Developers Ready
              </h3>
              <p className="pr-5">
                Our full-stack web developers are at your disposal and ready to
                create data-driven and responsive web applications. We develop
                your project by implementing the latest technologies to deliver
                a modern and unique solution whatever your requirements. Some of
                the technologies we use:
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/codack/image/upload/v1600030060/technologies_nbv5nq.png"
              alt="stacks"
              className="mx-auto"
            />
          </div>
        </Container>
      </section>
      <section className={style.hire}>
        <Container>
          <div className="row">
            <div className="col-md-6">
              <h4 className="secHead text-white">Get to know our experts</h4>
              <p>
                We are a network of more than 150 experienced tech experts from
                all over Africa who share a passion for solving
                business-critical challenges.
              </p>
              <p>
                We help you turn your business requirements into smart technical
                solutions. You can hire us individually or as a whole team to
                work on your project.
              </p>
              <a href="/" className="Plink text-white">
                Hire experts
              </a>
            </div>
            <div className="col-md-6"></div>
          </div>
        </Container>
      </section>
    </>
  );
}
export default Hire;
