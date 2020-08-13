import React, { useState } from "react";
import { Container } from "reactstrap";
import NavBar from "../NavBar/NavBar";
import style from "./about.module.css";
import Helmet from "react-helmet";
import langData from "./lang.json";

const About = ({ title }) => {
  const [vmb] = useState([
    {
      title: "VISION",
      text:
        "PMPD' vision is to unleash the full potential of the world’s ideas through software technology.",
    },
    {
      title: "MISSION",
      text:
        "PMPD’ mission is to enhance the business operations of its clients by developing and/or implementing premium IT products and services.",
    },
    {
      title: "BUSINESS PHILOSOPHY",
      text:
        "PMPD’ business philosophy is to assure the highest quality product, total client satisfaction, timely delivery of solutions and the best quality/price ratio found in the industry.",
    },
  ]);
  const about = "Who we are - PMPD Nigeria";
  return (
    <>
      <Helmet>
        <title>{title ? title : about}</title>
      </Helmet>
      <div>
        <Container>
          <NavBar />
          <div className="row">
            <div className="col-7 mx-auto text-center">
              <h1 className={style.headText}>
                We are passionate about helping your business with world class
                technology.
              </h1>
            </div>
          </div>
        </Container>

        <section className={style.section2}>
          <Container>
            <div className="row">
              <div className="col-9 mx-auto">
                <div className={`${style.box} text-center`}>
                  <h1 className={style.headText2}>About us</h1>
                  <p>
                    PMPD is a software Engineering Consulting Business. We are a
                    team of world-class agile developers, product managers, and
                    designers who work in concert with you to solve problems and
                    transform the digital experience of individuals, companies
                    and governments.
                  </p>
                  <p>
                    PMPD provides IT Consultancy, software design and
                    development as well as professional services and software
                    deployment and maintenance to the following to individuals,
                    companies and governments cross cutting the following
                    sectors: Governments, Financial Services, Transportation,
                    Hospitality, Logistics, E-Commerce, Education.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "6rem" }}>
              <div className={`${style.timeline} col-md-4 text-center`}>
                <div className={style.digit}>2+</div>
                <div>YEARS</div>
                <div>
                  PMPD has been actively involved in the Nigerian Tech
                  Ecosystem.
                </div>
              </div>

              <div className={`${style.timeline} col-md-4 text-center`}>
                <div className={style.digit}>20+</div>
                <div>PROJECTS</div>
                <div>
                  PMPD has completed numerous projects for clients, both big and
                  small.
                </div>
              </div>

              <div className={`${style.timeline} col-md-4 text-center`}>
                <div className={style.digit}>100</div>
                <div>PERCENT </div>
                <div>
                  PMPD has 100% delivery rate on every project we take on.
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <div className="row">
              {vmb.map((vmb1) => (
                <>
                  <div className="col-md-4 text-center">
                    <div className={`${style.box} ${style.box2}`}>
                      <h4>{vmb1.title}</h4>
                      <p>{vmb1.text}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <div>
              <h3>We speak 7 Languages</h3>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <div className={style.language}>
                  <img
                    src="https://res.cloudinary.com/codack/image/upload/v1596389108/ds-banner-image.noinline_fuor6a.webp"
                    alt="languages"
                    className={style.imgLang}
                  />
                </div>
              </div>
              <div className="col-md-6">
                {langData.Language.map((data) => (
                  <>
                    <div className="row mt-3">
                      <div className="col-sm-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 295.238 295.238"
                          fill="currentColor"
                          class={style.langIcon}
                        >
                          <path d="M276.19 26.189H19.048C8.543 26.189 0 34.732 0 45.237v171.429c0 10.505 8.543 19.048 19.048 19.048h85.714v23.81H71.429v9.524h152.38v-9.524h-33.333v-23.81h85.714c10.505 0 19.048-8.543 19.048-19.048V45.237c0-10.505-8.543-19.048-19.048-19.048zm-95.238 233.334h-66.667v-23.81h66.667v23.81zm104.762-42.857c0 5.252-4.271 9.524-9.524 9.524H19.048c-5.252 0-9.524-4.271-9.524-9.524V45.237c0-5.252 4.271-9.524 9.524-9.524H276.19c5.252 0 9.524 4.271 9.524 9.524v171.429z"></path>
                          <path d="M19.048 216.666H276.19V45.237H19.048v171.429zm9.523-161.904h238.095v152.381H28.571V54.762z"></path>
                          <circle cx="42.857" cy="69.048" r="4.762"></circle>
                          <circle cx="57.143" cy="69.048" r="4.762"></circle>
                          <circle cx="71.429" cy="69.048" r="4.762"></circle>
                          <path d="M38.095 140.476h66.667V83.333H38.095v57.143zm9.524-47.62h47.619v38.095H47.619V92.856zM114.286 140.476h66.667V83.333h-66.667v57.143zm9.524-47.62h47.619v38.095H123.81V92.856zM190.476 140.476h66.667V83.333h-66.667v57.143zM200 92.856h47.619v38.095H200V92.856zM38.095 149.999h142.857v9.524H38.095zM38.095 169.047h142.857v9.524H38.095zM38.095 188.094h142.857v9.524H38.095zM195.238 149.999h61.905v9.524h-61.905zM195.238 169.047h61.905v9.524h-61.905zM195.238 188.094h61.905v9.524h-61.905z"></path>
                        </svg>
                      </div>
                      <div className="col-xl-10">
                        <div>
                          <p style={{ fontSize: "18px" }}>
                            <b>{data.Name}</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default About;
