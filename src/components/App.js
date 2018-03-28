import React, { Component } from "react";
import styles from "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Switch } from "react-router";
import NavBar from "./NavBar"
import Chart from "./Chart"
import Stats from "./Stats"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Route path="/" component={NavBar} />
          </div>
          <div>
            <Route exact path="/" component={Chart} />
          </div>
          <div>
            <Route exact path="/stats" component={Stats} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
