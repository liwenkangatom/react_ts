import React, { PureComponent } from "react";
import Types from "MyTypes";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Responsive, WidthProvider, Layout, Layouts } from "react-grid-layout";
import ReactGridLayout from "react-grid-layout";
import { getEditContainer } from "../EditContainer";
import { TemplateTextControl, TemplateTextPropControl } from "../index";
import { templateActions, templateSelectors } from "../../features/templates";
import { Item } from "../../features/templates/models";

import "./index.css";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const mapStateToProps = (
  state: Types.RootState,
  ownProps: { sectionKey: string }
) => ({
  sections: state.template.sections,
  templateContext: state.template.templateContext,
  items: templateSelectors.makeGetItemsBySectionKey(ownProps.sectionKey)(
    state.template
  )
});

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) =>
  bindActionCreators(
    {
      addSection: templateActions.addSection,
      deleteSection: templateActions.deleteSection,
      selectSection: templateActions.selectSection,
      addItem: templateActions.addItem,
      moveItem: templateActions.deleteItem
    },
    dispatch
  );
type TemplateEditPageProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    cols: {
      lg: number;
      md: number;
      sm: number;
      xs: number;
      xxs: number;
    };
    rowHeight: number;
  };
export class TemplateEditPage extends PureComponent<TemplateEditPageProps> {
  static defaultProps = {
    className: "layout",
    rowHeight: 30,
    onLayoutChange: function() {},
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }
  };
  constructor(props: Readonly<TemplateEditPageProps>) {
    super(props);
    this.state = {
      // items: [0, 1, 2].map(function(i, key, list) {
      //   return {
      //     i: i.toString(),
      //     x: i * 2,
      //     y: 0,
      //     w: 3,
      //     h: 1,
      //     type: "Text"
      //   };
      // }),
      // newCounter: 0
    };
    // this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }

  createElement = (item: Item) => {
    const i = item.key;
    const EditContainer = getEditContainer(
      TemplateTextControl,
      TemplateTextPropControl
    );
    return (
      <div key={i} data-grid={item.positionData}>
        <EditContainer
          propData={item.propData}
          itemKey={i}
          moveItem={(itemKey: string) => {}}
        />
      </div>
    );
  };

  // We're using the cols coming back from this to calculate where to add new items.
  // onBreakpointChange(breakpoint: string, cols: number) {
  //   this.setState({
  //     breakpoint: breakpoint,
  //     cols: cols
  //   });
  // }

  handleLayoutChange = (layout: Layout[]) => {
    console.log("allLayouts", layout);
  };

  render() {
    const { items } = this.props;
    return (
      <div className={"templateEditPage"}>
        <ResponsiveReactGridLayout
          className="layout"
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 1 }}
          rowHeight={30}
          onLayoutChange={this.handleLayoutChange}
        >
          {items.map(this.createElement)}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}
export const TemplateEditPageConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateEditPage);
