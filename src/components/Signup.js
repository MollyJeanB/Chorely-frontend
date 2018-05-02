import React, { Component } from "react"
import styles from "../componentStyles/Signup.css"
import { connect } from "react-redux";
import {postNewUser} from "../actions/actions"

function hasWhiteSpace(string) {
  return string.indexOf(" ") >= 0;
}

class Signup extends Component {

  constructor(props) {
    super(props)
      this.state = {
        houseName: "",
        username: "",
        password: "",
        passwordValidate: "",
        usernameValidate: ""
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
      if (hasWhiteSpace(credentials.username)) {
        this.setState({
          usernameValidate: "Username cannot contain spaces"
        })
      } else if (hasWhiteSpace(credentials.password)) {
        this.setState({
          passwordValidate: "Password cannot contain spaces"
        })
      } else if (credentials.username.trim() === "") {
        this.setState({
          usernameValidate: "Username required"
        })
      } else if (credentials.password.trim() === "") {
        this.setState({
          passwordValidate: "Password required"
        })
      } else if (credentials.password.length < 7) {
        this.setState({
          passwordValidate: "Password must be at least 7 characters"
        })
      }
      else {
        this.props.dispatch(postNewUser(credentials))
        this.setState({
          houseName: "",
          username: "",
          password: "",
          passwordValidate: "",
          usernameValidate: ""
      })
    }
  }

  render() {

    let passwordValidationMessage;
    let usernameValidationMessage;
    let postFail;
    let successDirect;

    if (this.props.successMessage) {
      console.log(this.props)
      successDirect = (
        <div className={styles.welcomeMessage}>Welcome, {this.props.newHouseName}!
          To get started, <span className={styles.linkToTop} onClick={(e) => this.props.goToLogin(e)}>login</span> at the top of the page.
        </div>
      )
    }

    if (this.props.failMessage) {
      console.log("registered in component")
      postFail = <div className={styles.postFailMessage}>Request failed. Username is already taken.</div>
    }

    if (this.state.passwordValidate !== "") {
      passwordValidationMessage = <div className={styles.passwordValidateMessage}>{this.state.passwordValidate}</div>
    }

    if (this.state.usernameValidate !== "") {
      usernameValidationMessage = <div className={styles.usernameValidateMessage}>{this.state.usernameValidate}</div>
    }


    return (
      <div className={styles.signupContain}>
          {successDirect}
        <p className={styles.introPar}>Make an account for your household & let the games begin!</p>
        <p className={styles.demoInfo}>To see a demo account, <span className={styles.linkToTop} onClick={(e) => this.props.goToLogin(e)}>login</span> at the top of the page with these credentials:</p>
        <p className={styles.demoInfo}> Username: <b>OurHouse</b>  |  Password: <b>chore1234</b></p>
        {postFail}
        <form className={styles.formContain} onSubmit={this.handleSubmit}>
          <label className={styles.signupLabel}>House Name</label>
          <input
            id="houseName"
            type="text"
            className={styles.signupInput}
            placeholder="Fun House"
            onChange={e => this.handleInput(e, "houseName")}
            value={this.state.houseName}
            ></input>
            <label className={styles.signupLabel}>Username</label>
          {usernameValidationMessage}
          <input
            id="username"
            type="text"
            className={styles.signupInput}
            placeholder="FunHouse"
            onChange={e => this.handleInput(e, "username")}
            value={this.state.username}
            ></input>
            <label className={styles.signupLabel}>Password</label>
          {passwordValidationMessage}
          <input
            id="password"
            type="password"
            className={styles.signupInput}
            placeholder="•••••••••"
            onChange={e => this.handleInput(e, "password")}
            value={this.state.password}
            ></input>
            <button className={styles.submitSignupButton} type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  successMessage: state.chart.successMessage,
  newHouseName: state.chart.newHouseName,
  failMessage: state.chart.failMessage
})

export default connect(mapStateToProps)(Signup)
