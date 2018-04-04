import React from "react"
// import { reduxForm, Field } from "redux-form"
import styles from "../componentStyles/MemberForm.css"
import {
  showMemberForm,
  chooseMemberColor,
  submitNewMember,
  chooseMemberName
} from "../actions/actions"
import { connect } from "react-redux"

export class MemberForm extends React.Component {
  onClick() {
    this.props.dispatch(showMemberForm())
  }

  chooseColor(event) {
    const color = event.target.getAttribute("data-color")
    this.props.dispatch(chooseMemberColor(color))
  }

  chooseName(event) {
    const name = this.memberNameInput.value
    this.props.dispatch(chooseMemberName(name))
  }

  submitForm(event) {
    event.preventDefault()
    this.props.dispatch(submitNewMember())
  }

  render() {
    return (
      <form className={styles.formBox} onSubmit={e => this.submitForm(e)}>
        <input
          name="enterName"
          type="text"
          placeholder="Name"
          className={styles.nameField}
          ref={input => (this.memberNameInput = input)}
          onChange={e => this.chooseName(e)}
        />
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Color</button>
          <div
            onClick={e => this.chooseColor(e)}
            className={styles.dropdownContent}
          >
            <div className={styles.red} data-color="red" />
            <div className={styles.orange} />
            <div className={styles.yellow} />
            <div className={styles.green} />
            <div className={styles.brightBlue} />
            <div className={styles.cornflowerBlue} />
            <div className={styles.purple} />
            <div className={styles.fuschia} />
            <div className={styles.pink} />
          </div>
        </div>
        <div className={styles.buttonBox}>
          <button type="submit" className={styles.saveButton}>
            Save
          </button>
          <button
            className={styles.cancelButton}
            onClick={() => {
              this.onClick()
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    )
  }
}
//
// export default reduxForm({
//   form: "formReducer"
// })(MemberForm)

const mapStateToProps = state => {
  const { memberColor, memberName } = state.chart
  return {
    color: memberColor,
    name: memberName
  }
}

export default connect(mapStateToProps)(MemberForm)
