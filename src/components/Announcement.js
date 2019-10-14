import React, { Component } from "react";

class Announcement extends Component {
  render() {
    return (
      <div className="Announcement box-shadow">
        <div className="Announcement--text">
          <p>
            <span role="img" aria-label="attention">
              ⚠️
            </span>
            {"  "}
            Please note that shoulder season for Fall 2019 is slowly coming to
            and end. Please call the restaurant ahead of time to make sure
            they're deal is still ongoing.
          </p>
        </div>
      </div>
    );
  }
}

export default Announcement;
