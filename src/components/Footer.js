import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <p>
          Got questions? Want to add a restaurant special to this list? Fill out{" "}
          <a
            href="https://forms.gle/kvadYA7frZcheEyL6"
            target="_blank"
            rel="noopener noreferrer"
          >
            this form
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Footer;
