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
            <span className={style.icons}>
              <a
                href="https://instagram.com/pmpd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </span>
            <span className={style.icons}>
              <a
                href="https://twitter.com/pmpd96396985?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </span>

            <span className={style.icons}>
              <a
                href="https://www.facebook.com/Project-Manner-PD-2002274383436074/services/?service_id=2131564690224959"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />{" "}
              </a>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
