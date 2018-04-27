import React, { Component } from "react"
import styles from "../componentStyles/Landing.css"

class Landing extends Component {
  render () {
    return(
      <div className={styles.landingContain}>
        <section className={styles.introSection}>
          <div className={styles.logo}>Chorely</div>
          <div className={styles.cornerButtons}>
            <button className={styles.loginButton}>Log In</button>
            <button className={styles.loginButton}>Sign Up</button>
          </div>
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
        <section className={styles.explainSection}>
          <div className={styles.explainBlock}>
            <div className={styles.explainContent}>It's Chorely, bitch. U live with filthy monsters. Keep track of your shit!</div>
          </div>
          <div className={styles.explainBlock}>
            <div className={styles.explainContent}>Set up an account for your household. Create chores and assign them values.</div>
          </div>
          <div className={styles.explainBlock}>
            <div className={styles.explainContent}>Score points and find harmony! U have the power to create your destiny.</div>
          </div>
        </section>
        <section className={styles.signupSection}></section>
      </div>
    )
  }
}

export default Landing
