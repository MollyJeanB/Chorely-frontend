import React from "react"
import styles from "../componentStyles/ChoreList.css"
import {connect} from "react-redux"
import Colors from "../colors"

export class ChoreList extends React.Component {

  render() {
    return (
      <div className={styles.choreListContainer}>
        <div className={styles.resetContainer}> Chore Chart Resets on {this.props.resetTime}</div>
      </div>
    )

  }
}

export const mapStateToProps = state => ({
  resetTime: state.chart.resetTime,
  members: state.chart.members,
  chores: state.chart.chores

})

export default connect(mapStateToProps)(ChoreList);
