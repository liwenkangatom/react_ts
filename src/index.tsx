import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./index.scss";

import App from "./App";

import { About, Inbox } from "./pages";
import * as serviceWorker from "./serviceWorker";
const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/inbox" component={Inbox} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
