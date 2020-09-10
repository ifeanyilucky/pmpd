import React, { useEffect } from "react";

import { Container } from "reactstrap";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import Navi from "../Navigation/Navi";
function Header() {
  useEffect(() => {
    Aos.init({ length: 2000 });
  });
  return (
    <>
      <div className={style.header}>
        <div className={style.heroBox}></div>
        <Navi />
        <Container>
          <div className="row mt-5" data-aos="fade">
            <div className={`${style.heroText} col-md-5`}>
              <h1>
                Software Development{" "}
                <span style={{ color: "orange" }}>Company</span>
              </h1>
              <p style={{ fontSize: "20px", fontWeight: "300" }}>
                We are Software Engineers, Designers, Product Managers and
                Strategists. We help startups and established companies
                implement and advance their client experiences using technology.
              </p>
              <div className="row mt-5">
                <div className="col-7 mt-3">
                  <Link
                    className="text-decoration-none"
                    to="/enquiry"
                    style={{ color: "#212529" }}
                  >
                    <div className={`${style.link}`}>Let's talk</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div>
                <img
                  src="https://res.cloudinary.com/codack/image/upload/v1599419960/front-end-development-main-banner_wkhp8c.png"
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
