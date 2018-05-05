import React, { Component } from "react"
import styles from "../componentStyles/Login.css"
import { connect } from "react-redux";
import { login } from "../actions/actions"

function hasWhiteSpace(string) {
  return string.indexOf(" ") >= 0;
}


class Login extends Component {

  constructor(props) {
    super(props)
      this.state = {
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
      //frontend validators
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
            //if all inputs valid, dispatch login with credentials from the state (set by change in inputs)
      } else {
        this.props.dispatch(login(credentials))
        //reset inputs
        this.setState({
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
    let loginFailMessage;

    if (this.state.passwordValidate !== "") {
      passwordValidationMessage = <div className={styles.passwordValidateMessage}>{this.state.passwordValidate}</div>
    }

    if (this.state.usernameValidate !== "") {
      usernameValidationMessage = <div className={styles.usernameValidateMessage}>{this.state.usernameValidate}</div>
    }

//get message from props in reducer if new user fails to post
    if (this.props.loginFail) {
      loginFailMessage = <div className={styles.loginFailMessage}>Authentication failed. Please check your credentials and try again.</div>
    }


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
        {loginFailMessage}
        <form className={styles.formContain} onSubmit={this.handleSubmit}>
            <label className={styles.loginLabel}>Username</label>
            {usernameValidationMessage}
          <input
            id="usernameLogin"
            type="text"
            className={styles.loginInput}
            placeholder="username"
            value={this.state.username}
            onChange={e => this.handleInput(e, "username")}
            ></input>
            <label className={styles.loginLabel}>Password</label>
            {passwordValidationMessage}
          <input
            id="passwordLogin"
            type="password"
            className={styles.loginInput}
            placeholder="•••••••"
            value={this.state.password}
            onChange={e => this.handleInput(e, "password")}
            ></input>
            <button className={styles.submitLoginButton} type="submit">Log In</button>
            <button className={styles.closeButton} aria-label="close" onClick={(e) => this.props.toggleLogin(e)}>x</button>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  loginFail: state.chart.loginFail
})

export default connect(mapStateToProps)(Login)
