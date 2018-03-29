import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.css"

export class NavBar extends Component {
render() {
  return(
      <div className={styles.navContainer}>
        <Link to="/" className={styles.headerLink}>
          <h1>Chorely</h1>
        </Link>
        <nav>
          <div className={styles.navWide}>
            <Link className={styles.navLink} to="/">This Week</Link>
            <Link className={styles.navLink} to="/stats">Household Stats</Link>
            <Link className={styles.navLink} to="/">Log Out</Link>
          </div>
        </nav>
    </div>
  )
}
}

export default NavBar;
