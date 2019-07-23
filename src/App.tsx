import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./App.scss";

import { About, Inbox, Home } from "./pages";
import { Header } from "./components";

const history = createBrowserHistory();

export default class App extends Component {
  public render() {
    return (
      <Router history={history}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/inbox" component={Inbox} />
      </Router>
    );
  }
}
