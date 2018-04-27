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
            <button className={styles.signupButton}>Sign Up</button>
          </div>
          <div className={styles.headlineContain}>
            <div className={styles.iconBox}>
              <div className={styles.iconContain}>
                <img
                  className={styles.choreIcon}
                  alt="Bucket and mop icon"
                  src={require("../images/bucket.png")} />
              </div>
              <div className={styles.iconContain}>
                <img
                  className={styles.choreIcon}
                  alt="Trash and recycling bins icon"
                  src={require("../images/trash-cans.png")} />
              </div>
              <div className={styles.iconContain}>
                <img
                  className={styles.choreIcon}
                  alt="Dish soap bottle and stack of clean plates icon"
                  src={require("../images/liquid.png")} />
              </div>
            </div>
            <div className={styles.question}>Who does the most chores in your house?</div>
          </div>
        </section>
        <section className={styles.explainSection}>
          <div className={styles.explainBlock}>
            <div className={styles.explainContent}>It's Chorely, bitch. U live with filthy monsters. Keep track of your shit! (Chorely is an easy peasy chore chart that makes a friendly competition out of keeping your shared spaces tidy.)</div>
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
