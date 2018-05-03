import React, { Component } from "react"
import styles from "../componentStyles/App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Chart from "./Chart"
import Stats from "./Stats"
import Landing from "./Landing"
import {connect} from "react-redux"

class App extends Component {


  render() {

    let component;
    if (this.props.isLoggedin) {
      component = Chart
    } else {component = Landing}

    return (
      <Router>
        <div className={styles.fontAll}>
            <div>
              <Route exact path="/" component={component} />
              <Route exact path="/stats" component={Stats} />
              {/* <Route exact path="/temp-landing" component={Landing} /> */}
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
