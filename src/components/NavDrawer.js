import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./NavDrawer.css"

export class NavDrawer extends Component {
render() {

let containerClasses = [styles.drawerContainer]
if (this.props.drawerOpen) {
  containerClasses.push(styles.open)
} else {containerClasses = [styles.drawerContainer]}

  return(
          <div className={containerClasses.join(' ')}>
            <Link onClick={this.props.action} className={styles.navLink} to="/">This Week</Link>
            <Link onClick={this.props.action} className={styles.navLink} to="/stats">Household Stats</Link>
            <Link onClick={this.props.action} className={styles.navLink} to="/">Log Out</Link>
          </div>
  )
}
}

export default NavDrawer;
