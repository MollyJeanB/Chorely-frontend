import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Switch } from "react-router";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">This Week</Link>
          </div>
          <Switch>
            <Route exact path="/">
              <div>This Week</div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
