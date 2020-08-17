import React from "react";
import style from "./footer.module.css";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div>
        <section>
          <div className={style.newsletter}>
            <div className="container">
              <div className={`${style.form}`}>
                <h2 className="mt-5">Subscribe to our email list</h2>
                <p>Enter your email below</p>
                <div className={style.form1}>
                  <form
                    action="https://gmail.us17.list-manage.com/subscribe/post?u=3e58b6c016aab8bfb7584c3de&amp;id=e4c7d0ca68"
                    method="post"
                  >
                    <input
                      type="email"
                      placeholder="type your email"
                      id="mce-EMAIL"
                      className={style.emailInput}
                    />
                    <span
                      type="submit"
                      id="mc-embedded-subscribe"
                      className={style.submitIcon}
                    >
                      <FaArrowRight />
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
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
