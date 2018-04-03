import React from "react"
import { reduxForm, Field } from "redux-form";
import styles from "../componentStyles/MemberForm.css"

export class MemberForm extends React.Component {
  render() {
    return (
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
    )
  }
}

export default reduxForm({ form: "formReducer" })(MemberForm)
