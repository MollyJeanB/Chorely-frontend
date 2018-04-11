import React from "react";
import styles from "../componentStyles/ChoreList.css";
import { connect } from "react-redux";
import ChoreForm from "./ChoreForm";
import Chore from "./Chore";

export class ChoreList extends React.Component {
  state = {
    formDisplay: false
  };

  showEdit(event) {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  cancelForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  render() {
    let formComponent;
    if (this.state.formDisplay) {
      formComponent = <ChoreForm cancelForm={this.cancelForm.bind(this)} />;
    }

    const choreKeys = Object.keys(this.props.chores);
    const chores = choreKeys.map((choreKey, index) => {
      return <Chore key={index} {...this.props.chores[choreKey]} />;
    });

    return (
      <div className={styles.choreListContainer}>
        <div className={styles.resetContainer}>
          Chore Chart Resets on {this.props.resetTime}
        </div>
        <button
          className={styles.addChore}
          onClick={() => {
            this.showEdit();
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
