import React, { Component } from "react";

class DealToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
    this.toggleDealDetails = this.toggleDealDetails.bind(this);
  }

  toggleDealDetails() {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }

  render() {
    const deal = this.props.deal;
    return (
      <div className="DealToggle box-shadow" onClick={this.toggleDealDetails}>
        <div className="dealTitle">
          <h3>{deal.dealTitle}</h3>
          <p>{deal.restaurantName}</p>
        </div>

        {this.state.isOpened && (
          <div className="dealContent">
            <ul>
              {deal.dealDetails.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <p>{deal.website}</p>
            <p>{deal.phoneNumber}</p>
            <img src={`require('../../public/images/deals/${deal.image}')`} />
          </div>
        )}
      </div>
    );
  }
}

export default DealToggle;

// // Props
// deal = {
//   dealTitle: "",
//   dealDetails: "",
//   restaurantName: "",
//   website: "",
//   phoneNumber: ""
// };
