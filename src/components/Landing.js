import React, { Component } from "react"
import styles from "../componentStyles/Landing.css"
import Signup from "./Signup"
import Login from "./Login"

class Landing extends Component {

  state = {
    loginDisplay: false
  }

  scrollToForm(id) {
    const scrollDiv = document.getElementById(id)
    scrollDiv.scrollIntoView({behavior: "smooth"})
  }

  toggleLogin() {
    this.setState({
      loginDisplay: !this.state.loginDisplay
    })
  }

  goToLogin() {
    this.scrollToForm("corner");
    if (!this.state.loginDisplay) {
      this.toggleLogin()
  }
}

  render() {

    // const loginDisplay = this.props

    let loginForm;
    if (this.state.loginDisplay) {
      loginForm = (
        <Login
          // {...this.props}
          toggleLogin={this.toggleLogin.bind(this)}
         />
      )
    }

    return(
      <div className={styles.landingContain}>
        <section className={styles.introSection}>
          {loginForm}
          <div className={styles.logo}>Chorely</div>
          <div className={styles.cornerButtons} id={"corner"}>
            <button className={styles.loginButton} onClick={() => this.toggleLogin()}>Log In</button>
            <button className={styles.signupButton} onClick={() => this.scrollToForm("signup")}>Sign Up</button>
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
            <div className={styles.explainContent}><b>Chorely is an easy peasy</b> chore chart that makes a friendly competition out of keeping shared spaces tidy. Because life's too short to waste time bickering over who cleaned the sink trap last.</div>
          </div>
          <div className={styles.explainBlock}>
            <div className={styles.explainIconContain}>
              <img
                className={styles.explainIcon}
                alt="House icon"
                src={require("../images/house.png")} />
            </div>
            <div className={styles.explainContent}><b>Get started in a flash!</b> Just create an account for your household. With a few taps or clicks, you can set up a leaderboard for your household members and create a weekly chore list.</div>
          </div>
          <div className={styles.explainBlock}>
            <div className={styles.explainIconContain}>
              <img
                className={styles.explainIcon}
                alt="Star sticker icon"
                src={require("../images/sticker.png")} />
            </div>
            <div className={styles.explainContent}><b>Assign point values to chores</b> & choose how many times they should be done each week. Then check off chores as you complete them to score points. No more tantrums & passive aggressive notes!</div>
          </div>
        </section>
        <section className={styles.signupSection} id="signup">
          <Signup
            goToLogin={this.goToLogin.bind(this)}
           />
        </section>
      </div>
    )
  }
}

export default Landing
