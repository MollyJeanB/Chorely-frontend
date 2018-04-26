import React from "react";
import { reduxForm, Field, reset } from "redux-form";
import styles from "../componentStyles/MemberForm.css";
import { postMember } from "../actions/member-actions";
import { required, nonEmpty } from "../validators";
import Input from "./Input";

function afterSubmit(result, dispatch) {
  dispatch(reset("formReducer"));
}

export class MemberForm extends React.Component {

  state= {
    dropDownDisplay: false
  }

  showDropdown(event) {
    event.preventDefault();
    this.setState({
      dropDownDisplay: !this.state.dropDownDisplay
    });
  }

  onSubmit(values) {
   let colorArray = ["orange", "yellow", "green", "fuschia", "purple"];
   let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
   this.props.color && this.props.color !== "#C2C2C3"
     ? (values.color = this.props.color)
     : (values.color = randomColor);
   this.props.dispatch(postMember(values));
   this.props.showEdit()
   this.props.revertColor()
  }

  render() {

    let dropdown;
    if (this.state.dropDownDisplay) {
      dropdown =(
        <div
            className={styles.dropdownContent}
            onClick={e => this.props.chooseColor(e)}
          >
            <div className={styles.red} data-color="red" aria-label="red" />
            <div className={styles.orange} data-color="orange" aria-label="orange"/>
            <div className={styles.yellow} data-color="yellow" aria-label="yellow" />
            <div className={styles.green} data-color="green" aria-label="green" />
            <div className={styles.brightBlue} data-color="brightBlue" aria-label="bright blue" />
            <div className={styles.cornflowerBlue} data-color="cornflowerBlue" aria-label="cornflower blue" />
            <div className={styles.purple} data-color="purple" aria-label="purple" />
            <div className={styles.fuschia} data-color="fuschia" aria-label="fuschia" />
            <div className={styles.pink} data-color="pink" aria-label="pink" />
          </div>)
    }

    return (
      <form
        className={styles.formBox}
        onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}
      >
        <Field
          name="name"
          type="text"
          ref={input => (this.textInput = input)}
          component={Input}
          validate={[required, nonEmpty]}
          props={{
            styleClassName: "nameField",
            placeholder: "Name"
          }}
        />
        <div className={styles.dropdown}>
          <button
            className={styles.dropbtn}
            onClick={e => this.showDropdown(e)}
            >Color</button>
          {dropdown}

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
