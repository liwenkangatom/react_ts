import React, { PureComponent, ComponentType } from "react";
import Types from "MyTypes";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import "./index.scss";
import { DeleteButton, EditButton } from "../index";
import { ItemType, ItemPropData } from "../../features/templates/models";
import { templateActions, templateSelectors } from "../../features/templates";
import { Modal } from "antd";
import {
  TemplateTextControl,
  TemplateTextPropControl
} from "../templateControls";
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) =>
  bindActionCreators(
    {
      moveItem: templateActions.deleteItem
    },
    dispatch
  );
type EditContainerProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    propData: ItemPropData;
    itemKey: string;
  };
type EditContainerState = {
  propData: ItemPropData;
  isShowProp: boolean;
};
type ControlProp = {
  propData: ItemPropData;
  itemKey: string;
};
type PropControlProp = {
  propData: ItemPropData;
  itemKey: string;
  onChange: (propData: ItemPropData) => void;
};
export const getEditContainer = (
  Control: ComponentType<ControlProp>,
  PropControl: ComponentType<PropControlProp>
) => {
  class EditContainer extends PureComponent<
    EditContainerProps,
    EditContainerState
  > {
    static defaultProps = {
      propData: {}
    };

    readonly state: EditContainerState = {
      propData: this.props.propData,
      isShowProp: false
    };
    deleteItem = () => {};
    openEditor = () => {
      this.setState({
        isShowProp: true
      });
    };
    closeEditor = () => {
      this.setState({
        isShowProp: false
      });
    };
    confirmEditor = () => {
      // const { propData } = this.state;
      // 提交到 store
      this.setState({
        isShowProp: false
      });
    };
    propDataChange = (propData: ItemPropData) => {
      this.setState({
        propData
      });
    };
    render() {
      const { isShowProp, propData } = this.state;
      const { itemKey } = this.props;
      return (
        <div className="EditContainer">
          <div className="dragHandler" />
          <div className="editContainerHeader">
            <DeleteButton handleDelete={this.deleteItem} />
            <EditButton handleEdit={this.openEditor} />
          </div>
          <Control propData={propData} itemKey={itemKey} />
          <Modal
            title="Edit Text"
            visible={isShowProp}
            onOk={this.confirmEditor}
            onCancel={this.closeEditor}
            okText="Confirm"
            width="400px"
            destroyOnClose={true}
          >
            <PropControl
              propData={propData}
              itemKey={itemKey}
              onChange={this.propDataChange}
            />
          </Modal>>
        </div>
      );
    }
  }
  return const EditContainerConnected = connect(mapStateToProps, mapDispatchToProps)(EditContainer)
  return EditContainer;
};
export const EditContainerMaker = (type: ItemType) => {
  switch (type) {
    case ItemType.TextItem:
      return getEditContainer(TemplateTextControl, TemplateTextPropControl);
    default:
      return null;
  }
};
