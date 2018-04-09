import React from "react";
import { reduxForm, Field, reset } from "redux-form";
import styles from "../componentStyles/MemberForm.css";
import { submitNewMember } from "../actions/actions";
import { required, nonEmpty } from "../validators";
import Input from "./Input";

function afterSubmit(result, dispatch) {
  dispatch(reset("formReducer"));
}

export class MemberForm extends React.Component {
  onSubmit(values) {
    let colorArray = ["orange", "yellow", "green", "fuschia", "purple"];
    let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.props.color
      ? (values.memberColor = this.props.color)
      : (values.memberColor = randomColor);
    this.props.dispatch(submitNewMember(values));
  }

  render() {
    return (
      <form
        className={styles.formBox}
        onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}
      >
        <Field
          name="memberName"
          type="text"
          ref={input => (this.textInput = input)}
          component={Input}
          placeholder="Name"
          className={styles.nameField}
          validate={[required, nonEmpty]}
          props={{
            styleClassName: "nameField",
            placeholder: "Name"
          }}
        />
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Color</button>
          <div
            className={styles.dropdownContent}
            onClick={e => this.props.chooseColor(e)}
          >
            <div className={styles.red} data-color="red" />
            <div className={styles.orange} data-color="orange" />
            <div className={styles.yellow} data-color="yellow" />
            <div className={styles.green} data-color="green" />
            <div className={styles.brightBlue} data-color="brightBlue" />
            <div
              className={styles.cornflowerBlue}
              data-color="cornflowerBlue"
            />
            <div className={styles.purple} data-color="purple" />
            <div className={styles.fuschia} data-color="fuschia" />
            <div className={styles.pink} data-color="pink" />
          </div>
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

export default reduxForm({
  form: "formReducer",
  onSubmitSuccess: afterSubmit
})(MemberForm);
