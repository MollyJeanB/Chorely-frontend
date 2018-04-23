import React from "react";
import styles from "../componentStyles/EditChore.css";
import { connect } from "react-redux";
import { updateChore } from "../actions/chore-actions"

export class EditChore extends React.Component {

  onSubmit(values, id) {
    console.log(values, id)
    this.props.dispatch(updateChore(values, id))

  }

  render() {

const { id, choreName, pointValue, timesPerWeek } = this.props;

    return (
      <form
        key={id}
        className={styles.formBox}
        onSubmit={e => this.onSubmit(e, id)}
      >
        <input
          name="choreName"
          type="text"
          ref={input => (this.textInput = input)}
          placeholder="Chore Title"
          className={styles.choreTitle}
        />
        <div className={styles.pointContain}>
          <select name="pointValue" className={styles.pointField}>
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
          <select name="timesPerWeek" className={styles.weekField}>
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
