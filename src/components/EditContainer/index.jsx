import React, { PureComponent } from "react";
import "./index.scss";
import { DeleteButton, EditButton } from "../../common";
const getEditContainer = (Control, PropControl) => {
  return class extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isShowProp: false,
        propData: null,
        isSelected: false
      };
    }
    changePropData = propData => {
      this.setState({
        propData: propData
      });
    };
    handleDelete = () => {
      this.props.deleteChild();
    };
    handleEdit = () => {
      this.setState({
        isShowProp: true
      });
    };
    closeEditor = () => {
      this.setState({
        isShowProp: false
      });
    };
    selected = () => {
      this.setState({
        isSelected: true
      });
    };
    render() {
      const { isShowProp, propData } = this.state;
      return (
        <div className="EditContainer" onClick={this.selected}>
          <div className="dragHandler" />
          <div className="editContainerHeader">
            <DeleteButton handleDelete={this.handleDelete} />
            <EditButton handleEdit={this.handleEdit} />
          </div>
          <PropControl
            display={isShowProp}
            changePropData={this.changePropData}
            quitPropControl={this.closeEditor}
          />
          <Control propData={propData} />
        </div>
      );
    }
  };
};

export default getEditContainer;
