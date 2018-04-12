import React from "react";
import styles from "../componentStyles/EditChore.css";
import { connect } from "react-redux";

export class EditChore extends React.Component {
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
        <input
          name="choreName"
          type="text"
          ref={input => (this.textInput = input)}
          placeholder="Chore Title"
          className={styles.choreTitle}
        />
        <div className={styles.pointContain}>
          <select name="pointValueField" className={styles.pointField}>
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
          </select>
        </div>
        <div className={styles.weekContain}>
          <select name="timesPerWeekField" className={styles.weekField}>
            <option value="1">Times Per Week</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
        <div className={styles.buttonBox}>
          <button type="submit" className={styles.saveButton}>
            Save
          </button>
          <button
            className={styles.cancelButton}
            onClick={() => {
              this.props.toggleForm();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default connect(null)(EditChore);
