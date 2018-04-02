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
            <form className={styles.formBox}>
            <Field
              name="enterName"
              type="text"
              component="input"
              placeholder="Name"
              className={styles.nameField}
             />
            <Field
              name="colorSelect"
              component="select"
              className={styles.selectColor}>
              <option value="">Color</option>
              <option value="#ff0000">Red</option>
              <option value="#00ff00">Green</option>
              <option value="#0000ff">Blue</option>
            </Field>
            <button
              type="submit"
              className={styles.saveButton}
              >Save</button>
            <button
              className={styles.cancelButton}
              >Cancel</button>
          </form>
          </div>
        </div>
    </div>
    )
  }
}

export default reduxForm({ form: "formReducer" })(HouseholdMemberForm)
