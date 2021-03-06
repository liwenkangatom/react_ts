import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import Types from "MyTypes";
import { templateActions } from "../../features/templates";

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

import { TemplateSectionNavConnected, TemplateSection } from "../../components";
import { ItemType } from "../../features/templates/models";
const mapStateToProps = (state: Types.RootState) => ({
  sections: state.template.sections,
  templateContext: state.template.templateContext
});

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) =>
  bindActionCreators(
    {
      addSection: templateActions.addSection,
      deleteSection: templateActions.deleteSection,
      selectSection: templateActions.selectSection,
      addItem: templateActions.addItem
    },
    dispatch
  );
type ITemplateGeneratorProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export class TemplateGenerator extends React.Component<
  ITemplateGeneratorProps
> {
  constructor(props: ITemplateGeneratorProps) {
    super(props);
  }
  addText = () => {
    const { templateContext } = this.props;
    const curSectionKey = templateContext.sectionKey;
    if (curSectionKey !== "") {
      this.props.addItem(curSectionKey, ItemType.TextItem);
    }
  };
  public render() {
    return (
      <div className="templateGenerator">
        <div className="sidebar" />
        <div className="mainContent">
          <div className="header">
            <div className="topBar" />
            <div className="manual">
              <div className="buttonList">
                <div className="itemButton" onClick={this.addText}>
                  <img src={TextIcon} alt="Icon" />
                  <div className="menu-text">Text</div>
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
              <div className="page">
                <div className="pageDisplay">
                  <div className="templatePageHeader">
                    <div className="templateTittle">Template1</div>
                  </div>
                  {this.props.sections.map(section => {
                    const { key, sectionName, sectionOrder } = section;
                    return (
                      <TemplateSection
                        key={key}
                        sectionName={sectionName}
                        id={sectionOrder}
                        sectionKey={key}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="sideNav">
              <div className="sideContent">
                <div className="sectionNavTitle">
                  Section
                  <div className="sectionLine" />
                </div>
                <div className="sectionList">
                  <div className="sectionDisplay">
                    <TemplateSectionNavConnected />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export const TemplateGeneratorConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateGenerator);
