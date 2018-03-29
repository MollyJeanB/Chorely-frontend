import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../componentStyles/NavBarMobile.css"
import NavDrawer from "./NavDrawer"
import {connect} from "react-redux"
import {expandMenu} from "../actions"

export class NavBarMobile extends Component {
  onClick() {
    this.props.dispatch(expandMenu())
  }
render() {
  return(
      <div className={styles.navContainer}>
        <Link to="/" className={styles.headerLink}>
          <h1>Chorely</h1>
        </Link>
        <nav>
          <div className={styles.hamburgerIcon} onClick={() => {this.onClick()}}>☰</div>
          <NavDrawer />
        </nav>
    </div>
  )
}
}

export default connect()(NavBarMobile);
