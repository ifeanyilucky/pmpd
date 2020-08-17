import React from "react";
import { Container } from "reactstrap";
import style from "./contact.module.css";
import {
  IoIosPin,
  IoMdMail,
  IoIosPhonePortrait,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io";
import NavBar from "../NavBar/NavBar";

const Contact = () => {
  return (
    <>
      <div>
        <NavBar />
        <Container>
          <div className="row my-5">
            <div className="col-sm-8 mx-auto">
              <div className={style.boxOne}>
                <div className="row">
                  <div className="col-sm-4">
                    <div className={style.boxTwo}>
                      <h3>Contact us</h3>
                      <div className={`mb-4`}>
                        <IoIosPin />{" "}
                        <span>0 Winrose Street, PZ, Benin City</span>
                      </div>
                      <div className={`mb-4`}>
                        <IoMdMail />
                        <span>hello@pmpd.com.ng</span>
                      </div>
                      <div className={`mb-4`}>
                        <IoIosPhonePortrait />
                        <span>+234 812 313 3827</span>
                      </div>
                      <div class="flex-center text-center">
                        <IoLogoFacebook /> <IoLogoInstagram />{" "}
                        <IoLogoWhatsapp />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-8 px-5">
                    <h3>Get in touch</h3>
                    <p className="text-muted">
                      Feel free to drop us a line below!
                    </p>
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control-sm form-control"
                          placeholder="Fullname"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control-sm form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          email="tel"
                          className="form-control-sm form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="form-group">
                        <textarea className="form-control" rows="4" cols="40" />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
