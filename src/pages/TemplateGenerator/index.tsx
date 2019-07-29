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
          <div className="header">
            <div className="topBar" />
            <div className="manual">
              <div className="buttonList">
                <div className="itemButton">1</div>
                <div className="itemButton">1</div>
                <div className="itemButton">1</div>
                <div className="itemButton">1</div>
                <div className="itemButton">1</div>
                <div className="itemButton">1</div>
                <div className="itemButton">1</div>
                <div className="itemButton">1</div>
                <div className="itemButton">1</div>
                <div className="itemButton">1</div>
                <div className="itemButton">1</div>
              </div>
              <div className="tipsList">
                <div className="modular">Modular</div>
                <div className="func">Function</div>
              </div>
            </div>
          </div>
          <div className="editContent">
            <div className="pageContent">
              <div className="page" />
            </div>
            <div className="sideNav">
              <div className="sideContent" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
