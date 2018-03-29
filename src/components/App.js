import React, { Component } from "react";
import styles from "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Switch } from "react-router";
import NavBar from "./NavBar"
import NavBarMobile from "./NavBarMobile"
import Chart from "./Chart"
import Stats from "./Stats"

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar />
            <NavBarMobile />
            <Route exact path="/" component={Chart} />
            <Route exact path="/stats" component={Stats} />
          </div>
        </Router>
    );
  }
}

export default App;
