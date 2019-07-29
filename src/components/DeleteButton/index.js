import React, { Component } from "react";
import deleteIcon from "../../images/deleteIcon.png";
import "./index.css";
export class DeleteButton extends Component {
  handleClick = () => {
    this.props.handleDelete();
  };
  render() {
    return (
      <div className="deleteButton" onClick={this.handleClick}>
        <img alt="delete" src={deleteIcon} className="icon" />
      </div>
    );
  }
}

export default DeleteButton;
