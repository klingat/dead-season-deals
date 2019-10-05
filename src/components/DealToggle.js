import React, { Component } from "react";
import handleClickOutside from "react-onclickoutside";

class DealToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
    this.openDetails = this.openDetails.bind(this);
  }

  openDetails() {
    this.setState(() => ({ isOpened: true }));
  }

  handleClickOutside() {
    this.setState(() => ({ isOpened: false }));
  }

  render() {
    const deal = this.props.deal;
    return (
      <div className="DealToggle box-shadow" onClick={this.openDetails}>
        <div className="DealToggle--title">
          <h3>{deal.dealTitle}</h3>
          <p>{deal.restaurantName}</p>
        </div>

        {this.state.isOpened && (
          <div className="DealToggle--content">
            <ul>
              {deal.dealDetails.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <div className="DealToggle--actions">
              <a id="call-action" href={`tel:${deal.phoneNumber}`}>
                <i className="fas fa-phone-alt"></i> Call
              </a>
              <a
                id="website-action"
                href={deal.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-globe"></i> Website
              </a>
            </div>
            <a
              id="source-action"
              href={deal.image}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default handleClickOutside(DealToggle);
