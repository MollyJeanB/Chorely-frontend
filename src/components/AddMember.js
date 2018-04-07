import React from "react"
import MemberForm from "./MemberForm"
import styles from "../componentStyles/AddMember.css"
import { connect } from "react-redux"
import { showMemberForm } from "../actions/actions"
import Colors from "../colors"

export class AddMember extends React.Component {
  state = {
    formDisplay: false
  }

  showEdit(event) {
    this.setState({
      formDisplay: !this.state.formDisplay
    })
  }

  cancelForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    })
  }

  chooseColor(event) {
    const color = event.target.getAttribute("data-color")
    this.setState({
      color: color
    })
  }

  render() {
    let formComponent
    if (this.state.formDisplay) {
      formComponent = (
        <MemberForm
          chooseColor={this.chooseColor.bind(this)}
          cancelForm={this.cancelForm.bind(this)}
        />
      )
    }

    let style = {}
    if (this.state.color) {
      style = {
        backgroundColor: Colors[this.state.color]
      }
    }
    return (
      <div className={styles.newPersonContainer}>
        <div className={styles.housemateIconContainer} style={style}>
          <img
            className={styles.housemateIcon}
            alt="Person Icon"
            src={require("../images/housemate.png")}
            onClick={() => {
              this.onClick()
            }}
          />
          <div
            className={styles.addPerson}
            onClick={() => {
              this.showEdit()
            }}
          >
            Add Person
          </div>
          {formComponent}
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  memberFormDisplayed: state.chart.memberFormDisplayed,
  memberColor: state.chart.memberColor
})

export default connect(mapStateToProps)(AddMember)
