import * as React from "react";
import "./templateGenerator.scss";
import TextIcon from "../../images/Text.png";
import RadioIcon from "../../images/Radio.png";
import CheckBoxIcon from "../../images/CheckBox.png";
import TimestampIcon from "../../images/Timestamp.png";
import PictureIcon from "../../images/Picture.png";
import VideoIcon from "../../images/Video.png";
import LocationIcon from "../../images/Location.png";
import TableIcon from "../../images/Table.png";
import HandwrittenIcon from "../../images/Handwritten.png";
import SaveIcon from "../../images/save.png";
import ShareIcon from "../../images/share.png";

export interface ITemplateGeneratorProps {}

export interface ITemplateGeneratorState {}

export class TemplateGenerator extends React.Component<
  ITemplateGeneratorProps,
  ITemplateGeneratorState
> {
  constructor(props: ITemplateGeneratorProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div className="templateGenerator">
        <div className="sidebar" />
        <div className="mainContent">
          <div className="header">
            <div className="topBar" />
            <div className="manual">
              <div className="buttonList">
                <div className="itemButton">
                  <img src={TextIcon} alt="Icon" />
                  <div className="menu-text"> Text </div>
                </div>
                <div className="itemButton">
                  <img src={RadioIcon} alt="Icon" />
                  <div className="menu-text"> Radio </div>
                </div>
                <div className="itemButton">
                  <img src={CheckBoxIcon} alt="Icon" />
                  <div className="menu-text"> CheckBox </div>
                </div>
                <div className="itemButton">
                  <img src={TimestampIcon} alt="Icon" />
                  <div className="menu-text"> Timestamp </div>
                </div>
                <div className="itemButton">
                  <img src={PictureIcon} alt="Icon" />
                  <div className="menu-text"> Picture </div>
                </div>
                <div className="itemButton">
                  <img src={VideoIcon} alt="Icon" />
                  <div className="menu-text"> Video </div>
                </div>
                <div className="itemButton">
                  <img src={LocationIcon} alt="Icon" />
                  <div className="menu-text"> Location </div>
                </div>
                <div className="itemButton">
                  <img src={TableIcon} alt="Icon" />
                  <div className="menu-text"> Table </div>
                </div>
                <div className="itemButton">
                  <img src={HandwrittenIcon} alt="Icon" />
                  <div className="menu-text"> Handwritten </div>
                </div>
                <div className="itemButton">
                  <img src={SaveIcon} alt="Icon" />
                  <div className="menu-text"> Save </div>
                </div>
                <div className="itemButton">
                  <img src={ShareIcon} alt="Icon" />
                  <div className="menu-text"> Share </div>
                </div>
              </div>
              <div className="tipsList">
                <div className="modular">Modular</div>
                <div className="func">Function</div>
              </div>
            </div>
            <div className="splitLine" />
          </div>
          <div className="editContent">
            <div className="pageContent">
              <div className="page" />
            </div>
            <div className="sideNav">
              <div className="sideContent">
                <div className="sectionTitle">
                  Section
                  <div className="sectionLine" />
                </div>
                <div className="sectionList" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
