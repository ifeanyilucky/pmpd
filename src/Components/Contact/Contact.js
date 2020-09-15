import React from "react";
import { Container } from "reactstrap";
import Navi from "../Navigation/Navi";
import style from "./contact.module.css";
import Footer from "../Footer/Footer";
const Contact = () => {
  return (
    <>
      <Navi />
      <div className={style.contactS}>
        <Container>
          <div className="row pt-5 pb-5">
            <div className="col-xl-6">
              <div>
                <h1 style={{ fontWeight: "700" }}>Let's work together</h1>
                <p className="mt-4">
                  We are providing great business solutions to businesses.
                </p>
              </div>
              <div>
                <form>
                  <div className="row mt-5">
                    <div className="col-6">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className={style.contactF}
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className={style.contactF}
                      />
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-6">
                      <input
                        type="text"
                        placeholder="Email Address"
                        className={style.contactF}
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        placeholder="Organization"
                        className={style.contactF}
                      />
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-lg-12">
                      <textarea className={`${style.contactF}`} />
                    </div>
                  </div>

                  <button
                    className="btn btn-lg btn-block btn-outline-dark mt-5"
                    style={{ borderRadius: "50px" }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
