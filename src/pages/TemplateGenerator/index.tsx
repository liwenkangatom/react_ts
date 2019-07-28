import * as React from "react";
import "./templateGenerator.scss";

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
          <div className="header" />
          <div className="editContent">
            <div className="pageContent" />
            <div className="sideNav" />
          </div>
        </div>
      </div>
    );
  }
}
