import React from "react"
import styles from "../componentStyles/Stats.css"
import NavBar from "./NavBar"
import NavBarMobile from "./NavBarMobile"

export default props => (
  <div>
    <NavBar />
    <NavBarMobile />
    <div className={styles.statsContainer}>Household stats tracking coming soon!
    </div>
  </div>

)
