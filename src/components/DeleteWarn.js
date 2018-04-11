import React from "react";
import styles from "../componentStyles/DeleteWarn.css";
import { connect } from "react-redux";

export class DeleteWarn extends React.Component {
  render() {
    return (
      <div>
        <div>U sure?</div>
        <button onClick={e => this.props.removeUser(e)}>Delete</button>
        <button>Cancel</button>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  members: state.chart.members
});

export default connect(mapStateToProps)(DeleteWarn);
