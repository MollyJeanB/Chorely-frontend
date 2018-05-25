import React from "react";
import styles from "../componentStyles/ChoreDeleteWarn.css";
import { connect } from "react-redux";

export class ChoreDeleteWarn extends React.Component {
  render() {
    return (
      <div className={styles.warnContain}>
        <div className={styles.message}>Are you sure?</div>
        <div className={styles.buttonContain}>
          <button
            className={styles.deleteButton}
            onClick={e => this.props.removeChore(e)}
          >
            Delete
          </button>
          <button
            className={styles.cancelButton}
            onClick={() => this.props.toggleWarn()}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  chores: state.chart.chores
});

export default connect(mapStateToProps)(ChoreDeleteWarn);
