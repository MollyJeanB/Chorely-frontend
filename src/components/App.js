import React, { Component } from "react"
import styles from "../componentStyles/App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
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
          <Switch>
            <div className={styles.fontAll}>
              <Route exact path="/" component={Chart} />
              <Route exact path="/stats" component={Stats} />
            </div>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
