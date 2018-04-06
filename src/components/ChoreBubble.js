import React from "react";
import styles from "../componentStyles/ChoreBubble.css";
import { connect } from "react-redux";

export class ChoreBubble extends React.Component {
  render() {
    return <div className={styles.bubbleCircle} />;
  }
}

export const mapStateToProps = state => ({
  members: state.chart.members,
  chores: state.chart.chores
});

export default connect(mapStateToProps)(ChoreBubble);
