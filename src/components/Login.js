import React, { Component } from "react"
import styles from "../componentStyles/Login.css"

class Login extends Component {
  render() {
    return (
      <div className={styles.loginContain}>
        <div className={styles.demoBox}>
          <p className={styles.demoInfo}>To see a demo account, use these credentials:</p>
          <p className={styles.demoInfo}> Username: <b>OurHouse</b>  |  Password: <b>chore1234</b></p>
        </div>
        <form className={styles.formContain}>
            <label className={styles.loginLabel}>Username</label>
          <input
            id="userName"
            type="text"
            className={styles.loginInput}
            placeholder="username"
            ></input>
            <label className={styles.loginLabel}>Password</label>
          <input
            id="password"
            type="text"
            className={styles.loginInput}
            placeholder="•••••••"
            ></input>
            <button className={styles.submitLoginButton} type="submit">Log In</button>
            <button className={styles.closeButton} aria-label="close">x</button>
        </form>
      </div>
    )
  }
}

export default Login
