import React from "react";
import style from "./portfolio.module.css";
import Navi from "../Navigation/Navi";

const Portfolio = () => {
  return (
    <>
      <div className="container">
        <Navi />
      </div>
      <div className="pgHeroBg">
        <div className={style.portfolio}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={style.leftText}>
                  <h1 className="secHead1">
                    Our recent <br />
                    projects
                  </h1>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
