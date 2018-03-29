import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./NavDrawer.css"
import {connect} from "react-redux"
import {expandMenu} from "../actions"

export class NavDrawer extends Component {
  onClick() {
    this.props.dispatch(expandMenu())
  }
render() {

let containerClasses = [styles.drawerContainer]
if (this.props.drawerOpen) {
  containerClasses.push(styles.open)
} else {containerClasses = [styles.drawerContainer]}

  return(
          <div className={containerClasses.join(' ')}>
            <Link onClick={() => {this.onClick()}} className={styles.navLink} to="/">This Week</Link>
            <Link onClick={() => {this.onClick()}} className={styles.navLink} to="/stats">Household Stats</Link>
            <Link onClick={() => {this.onClick()}} className={styles.navLink} to="/">Log Out</Link>
          </div>
  )
}
}

export const mapStateToProps = state => ({
  drawerOpen: state.drawer.drawerOpen
})

export default connect(mapStateToProps)(NavDrawer);
