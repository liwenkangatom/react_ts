import * as React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import Types from "MyTypes";
import { templateActions, templateReducer } from "../../features/templates";
import { ItemType } from "../../features/templates/models";
const mapStateToProps = (state: Types.RootState) => ({
  sections: state.template.sections
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

type IAboutProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    label: string;
  };
export class About extends React.Component<IAboutProps> {
  public render() {
    const { addSection, deleteSection, selectSection, addItem } = this.props;
    return (
      <div>
        <h2>About page</h2>
        <button onClick={() => addSection()}>addSection</button>
        <button onClick={() => deleteSection("")}>deleteSection</button>
        <button onClick={() => addItem("sectionKey", ItemType.HandwrittenItem)}>
          addItem
        </button>
      </div>
    );
  }
}
export const AboutConnected = connect(mapStateToProps, mapDispatchToProps)(
  About
);
