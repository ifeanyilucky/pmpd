import React from "react";
import style from "./pwu.module.css";

const Pwu = () => {
  return (
    <>
      <div className={style.projectW}>
        <div className="row">
          <div className={`${style.pText} col-md-6`}>
            <div className={style.content}>
              <h2 className="font-weight-lighter">
                COMPLETE SCHOOL PROJECT TOPICS MATERIALS UNIVERSITY STUDENT
              </h2>
              <p>
                PMPD provides free Research Project Topics for Final Year
                Undergraduate Students in Nigeria, with available Complete
                Project Materials, Abstracts and other previews for courses in
                Business Management, Sciences, Engineering and more for Nigerian
                and foreign projects on OND, HND, B.Sc and other projects
                writing (no plagiarism).
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className={style.books}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pwu;
