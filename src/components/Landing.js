import React, { Component } from "react"
import styles from "../componentStyles/Landing.css"

class Landing extends Component {
  render () {
    return(
      <div className={styles.landingContain}>
        <section className={styles.introSection}>
          <div className={styles.logo}>Chorely</div>
          <button className={styles.loginButton}>Log In</button>
          <div className={styles.iconBox}>
            <img
              className={styles.choreIcon}
              alt="Bucket and mop icon"
              src={require("../images/bucket.png")} />
            <img
              className={styles.choreIcon}
              alt="Trash and recycling bins icon"
              src={require("../images/trash-cans.png")} />
            <img
              className={styles.choreIcon}
              alt="Dish soap bottle and stack of clean plates icon"
              src={require("../images/liquid.png")} />
          </div>
          <div className={styles.question}>Who does the most chores in your house?</div>
        </section>
        <section className={styles.explainSection}></section>
        <section className={styles.signupSection}></section>
      </div>
    )
  }
}

export default Landing
