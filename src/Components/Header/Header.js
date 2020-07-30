import React from "react";
import NavBar from "../NavBar/NavBar";
import { Container } from "reactstrap";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import Aos from "aos";
function Header() {
  return (
    <>
      <div className={style.header}>
        <div className={style.heroBox}></div>
        <NavBar />
        <Container>
          <div className="row mt-5">
            <div className={`${style.heroText} col-md-6`}>
              <h1
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "800",
                  fontSize: "60px",
                  marginBottom: "1.7rem",
                  color: "rgb(70, 219, 201)",
                }}
              >
                We are Pmpd
              </h1>
              <p>
                We are Software Engineers, Designers, Product Managers and
                Strategists. We help startups and established companies
                implement and advance their client experiences using technology.
              </p>
              <Link to="/enquiry">
                {" "}
                <div className={`${style.link} mt-4`}>Let's talk</div>
              </Link>
            </div>
            <div className="col-xl-6">
              <div>
                <img
                  src="https://res.cloudinary.com/codack/image/upload/v1595868423/SVG/drawkit-grape-pack-illustration-2_qclrxy.svg"
                  alt="hero"
                  className="w-100"
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
