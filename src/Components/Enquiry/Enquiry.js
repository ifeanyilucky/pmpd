import React from "react";
import NavBar from "../NavBar/NavBar";
import style from "./enquiry.module.css";

import { Form, FormGroup, Label, Input, Container } from "reactstrap";

const Enquiry = () => {
  return (
    <>
      <Container>
        <NavBar />
        <div className="text-center mt-5">
          <h1>Tell us about your product</h1>
          <span className="text-muted">
            Do you have a software development project to implement? We have
            people to work on it. We will be glad to answer all your questions
            as well as estimate any project of yours. Use the form below to
            describe the project and we will get in touch with you within 1
            business day.
          </span>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <Form>
              <div className={style.plan}>
                <FormGroup>
                  <Label for="Name">Contact Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="nameid"
                    placeholder="Contact Name"
                  />
                </FormGroup>
              </div>
              <div className={style.plan}>
                <FormGroup>
                  <Label for="Name">Contact Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="emailid"
                    placeholder="Contact Email"
                  />
                </FormGroup>
              </div>
              <div className={style.plan}>
                <FormGroup>
                  <Label for="Name">Phone No.</Label>
                  <Input
                    type="tel"
                    name="tel"
                    id="phoneid"
                    placeholder="Type your phone number here"
                  />
                </FormGroup>
              </div>
              <div className={style.plan}>
                <FormGroup>
                  <Label for="Name">
                    What kind of app do you want us to develop for you?
                  </Label>
                  <textarea
                    className="form-control input-group"
                    type="text"
                    name="email"
                    id="appid"
                    placeholder="Write your kind of app here"
                  />
                </FormGroup>
              </div>
              <div className={style.plan}>
                <FormGroup>
                  <Label for="Name">
                    What problem is this app proposed to solve? (Indicate
                    problem and solution)
                  </Label>
                  <textarea
                    className="form-control input-group"
                    type="text"
                    name="text"
                    id="emailid"
                    placeholder="Write the kind of problem the app is proposed to solve here"
                  />
                </FormGroup>
              </div>
              <div className={style.plan}>
                <FormGroup>
                  <Label for="Name">
                    Who are the main users of this app? (Your major users)
                  </Label>
                  <textarea
                    className="form-control input-group"
                    type="text"
                    name="text"
                    id="emailid"
                    placeholder="Type the main users of the app here"
                  />
                </FormGroup>
              </div>
              <div className={style.plan}>
                <FormGroup>
                  <Label for="revenue">
                    Would you like to generate revenue from the app?
                  </Label>
                  <textarea
                    className="form-control input-group-lginput-group"
                    type="text"
                    name="text"
                    id="revenue"
                    placeholder="write the features you want here..."
                  />
                </FormGroup>
              </div>
              <div className={style.plan}>
                <FormGroup>
                  <Label for="revenue">
                    What platform do you want this application to be built on?
                    (e.g Web only, Mobile only, Web and Mobile)
                  </Label>
                  <textarea
                    className="form-control input-group-lginput-group"
                    type="text"
                    name="text"
                    id="revenue"
                    placeholder="(e.g Web only, Mobile only, Web and Mobile)"
                  />
                </FormGroup>
              </div>
              <div className={style.plan}>
                <FormGroup>
                  <Label for="revenue">
                    What significant difference would this app have from other
                    existing apps?
                  </Label>
                  <textarea
                    className="form-control input-group-lginput-group"
                    type="text"
                    name="text"
                    id="revenue"
                    placeholder="Type if this app is already in exsitence"
                  />
                </FormGroup>
              </div>
              <div className={style.plan}>
                <FormGroup>
                  <Label for="revenue">What is your budget?</Label>
                  <textarea
                    className="form-control input-group-lginput-group"
                    type="text"
                    name="text"
                    id="revenue"
                    placeholder="Type your budget"
                  />
                </FormGroup>
              </div>
              <div className={style.plan}>
                <FormGroup>
                  <Label for="revenue">
                    How soon do you need this app? Any deadline?
                  </Label>
                  <textarea
                    className="form-control input-group-lginput-group"
                    type="text"
                    name="text"
                    id="revenue"
                    placeholder="Type when you need the app here"
                  />
                </FormGroup>
              </div>
              <div className={style.plan}>
                <FormGroup>
                  <Label for="revenue">
                    Any comment? (If there is an additional description yet
                    specified)
                  </Label>
                  <textarea
                    className="form-control input-group-lginput-group"
                    type="text"
                    name="text"
                    id="revenue"
                    placeholder="Type other comment here"
                  />
                </FormGroup>
              </div>
              <div className={style.btnWrapper}>
                <button type="submit" className={style.sbmtBtn}>
                  SUBMIT
                </button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Enquiry;
