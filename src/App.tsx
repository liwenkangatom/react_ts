import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./App.scss";

import {
  AboutConnected as About,
  Inbox,
  HomeConnected as Home,
  TemplateGeneratorConnected as TemplateGenerator
} from "./pages";
import { Header } from "./components";

const history = createBrowserHistory();

export default class App extends Component {
  public render() {
    return (
      <Router history={history}>
        <div className="mainContainer">
          <Route path="/home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/inbox" component={Inbox} />
          <Route exact path="/" component={TemplateGenerator} />
        </div>
      </Router>
    );
  }
}
