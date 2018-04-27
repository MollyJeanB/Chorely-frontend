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
    <div className={styles.iconBox}>
      <div className={styles.iconContain}>
        <img
          className={styles.choreIcon}
          alt="Bar graph icon"
          src={require("../images/bar-chart.png")} />
      </div>
      <div className={styles.iconContain}>
        <img
          className={styles.choreIcon}
          alt="House icon"
          src={require("../images/house.png")} />
      </div>
      <div className={styles.iconContain}>
        <img
          className={styles.choreIcon}
          alt="Pie chart icon"
          src={require("../images/pie-chart.png")} />
      </div>
    </div>
  </div>

)
