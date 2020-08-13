import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { Container } from "reactstrap";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import illustration from "../../assets/illustration-2.png";
function Header() {
  useEffect(() => {
    Aos.init({ length: 2000 });
  });
  return (
    <>
      <div className={style.header}>
        <div className={style.heroBox}></div>
        <NavBar />
        <Container>
          <div className="row mt-5">
            <div
              data-aos="fade"
              className={`${style.heroText} col-lg-5 col-sm-12 col-md-12`}
            >
              <h1
                style={{
                  fontWeight: "600",
                  fontSize: "60px",
                  marginBottom: "1.7rem",
                  color: "#3452de",
                }}
              >
                We are Pmpd
              </h1>
              <p style={{ fontSize: "20px", fontWeight: "300" }}>
                We are Software Engineers, Designers, Product Managers and
                Strategists. We help startups and established companies
                implement and advance their client experiences using technology.
              </p>
              <div className="row mt-5">
                <div className="col-sm-6">
                  <button className={style.heroBtn}>Hire a dev</button>
                </div>
                <div className="col-sm-6">
                  <Link to="/enquiry">
                    {" "}
                    <div className={`${style.link}`}>Let's talk</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div>
                <img
                  data-aos="fade"
                  src={illustration}
                  alt="hero"
                  className="mt-5 w-100"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
