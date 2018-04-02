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
            <img className={styles.housemateIcon} alt="Person Icon" src={require("../images/housemate.png")}></img>
            <div className={styles.addPerson}>Add Person</div>
            <form className={styles.formBox}>
            <Field
              name="enterName"
              type="text"
              component="input"
              placeholder="Name"
              className={styles.nameField}
             />
             <div className={styles.dropdown}>
               <button className={styles.dropbtn}>Color</button>
               <div className={styles.dropdownContent}>
                 <div className={styles.red}></div>
                 <div className={styles.orange}></div>
                 <div className={styles.yellow}></div>
                 <div className={styles.green}></div>
                 <div className={styles.brightBlue}></div>
                 <div className={styles.cornflowerBlue}></div>
                 <div className={styles.purple}></div>
                 <div className={styles.fuschia}></div>
                 <div className={styles.pink}></div>
               </div>
             </div>
             <div className={styles.buttonBox}>
               <button
                 type="submit"
                 className={styles.saveButton}
                 >Save</button>
               <button
                 className={styles.cancelButton}
                 >Cancel</button>
             </div>
          </form>
          </div>
        </div>
    </div>
    )
  }
}

export default reduxForm({ form: "formReducer" })(HouseholdMemberForm)
