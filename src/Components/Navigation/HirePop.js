import React, { useState } from "react";
import style from "./HirePop.module.css";
import { Modal, ModalBody } from "reactstrap";

const HirePop = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [modal, setModal] = useState(false);

  const toggle2 = () => setModal(!modal);

  return (
    <>
      <Modal isOpen={modal} toggle2={toggle2}>
        <ModalBody>
          <div className="my-3 px-5">
            <h2>Hire Talents</h2>
            <span className="text-muted">
              Contact us below let's get talking.
            </span>
          </div>
          <span onClick={toggle2} className={style.cancel}>
            x
          </span>
          <hr />
          <form>
            <div className="row">
              <div className="col-6">
                <label for="name">Full name *</label>
                <input
                  type="text"
                  className="input-group-sm form-control-sm form-control py-4"
                  required
                />
              </div>
              <div className="col-6">
                <label for="name">Company name *</label>
                <input
                  type="text"
                  className="input-group-sm form-control-sm form-control py-4"
                  required
                  aria-required
                />
              </div>
              <div className="col-6">
                <label for="email">Work email *</label>
                <input
                  type="email"
                  className="input-group-sm form-control-sm form-control py-4"
                  required
                  aria-required
                />
              </div>
              <div className="col-6">
                <label for="name">Phone number *</label>
                <input
                  type="tel"
                  className="input-group-sm form-control-sm form-control py-4"
                  required
                  aria-required
                />
              </div>
              <div className="col-12">
                <label for="location">Location</label>
                <input
                  type="text"
                  className="input-group-sm form-control-sm form-control py-4"
                  required
                  aria-required
                />
              </div>
              <div className="col-12">
                <label for="location">Let's know more about your need</label>
                <textarea
                  type="text"
                  className="input-group-sm form-control-sm form-control py-4"
                  rows="4"
                  cols="50"
                  required
                  aria-required
                />
              </div>
            </div>
            <div className="col-12">
              <button className="btn-group-lg btn-block btn btn-primary my-4">
                Submit
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>
      ;
    </>
  );
};

export default HirePop;
