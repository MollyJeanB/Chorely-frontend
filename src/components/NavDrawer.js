import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../componentStyles/NavDrawer.css"
import {connect} from "react-redux"
import {expandMenu, logout} from "../actions/actions"

export class NavDrawer extends Component {

  menuToggle() {
    this.props.dispatch(expandMenu())
  }

  logOut() {
    this.props.dispatch(logout())
  }


render() {

  let containerClasses = [styles.drawerContainer]
  if (this.props.drawerOpen) {
    containerClasses.push(styles.open)
  } else {containerClasses = [styles.drawerContainer]}

  return(
          <div className={containerClasses.join(' ')}>
            <Link onClick={() => {this.menuToggle()}} className={styles.navLink} to="/">This Week</Link>
            <Link onClick={() => {this.menuToggle()}} className={styles.navLink} to="/stats">Household Stats</Link>
            <Link onClick={() => {this.logOut()}} className={styles.navLink} to="/">Log Out</Link>
          </div>
  )
}
}

export const mapStateToProps = state => ({
  drawerOpen: state.chart.drawerOpen
})

export default connect(mapStateToProps)(NavDrawer);
