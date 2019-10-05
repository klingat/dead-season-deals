import React, { Component } from "react";
import { logo } from "../images/logo.png";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>
          whistler deadseason<span id="deals-blinker">.deals</span>
        </h1>
        <img src={logo} />
        <h3>Fall 2019</h3>
      </div>
    );
  }
}

export default Header;
