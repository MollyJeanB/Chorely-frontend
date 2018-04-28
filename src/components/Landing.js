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
                  alt="Dish soap and dishes icon"
                  src={require("../images/spray.png")} />
              </div>
            </div>
            <div className={styles.question}>Who does the most chores in your house?</div>
          </div>
        </section>
        <section className={styles.explainSection}>
          <div className={styles.explainBlock}>
            <div className={styles.explainIconContain}>
              <img
                className={styles.explainIcon}
                alt="Note pad icon"
                src={require("../images/note.png")} />
            </div>
            <div className={styles.explainContent}>Chorely is an easy peasy chore chart that makes a friendly competition out of keeping shared spaces tidy. Because life's too short to waste time bickering over who cleaned the sink trap last.</div>
          </div>
          <div className={styles.explainBlock}>
            <div className={styles.explainIconContain}>
              <img
                className={styles.explainIcon}
                alt="House icon"
                src={require("../images/house.png")} />
            </div>
            <div className={styles.explainContent}>Get started in a flash! Just create an account for your household. With a few taps or clicks, you can set up a leaderboard for your household members and create a weekly chore list.</div>
          </div>
          <div className={styles.explainBlock}>
            <div className={styles.explainIconContain}>
              <img
                className={styles.explainIcon}
                alt="Star sticker icon"
                src={require("../images/sticker.png")} />
            </div>
            <div className={styles.explainContent}>Assign point values to chores & choose how many times they should be done each week. Then check off chores as you complete them to score points. No more tantrums & passive aggressive notes!</div>
          </div>
        </section>
        <section className={styles.signupSection}></section>
      </div>
    )
  }
}

export default Landing
