import React, { Component } from "react"
import styles from "../componentStyles/Login.css"
import { connect } from "react-redux";
import { login } from "../actions/actions"

class Login extends Component {

  constructor(props) {
    super(props)
      this.state = {
        username: "",
        password: ""
      }
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(event, key) {
      this.setState({
        [key]: event.target.value
      })
    }

    handleSubmit(event) {
      event.preventDefault()
      let credentials = this.state
      console.log(credentials)
      this.props.dispatch(login(credentials))
    }


  render() {
    const slideDown =
      this.props.slideDown ?
        styles.loginContain + ' ' + styles.slideDown :
        styles.loginContain;

    return (
      <div className={slideDown}>
        <div className={styles.demoBox}>
          <p className={styles.demoInfo}>To see a demo account, use these credentials:</p>
          <p className={styles.demoInfo}> Username: <b>OurHouse</b>  |  Password: <b>chore1234</b></p>
        </div>
        <form className={styles.formContain} onSubmit={this.handleSubmit}>
            <label className={styles.loginLabel}>Username</label>
          <input
            id="usernameLogin"
            type="text"
            className={styles.loginInput}
            placeholder="username"
            onChange={e => this.handleInput(e, "username")}
            ></input>
            <label className={styles.loginLabel}>Password</label>
          <input
            id="passwordLogin"
            type="password"
            className={styles.loginInput}
            placeholder="•••••••"
            onChange={e => this.handleInput(e, "password")}
            ></input>
            <button className={styles.submitLoginButton} type="submit">Log In</button>
            <button className={styles.closeButton} aria-label="close" onClick={(e) => this.props.toggleLogin(e)}>x</button>
        </form>
      </div>
    )
  }
}

export default connect(null)(Login)
