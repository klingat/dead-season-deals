import React, { Component } from "react";

class Deals extends Component {
  data = [
    {
      restaurantName: "Aura",
      deal: "3 courses for $39 + wine pairings for $29",
      linkToRestaurant: "www.restaurantone.com",
      moreDetails: "Sunday to Thursday"
    },
    {
      restaurantName: "Restaurant Two",
      deal: "2 for 1 Pizzas",
      linkToRestaurant: "www.restauranttwo.com",
      moreDetails: "Reservations Recommended"
    }
  ];
  render() {
    return (
      <div>
        <div>
          {this.data.map((deal, i) => (
            <div className="card" key={i}>
              <div className="card-title">
                <h2>{deal.restaurantName}</h2>
              </div>
              <div className="card-contents">
                <div>
                  <h3>{deal.deal}</h3>
                  <p>{deal.moreDetails}</p>
                </div>
                <div>
                  <a href={deal.link}>Website</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Deals;
