import React, { Component } from "react"
import styles from "../componentStyles/App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Chart from "./Chart"
import Stats from "./Stats"
import Landing from "./Landing"
import {connect} from "react-redux"

class App extends Component {


  render() {

//if logged in (auth token in browser), show chore chart with user's data on the "/" route. Otherwise show landing page
    let component,
    statsComponent;
    if (this.props.isLoggedin) {
      component = Chart
      statsComponent = Stats
    } else {
      component = Landing
      statsComponent = Landing
    }

    return (
      <Router>
        <div className={styles.fontAll}>
            <div>
              <Route exact path="/" component={component} />
              <Route exact path="/stats" component={statsComponent} />
            </div>
        </div>
      </Router>
    )
  }
}

export const mapStateToProps = state => ({
  isLoggedin: state.chart.isLoggedin

})

export default connect(mapStateToProps)(App)
