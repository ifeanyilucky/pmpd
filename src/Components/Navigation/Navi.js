import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import style from "./Navi.module.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

class Navi extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <Container>
          <nav className={style.NavBarItems}>
            <Link to="/">
              <h1 className={style.navLogo}>PMPD</h1>
            </Link>
            <div className={style.menuI} onClick={this.handleClick}>
              {this.state.clicked ? (
                <FaTimes className={style.times} />
              ) : (
                <FaBars className={style.bars} />
              )}
            </div>
            <ul
              className={
                this.state.clicked
                  ? `${style.menuClass} ${style.active}`
                  : `${style.menuClass}`
              }
            >
              {MenuItems.map((item, index) => {
                return (
                  <li>
                    <Link className={item.cName} to={item.url}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Container>
      </>
    );
  }
}

export default Navi;
