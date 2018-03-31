import React from "react"
import { reduxForm, Field } from "redux-form"
import styles from "../componentStyles/HouseholdMemberForm.css"

export class HouseholdMemberForm extends React.Component {
  onSubmit(name) {
    console.log(name)
  }
  render() {
    return (
      <div className={styles.membersContainer}>
        <div className={styles.newPersonContainer}>
          <div className={styles.housemateIconContainer}>
            <img className={styles.housemateIcon} src={require("../images/housemate.png")}></img>
            <div className={styles.addPerson}>Add Person</div>
          </div>
        </div>
        {/* <form>
        <Field name="colorSelect" component="select">
          <option />
          <option value="#ff0000">Red</option>
          <option value="#00ff00">Green</option>
          <option value="#0000ff">Blue</option>
        </Field>
      </form> */}
    </div>
    )
  }
}

export default reduxForm({ form: "formReducer" })(HouseholdMemberForm)
