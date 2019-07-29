/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { TemplateEditPage } from "../TemplateEditPage";
import "./index.css";
export class TemplateSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelect: false,
      propDataList: []
    };
  }
  render() {
    const { sectionName, sectionKey, isSelected } = this.props;
    return (
      <div
        className={isSelected ? "templateSection_Selected" : "templateSection"}
        key={sectionKey}
      >
        <div className="sectionHeader">
          <div className="sectionTitleIcon" />
          <a id={sectionKey} href="#" />
          <div className="sectionTitle">
            {sectionName}
          </div>
        </div>
        <div className="sectionBody">
          <TemplateEditPage sectionKey={sectionKey} />
        </div>
      </div>
    );
  }
}

export default TemplateSection;
