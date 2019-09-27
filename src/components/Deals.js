import React, { Component } from "react";

class Deals extends Component {
  data = [
    {
      id: 1,
      restaurantName: "Restaurant One",
      deal: "35$ 5 Cours Meal",
      linkToRestaurant: "www.restaurantone.com",
      moreDetails: "Sunday to Thursday"
    },
    {
      id: 2,
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
