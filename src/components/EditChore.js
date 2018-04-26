import React from "react";
import styles from "../componentStyles/EditChore.css";
import { connect } from "react-redux";
import { updateChore } from "../actions/chore-actions"

export class EditChore extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      choreName: this.props.choreName,
      pointValue: this.props.pointValue,
      timesPerWeek: this.props.timesPerWeek,
      id: this.props.id,
      validateDisplay: false
    }
  }

  handleInput(event, key) {
    this.setState({
      [key]: event.target.value
    })
      console.log(event.target.value, this.state)
  }

  editChore(event) {
    event.preventDefault()
    if (this.state.choreName.trim() === "") {
      this.showValidator()
    } else {
      this.props.dispatch(updateChore(this.state));
      this.props.toggleForm()
    }
  }

  showValidator() {
    this.setState({
      validateDisplay: !this.state.validateDisplay
    })
  }

  render() {

    let inputRequired;
    if (this.state.validateDisplay) {
      inputRequired = <div className={styles.validate}>Required</div>
    }

    return (
      <form
        className={styles.formBox}
        onSubmit={this.editChore.bind(this)}
      >
        {inputRequired}
        <input
          name="choreName"
          type="text"
          ref={input => (this.textInput = input)}
          placeholder="Chore Title"
          className={styles.choreTitle}
          value={this.state.choreName}
          maxLength="25"
          onChange={e => this.handleInput(e, "choreName")}
        />
        <div className={styles.pointContain}>
          <select name="pointValue"
            className={styles.pointField}
            onChange={e => this.handleInput(e, "pointValue")}
            >
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
          <select name="timesPerWeek"
            className={styles.weekField}
            onChange={e => this.handleInput(e, "timesPerWeek")}

            >
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

export const mapStateToProps = state => ({
  chores: state.chart.chores
});

export default connect(mapStateToProps)(EditChore);
