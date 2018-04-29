import React, { Component } from "react"
import styles from "../componentStyles/Signup.css"

class Signup extends Component {
  render() {
    return (
      <div className={styles.signupContain}>
        <p className={styles.introPar}>Make an account for your household & let the games begin!</p>
        <p className={styles.demoInfo}>To see a demo account, <span className={styles.linkToTop} onClick={() => this.props.goToLogin()}>login</span> at the top of the page with these credentials:</p>
        <p className={styles.demoInfo}> Username: <b>OurHouse</b>  |  Password: <b>chore1234</b></p>
        <form className={styles.formContain}>
          <label className={styles.signupLabel}>House Name</label>
          <input
            id="houseName"
            type="text"
            className={styles.signupInput}
            placeholder="Fun House"
            ></input>
            <label className={styles.signupLabel}>Username</label>
          <input
            id="userName"
            type="text"
            className={styles.signupInput}
            placeholder="FunHouse"
            ></input>
            <label className={styles.signupLabel}>Password</label>
          <input
            id="password"
            type="text"
            className={styles.signupInput}
            placeholder="•••••••••"
            ></input>
            <button className={styles.submitSignupButton} type="submit">Submit</button>

        </form>
      </div>
    )
  }
}

export default Signup
