import React, { Component } from "react";
import DealToggle from "./DealToggle";
import { data } from "../data/fall_2019";

class Deals extends Component {
  render() {
    return (
      <div className="Deals">
        {data.map((deal, i) => (
          <DealToggle deal={deal} key={i} />
        ))}
      </div>
    );
  }
}

export default Deals;
