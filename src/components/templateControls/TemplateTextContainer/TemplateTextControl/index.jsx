import React, { Component } from "react";
import "./index.css";

export class TemplateTextControl extends Component {
  render() {
    const { propData } = this.props;
    const textName = propData !== null ? propData.TextName : "";
    return (
      <div>
        <label className="textLabel">
          {textName}
        </label>
        {propData !== null &&
          propData.IsMustFill &&
          <span className="textSign">*</span>}
        <input className="textInput" disabled={true} />
      </div>
    );
  }
}

export default TemplateTextControl;
