import React, { Component } from "react";
import { Modal, Input, Switch } from "antd";
import "./index.css";

const InitTextName = "Text Name";
export class TemplateTextPropControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propData: {
        TextName: InitTextName,
        IsMustFill: false
      }
    };
    this.props.changePropData(this.state.propData);
  }

  handleConfirm = () => {
    this.props.changePropData(this.state.propData);
    this.props.quitPropControl();
  };

  handleCancel = () => {
    this.props.quitPropControl();
  };

  handelChange(e) {
    let tempPropData = { ...this.state.propData };
    tempPropData.TextName = e.target.value;
    this.setState({
      propData: tempPropData
    });
  }

  switchChange(value) {
    let tempPropData = { ...this.state.propData };
    tempPropData.IsMustFill = value;
    this.setState({
      propData: tempPropData
    });
  }

  render() {
    const { propData } = this.state;
    return (
      <div>
        <Modal
          title="Edit Text"
          visible={this.props.display}
          onOk={this.handleConfirm}
          onCancel={this.handleCancel}
          okText="Confirm"
          width="400px"
          destroyOnClose
        />
        <div className="edit-row">Please enter the name of text here</div>
        <div className="edit-row">
          <Input
            onChange={this.handelChange.bind(this)}
            defaultValue={
              propData.TextName === InitTextName ? "" : propData.TextName
            }
            placeholder="Please enter name"
          />
        </div>
        <div className="edit-row">
          <span>Must fill in</span>
          <Switch
            className="edit-switch"
            checked={propData.IsMustFill}
            onChange={this.switchChange.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default TemplateTextPropControl;
