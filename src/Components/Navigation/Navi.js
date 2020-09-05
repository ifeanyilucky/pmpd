import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import style from "./Navi.module.css";
import { FaTimes, FaBars } from "react-icons/fa";
class Navi extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className={style.NavBarItems}>
        <h1 className={style.navLogo}>PMPD</h1>
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
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navi;
