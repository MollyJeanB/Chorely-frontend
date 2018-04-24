import React, { Component } from "react"
import styles from "../componentStyles/App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavBar from "./NavBar"
import NavBarMobile from "./NavBarMobile"
import Chart from "./Chart"
import Stats from "./Stats"

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className={styles.fontAll}>
          <NavBar />
          <NavBarMobile />
            <div>
              <Route exact path="/" component={Chart} />
              <Route exact path="/stats" component={Stats} />
            </div>
        </div>
      </Router>
    )
  }
}

export default App
