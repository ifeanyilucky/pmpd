import React, { Component } from "react";

import Navi from "../Navigation/Navi";
import style from "./contact.module.css";
import Footer from "../Footer/Footer";
class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    emailStatus: "",
  };

  //handle change
  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.event,
    });
  };

  //Submit form
  submitForm = (e) => {
    e.preventDefault();
    // console.log(this.state);
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("lod", () => {});

    xhr.open("GET", "http://api.efjei.com/sendmail/index.php");
  };
  render() {
    const { name, message, tel, email } = this.state;
    return (
      <>
        <Navi />
        <div className={style.contactS}>
          <div className="container">
            <div className="row pt-5 pb-5">
              <div className="col-xl-6">
                <div>
                  <h1 style={{ fontWeight: "700" }}>Let's work together</h1>
                  <p className="mt-4">
                    We are providing great business solutions to businesses.
                  </p>
                </div>
                <div>
                  <form onSubmit={this.formSubmit}>
                    <div className="row mt-5">
                      <div className="col-6">
                        <input
                          type="text"
                          value={name}
                          placeholder="Full Name"
                          className={style.contactF}
                          onChange={this.handleChange("name")}
                        />
                      </div>
                      <div className="col-6">
                        <input
                          type="tel"
                          value={tel}
                          placeholder="Phone Number"
                          className={style.contactF}
                          onChange={this.handleChange("name")}
                        />
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-6">
                        <input
                          value={email}
                          type="email"
                          placeholder="Email Address"
                          className={style.contactF}
                          onchange={this.handleChange("email")}
                        />
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          value={name}
                          placeholder="Organization"
                          className={style.contactF}
                          onChange={this.handleChange("name")}
                        />
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-lg-12">
                        <textarea
                          className={`${style.contactF}`}
                          placeholder="Message"
                          value={message}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-lg btn-block btn-outline-dark mt-5"
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
  }
}

export default Contact;
