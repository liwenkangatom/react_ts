import React, { Component } from "react";
import editIcon from "../../images/editIcon.png";
import "./index.css";
export class EditButton extends Component {
  handleClick = () => {
    this.props.handleEdit();
  };
  render() {
    return (
      <div className="editButton">
        <img
          alt="edit"
          src={editIcon}
          className="icon"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default EditButton;
