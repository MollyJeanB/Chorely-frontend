import React, { Component } from "react"
import styles from "../componentStyles/App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Chart from "./Chart"
import Stats from "./Stats"
import Landing from "./Landing"

class App extends Component {

  render() {
    return (
      <Router>
        <div className={styles.fontAll}>
            <div>
              <Route exact path="/" component={Chart} />
              <Route exact path="/stats" component={Stats} />
              <Route exact path="/temp-landing" component={Landing} />
            </div>
        </div>
      </Router>
    )
  }
}

export default App
