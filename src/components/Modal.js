import React, { Component } from "react";
// import DealToggle from "./DealToggle";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }

  render() {
    return (
      <div className="Modal">
        <div onClick={this.toggleModal}>{this.props.trigger}</div>
        {this.state.isOpened && (
          <div className="Modal--content">
            <div className="Modal--content--opened box-shadow">
              <div className="close-button" onClick={this.toggleModal}>
                <div>
                  <i className="fa fa-close fa-lg"></i>
                </div>
              </div>
              <div className="Modal--opened">{this.props.children}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Modal;
