import React from "react"
import { reduxForm, Field } from "redux-form";
import styles from "../componentStyles/MemberForm.css"
import {showMemberForm, submitNewMember, changeColor} from "../actions/actions"
import {required, nonEmpty} from "../validators"

export class MemberForm extends React.Component {

  onClick() {
    this.props.dispatch(showMemberForm())
  }

  chooseColor(event) {
    const color = event.target.getAttribute("data-color")
    this.props.dispatch(changeColor(color))

  }

  onSubmit(values) {
  this.props.dispatch(submitNewMember(values))

  }

  render() {
    return (
      <form
        className={styles.formBox}
        onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} >
      <Field
        name="enterName"
        type="text"
        ref={input => this.textInput = input}
        component="input"
        placeholder="Name"
        className={styles.nameField}
        validate={[required, nonEmpty]}
       />
       <div className={styles.dropdown}>
         <button className={styles.dropbtn}>Color</button>
         <div
           className={styles.dropdownContent}
           onClick={e => this.chooseColor(e)}
           >
           <div
             className={styles.red}
             data-color="red"
             ></div>
           <div
             className={styles.orange}
             data-color="orange"
             ></div>
           <div
             className={styles.yellow}
             data-color="yellow"
             ></div>
           <div
             className={styles.green}
             data-color="green"
             ></div>
           <div
             className={styles.brightBlue}
             data-color="brightBlue"
             ></div>
           <div
             className={styles.cornflowerBlue}
             data-color="cornflowerBlue"
             ></div>
           <div
             className={styles.purple}
             data-color="purple"
             ></div>
           <div
             className={styles.fuschia}
             data-color="fuschia"
             ></div>
           <div
             className={styles.pink}
             data-color="pink"
             ></div>
         </div>
       </div>
       <div className={styles.buttonBox}>
         <button
           type="submit"
           className={styles.saveButton}
           >Save</button>
         <button
           className={styles.cancelButton}
           onClick={() => {this.onClick()}}
           >Cancel</button>
       </div>
      </form>
    )
  }
}

export default reduxForm({ form: "formReducer" })(MemberForm);
