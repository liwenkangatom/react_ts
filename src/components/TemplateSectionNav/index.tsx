import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import Types from "MyTypes";
import { templateActions } from "../../features/templates";
import AddIcon from "../../images/add.png";
import "./index.scss";
const mapStateToProps = (state: Types.RootState) => ({
  sections: state.template.sections
});

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) =>
  bindActionCreators(
    {
      addSection: templateActions.addSection,
      deleteSection: templateActions.deleteSection,
      selectSection: templateActions.selectSection
    },
    dispatch
  );
type ITemplateSectionNavProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
interface ITemplateSectionNavState {
  selectKey: string;
}
export class TemplateSectionNav extends Component<
  ITemplateSectionNavProps,
  ITemplateSectionNavState
> {
  constructor(props: ITemplateSectionNavProps) {
    super(props);

    this.state = {
      selectKey: "0"
    };
  }
  deleteSection = (key: string) => {
    this.props.deleteSection(key);
  };
  addSection = () => {
    this.props.addSection();
  };
  scrollToAnchor = (sectionKey: string) => {
    if (sectionKey) {
      // 找到锚点
      let anchorElement = document.getElementById(sectionKey);
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) {
        anchorElement.scrollIntoView({
          block: "start",
          behavior: "smooth"
        });
      }
    }
  };
  selectItem = (sectionKey: string) => {
    this.setState({ selectKey: sectionKey });
    this.props.selectSection(sectionKey);
    this.scrollToAnchor(sectionKey);
  };
  render() {
    return (
      <div className="templateSectionNav">
        {this.props.sections.map(sectionObj => {
          return (
            <div
              key={sectionObj.key}
              className={
                this.state.selectKey === sectionObj.key
                  ? "sectionItem_Selected"
                  : "sectionItem"
              }
              onClick={() => this.selectItem(sectionObj.key)}
            >
              <div className="sectionPoint" />
              <div className="sectionName">
                {sectionObj.sectionName}
              </div>
              <div
                className="deleteSection"
                onClick={() => this.deleteSection(sectionObj.key)}
              />
            </div>
          );
        })}
        <div className="addSectionButton" onClick={this.addSection}>
          <img src={AddIcon} alt="add" />
        </div>
      </div>
    );
  }
}

export const TemplateSectionNavConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateSectionNav);
