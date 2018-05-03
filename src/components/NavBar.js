import React from "react";
import { Link } from "react-router-dom";
import styles from "../componentStyles/NavBar.css"
import { logout } from "../actions/actions"

export class NavBar extends React.Component {

  logOut() {
    this.props.dispatch(logout())
  }

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
              <Link onClick={() => this.logOut()} className={styles.navLink} to="/">Log Out</Link>
            </div>
          </nav>
      </div>
    )
  }

}

export default NavBar
