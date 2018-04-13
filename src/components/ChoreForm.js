import React from "react";
import styles from "../componentStyles/ChoreForm.css";
import { connect } from "react-redux";

export class ChoreForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      choreName: "",
      pointValueField: 1,
      timesPerWeekField: 1,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleName(event) {
    this.setState({
      choreName: event.target.value
    })
  }

  handlePointValue(event) {
    this.setState({
      pointValueField: event.target.value
    })
  }

  handleTimesPerWeek(event) {
    this.setState({
      timesPerWeekField: event.target.value
    })
  }


  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
    this.props.toggleForm()
    this.setState = {
      choreName: "",
      pointValueField: 1,
      timesPerWeekField: 1,
    }
  }

  render() {
    return (
      <form
        className={styles.formBox}
        onSubmit={this.handleSubmit}
      >
        <input
          name="choreName"
          type="text"
          ref={input => (this.textInput = input)}
          placeholder="Chore Title"
          className={styles.choreTitle}
          value={this.state.value}
          onChange={e => this.handleName(e)}
        />
        <div className={styles.pointContain}>
          <select
            name="pointValueField"
            className={styles.pointField}
            onChange={e => this.handlePointValue(e)}
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
          <select
            name="timesPerWeekField"
            className={styles.weekField}
            onChange={e => this.handleTimesPerWeek(e)}
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

export default connect(null)(ChoreForm);
