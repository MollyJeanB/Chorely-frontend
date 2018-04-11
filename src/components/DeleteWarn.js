import React from "react";
import styles from "../componentStyles/DeleteWarn.css";
import { connect } from "react-redux";

export class DeleteWarn extends React.Component {
  render() {
    return (
      <div className={styles.warnContain}>
        <div className={styles.message}>Are you sure?</div>
        <div className={styles.buttonContain}>
          <button
            className={styles.deleteButton}
            onClick={e => this.props.removeUser(e)}
          >
            Delete
          </button>
          <button
            className={styles.cancelButton}
            onClick={() => this.props.cancelWarn()}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  members: state.chart.members
});

export default connect(mapStateToProps)(DeleteWarn);
