import React, { PureComponent } from "react";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import getEditContainer from "../EditContainer/index";
import { TemplateTextControl, TemplateTextPropControl } from "../index";
import { connect } from "react-redux";
import {
  AddItem,
  DeleteItem,
  UpdateItemPosition,
  UpdateItemProps
} from "../../../redux/action.js";
import "./index.css";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
class TemplateEditPage extends PureComponent {
  static defaultProps = {
    className: "layout",
    cols: { lg: 3, md: 8, sm: 6, xs: 1, xxs: 2 },
    rowHeight: 40
  };
  constructor(props) {
    super(props);
    this.state = {
      items: [0, 1, 2].map(function (i, key, list) {
        return {
          i: i.toString(),
          x: i * 2,
          y: 0,
          w: 3,
          h: 1,
          type: "Text"
        };
      }),
      newCounter: 0
    };

    this.cache = [];

    this.onAddItem = this.onAddItem.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }

  createElement = item => {
    //     key: guid(),
    // type: action.data.type,
    // positionData: action.data.positionData,
    // propData: {}
    const i = item.key;
    // let elementType = item.type;
    const EditContainer = getEditContainer(
      TemplateTextControl,
      TemplateTextPropControl
    );
    return (
      <div key={i} data-grid={item.positionData}>
        <EditContainer deleteChild={() => this.onRemoveItem(i)} propData={item.propData} />
      </div>
    );
  };

  onAddItem() {
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: "n" + this.state.newCounter,
        x: this.state.items.length * 2 % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 3,
        h: 1,
        type: "Text"
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1
    });
  }

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  }

  onLayoutChange = layout => {
    this.setState({ layout: layout });
  };

  onRemoveItem = i => {
    console.log("removing", i);
    const { sectionKey } = this.props
    this.props.DeleteItem({
      key: i,
      sectionKey
    });
    // this.setState({ items: _.reject(this.state.items, { i: i }) });
  };

  render() {
    const { items } = this.props;
    return (
      <div className={"templateEditPage"}>
        <ResponsiveReactGridLayout
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          draggableHandle={".dragHandler"}
          {...this.props}
        >
          {_.map(items, item => this.createElement(item))}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, {
  AddItem,
  DeleteItem,
  UpdateItemPosition,
  UpdateItemProps
})(TemplateEditPage);
