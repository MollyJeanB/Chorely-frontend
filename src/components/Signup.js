import React, { Component } from "react"
import styles from "../componentStyles/Signup.css"
import { connect } from "react-redux";
import {postNewUser} from "../actions/actions"

class Signup extends Component {

  constructor(props) {
    super(props)
      this.state = {
        houseName: "",
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
      this.props.dispatch(postNewUser(credentials))
    }



  render() {
    return (
      <div className={styles.signupContain}>
        <p className={styles.introPar}>Make an account for your household & let the games begin!</p>
        <p className={styles.demoInfo}>To see a demo account, <span className={styles.linkToTop} onClick={(e) => this.props.goToLogin(e)}>login</span> at the top of the page with these credentials:</p>
        <p className={styles.demoInfo}> Username: <b>OurHouse</b>  |  Password: <b>chore1234</b></p>
        <form className={styles.formContain} onSubmit={this.handleSubmit}>
          <label className={styles.signupLabel}>House Name</label>
          <input
            id="houseName"
            type="text"
            className={styles.signupInput}
            placeholder="Fun House"
            onChange={e => this.handleInput(e, "houseName")}
            ></input>
            <label className={styles.signupLabel}>Username</label>
          <input
            id="username"
            type="text"
            className={styles.signupInput}
            placeholder="FunHouse"
            onChange={e => this.handleInput(e, "username")}
            ></input>
            <label className={styles.signupLabel}>Password</label>
          <input
            id="password"
            type="password"
            className={styles.signupInput}
            placeholder="•••••••••"
            onChange={e => this.handleInput(e, "password")}
            ></input>
            <button className={styles.submitSignupButton} type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null)(Signup)
