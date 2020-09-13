import React, { useState } from "react";
import { Container } from "reactstrap";
import style from "./about.module.css";
import Helmet from "react-helmet";
import Navi from "../Navigation/Navi";
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
          <Navi />
          <div className="row">
            <div className="col-12 mx-auto text-center">
              <h1 className="secHead1 mt-5">
                We create smart software solutions.
              </h1>
              <p className="my-4 w-50 text-center mx-auto">
                PMPD helps enterprises deliver custom software solutions at
                startup speed by building effective software teams and providing
                agile tech talent on-demand.
              </p>
              <a href="/" className="Plink" style={{ fontSize: "23px" }}>
                Get in touch
              </a>
            </div>
          </div>
        </Container>

        <section>
          <Container>
            <img
              src="https://res.cloudinary.com/codack/image/upload/v1595692486/office_aqlgdn.webp"
              alt="office"
              className="w-100"
            />
            <div className="row mt-5">
              <div className="col-md-8 mx-auto">
                <h4 className="font-weight-bold gray">Our founding story</h4>
                <p>
                  The need for software is growing continuously. Yet enterprises
                  struggle to gain access to tech talent in order to stay
                  relevant and competitive. In 2018, Kingsley Okemiri and
                  Ifeanyi Lucky founded PMPD to address this challenge by moving
                  from traditional software development approaches to
                  remote-first and freelance-based setups.
                </p>
                <p>
                  Today, PMPD has grown into a community of experienced tech
                  freelancers from around the world. By providing enterprises
                  with high-performing teams and using a build-operate-transfer
                  model, they can deliver software on time, in scope, and on
                  budget. This allows clients to reach business goals, ramp up
                  their digital capabilities, and remain organizationally
                  flexible.
                </p>
              </div>
            </div>
          </Container>
          <Container>
            <h2 className="secHead text-center mt-5">
              What makes working with us unique?
            </h2>
            <p className="text-center">
              We help you turn your digital strategies into smart software
              solutions.
            </p>
            <div className="row mt-5">
              <div className="col-md-6 px-5">
                <div>
                  <h4 className="font-weight-bold">We focus on your goals.</h4>
                  <p>
                    We help you turn your business requirements into smart
                    technical solutions on time and on budget.
                  </p>
                </div>

                <div>
                  <h4 className="font-weight-bold">
                    We are responsible & reliable.
                  </h4>
                  <p>
                    By working with professional and trustworthy experts, we can
                    deliver projects successfully.
                  </p>
                </div>
              </div>
              <div className="col-md-6 px-5">
                <div>
                  <h4 className="font-weight-bold">We shape modern work.</h4>
                  <p>
                    We achieve results quickly and effectively and rely on agile
                    methods, tailored to your needs.
                  </p>
                </div>
                <div>
                  <h4 className="font-weight-bold">
                    We care about our partners.
                  </h4>
                  <p>
                    We ramp up your digital capabilities and make sure that you
                    can continue the project independently.
                  </p>
                </div>
              </div>
            </div>
          </Container>
          <Container>
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
                  <div className="col-md-4">
                    <div className={`${style.box}`}>
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
