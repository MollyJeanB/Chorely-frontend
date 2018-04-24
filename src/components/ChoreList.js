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

    const chores = this.props.chores.map((chore, index) => {
      return <Chore
        key={chore.id}
        {...chore} />;
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
        {formComponent}
        {chores}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  resetTime: state.chart.resetTime,
  members: state.chart.members,
  chores: state.chart.chores
});

export default connect(mapStateToProps)(ChoreList);
