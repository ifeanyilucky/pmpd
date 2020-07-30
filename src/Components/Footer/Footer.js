import React from "react";
import style from "./footer.module.css";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div>
        <footer className={style.footer}>
          <p className="text-center">
            PMPD: The Software Engineering Consulting Company <br />
            PMPD helps individuals and companies implement and advance their
            client experiences using technology! <br /> Let's help you build the
            next big thing!
          </p>
          <div>
            Follow us: <FaInstagram /> <FaTwitter /> <FaFacebookF />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;