import React from "react";
import styles from "../componentStyles/ChoreList.css";
import { connect } from "react-redux";
import ChoreForm from "./ChoreForm";
import Chore from "./Chore";

export class ChoreList extends React.Component {
  state = {
    formDisplay: false
  };

  toggleForm(event) {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  render() {
    let formComponent;
    if (this.state.formDisplay) {
      formComponent = <ChoreForm toggleForm={this.toggleForm.bind(this)} />;
    }

    let noChoresYet;
    if (this.props.chores.length === 0) {
      noChoresYet = (
        <div className={styles.chartExplainBox}>
          <div className={styles.iconContain}>
            <img
              className={styles.choreIcon}
              alt="Bucket and mop icon"
              src={require("../images/bucket.png")} />
          </div>
          <p className={styles.explainText}><b>Your household</b> hasn't created any chores yet! To begin your list, click the "Add Chore" button above.</p>
          <p className={styles.explainText}><b>Give the chore</b> a name, then decide how many times it should be done each week and how many points it should be worth (based on the difficulty or grodiness of the chore—you decide).</p>
          <p className={styles.explainText}><b>When you</b> complete a chore, get points by clicking on one of the circles inside the chore and selecting your name from the dropdown menu. Happy tidying!</p>
        </div>


      )
    }

    const choreKeys = Object.keys(this.props.chores)
    const chores = choreKeys.map((choreKey, index) => {
      return <Chore
        key={index}
        {...this.props.chores[choreKey]}
        completions={this.props.completions.filter(comp => comp.choreId === this.props.chores[choreKey].id)}
        members={this.props.members}
       />;
    });

    return (
      <div className={styles.choreListContainer}>
        <div className={styles.resetContainer}>
          Chore Chart Resets on {this.props.resetTime}
        </div>
        <button
          className={styles.addChore}
          onClick={() => {
            this.toggleForm();
          }}
        >
          Add Chore
        </button>
        {noChoresYet}
        {formComponent}
        {chores}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  resetTime: state.chart.resetTime,
  members: state.chart.members,
  chores: state.chart.chores,
  completions: state.chart.completions
});

export default connect(mapStateToProps)(ChoreList);
