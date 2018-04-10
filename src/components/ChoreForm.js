import React from "react";
import { reduxForm, Field, reset } from "redux-form";
import styles from "../componentStyles/ChoreForm.css";
import { required, nonEmpty } from "../validators";
import Input from "./Input";

export class ChoreForm extends React.Component {
  // onSubmit(values) {
  //   if (values.choreTitle) {
  //     values.choreTitle = this.props.choreTitle;
  //     this.props.dispatch(submitNewChore(values));
  //   } else {
  //     return;
  //   }
  // }

  render() {
    return (
      <form
        className={styles.formBox}
        // onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}
      >
        <Field
          name="choreName"
          type="text"
          ref={input => (this.textInput = input)}
          component={Input}
          placeholder="Chore Title"
          className={styles.choreTitle}
          validate={[required, nonEmpty]}
        />
        <div>
          <Field name="pointValueField" component="select">
            <option value="1">Point Value</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Field>
        </div>
        <div>
          <Field name="timesPerWeekField" component="select">
            <option value="1">Times Per Week</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </Field>
        </div>
        <div className={styles.buttonBox}>
          <button type="submit" className={styles.saveButton}>
            Save
          </button>
          <button
            className={styles.cancelButton}
            onClick={() => {
              this.props.cancelForm();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: "formReducer" })(ChoreForm);
