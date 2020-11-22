import React from "react";
import emailjs from "emailjs-com";
import style from "./contact.module.css";
import Navbar from "../Nav/Navbar";
import Footer from "../Footer/Footer";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "pmpd",
        "template_7bm7kel",
        e.target,
        "user_f1JWlMDdpvMQheChszipW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <>
      <div className={style.contactS}>
        <div className="container">
          <Navbar />
          <div className="row pt-5 pb-5">
            <div className="col-xl-6">
              <div>
                <h1 style={{ fontWeight: "700" }}>Let's work together</h1>
                <p className="mt-4">
                  We are providing great business solutions to businesses.
                </p>
              </div>
              <div>
                <form className="contact-form" onSubmit={sendEmail}>
                  <div className="row mt-5">
                    <div className="col-6">
                      <input
                        type="text"
                        placeholder="Full Name"
                        name="user_name"
                        className={style.contactF}
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="tel"
                        name="contact_number"
                        placeholder="Phone Number"
                        className={style.contactF}
                      />
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-6">
                      <input
                        type="email"
                        name="user_email"
                        placeholder="Email Address"
                        className={style.contactF}
                        required
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        placeholder="Organization"
                        className={style.contactF}
                        name="organization"
                      />
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-lg-12">
                      <textarea
                        type="message"
                        className={`${style.contactF}`}
                        placeholder="Message"
                        name="user_message"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-lg btn-block pmpd-btn btn-outline-dark mt-5"
                    style={{ borderRadius: "50px" }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

// <input type="hidden" name="contact_number" />
// <label>Name</label>
// <input type="text" name="user_name" />
// <label>Email</label>
// <input type="email" name="user_email" />
// <label>Message</label>
// <textarea name="message" />
// <input type="submit" value="Send" />
