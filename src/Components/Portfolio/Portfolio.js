import React from "react";
import style from "./portfolio.module.css";
import Navi from "../Navigation/Navi";
import Projects from "./Project";

import Footer from "../Footer/Footer";

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
                    Want To Build For The Future? Talk To Us About It!
                  </h1>
                </div>
              </div>
              <div className={`${style.portfolioHead} col-md-6`}>
                <div>
                  <p>
                    Let us help your business discover new possibilities and so
                    much more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4"></div>
        </div>
        <div className="row">
          {Projects.map((project) => (
            <>
              <div className="col-sm-4">
                <div className={style.portfolioCard}>
                  <div className={style.portfolioImg}>
                    <img src={project.imgUrl} alt={project.name} />
                  </div>
                  <div className={`${style.portfolioBody} ${project.cName}`}>
                    <h3 className={style.pHead}>{project.description}</h3>
                    <p>{project.category}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
