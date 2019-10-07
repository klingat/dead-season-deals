import React, { Component } from "react";
import Modal from "./Modal";

class InfoButton extends Component {
  render() {
    return (
      <Modal
        trigger={
          <div className="button box-shadow">
            <i className="fa fa-question fa-lg"></i>
          </div>
        }
      >
        <h1>👋</h1>
        <h1>Hey Whistler friends,</h1>
        <p>
          Please note that all information displayed on this website is
          collected from newspapers and various social media sites.
        </p>
        <p>
          Each restaurant has different start and end dates for their seasonal
          specials. Please call the restaurant in advanced to ensure the special
          is still ongoing.
        </p>
        <p>This website has no affiliation with any of these restaurants.</p>
        <p>
          This was created for the community of Whistler so we can see all see
          the specials in one place!
        </p>
        <p>
          Enjoy and if you see a mistake, or want to add a restaurant to the
          list, please fill out{" "}
          <a href="https://forms.gle/zKrMySHY1hH6i77Z7" target="_blank">
            this form
          </a>
          .
        </p>
        <p>Enjoy and bon apétit!🍝</p>
      </Modal>
    );
  }
}

export default InfoButton;
