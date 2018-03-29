import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBarMobile.css"
import NavDrawer from "./NavDrawer"
// import { withRouter } from 'react-router'

export class NavBarMobile extends Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)

    this.state = {
      drawerOpen: false
    }
  }
  onClick() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }
render() {
  return(
      <div className={styles.navContainer}>
        <Link to="/" className={styles.headerLink}>
          <h1>Chorely</h1>
        </Link>
        <nav>
          <div className={styles.hamburgerIcon} onClick={() => {this.onClick()}}>☰</div>
          <NavDrawer action={this.onClick} drawerOpen={this.state.drawerOpen} />
        </nav>
    </div>
  )
}
}

export default NavBarMobile;
