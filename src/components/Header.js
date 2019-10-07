import React, { Component } from "react";
import InfoButton from "./InfoButton";

class Header extends Component {
  render() {
    return (
      <div className="Header box-shadow">
        <div className="Header--top">
          <InfoButton />
        </div>
        <div className="Header--bottom">
          <h1>
            Whistler's
            <br />
            Dead Season Deals
          </h1>
          <h3>Fall 2019</h3>
        </div>
      </div>
    );
  }
}

export default Header;
