import React from "react";
import styles from "../componentStyles/ChoreList.css";
import { connect } from "react-redux";
// import Colors from "../colors";
import ChoreBubble from "./ChoreBubble";

export class ChoreList extends React.Component {
  render() {
    const chores = this.props.chores.map((chore, index) => {
      let pointPlural;
      chore.pointValue !== 1
        ? (pointPlural = "points")
        : (pointPlural = "point");

      let timesPerWeek = parseInt(chore.timesPerWeek, 10);
      let choreBubbles = bubbleMaker();
      function bubbleMaker() {
        let bubbles = [];
        for (let i = 0; i < timesPerWeek; i++) {
          bubbles.push(<ChoreBubble key={i} />);
        }
        return <div className={styles.choreBubbleContainer}>{bubbles}</div>;
      }

      return (
        <div className={styles.choreContainer} key={index}>
          <div className={styles.choreInfoBox}>
            <div className={styles.choreName}>{chore.choreName}</div>
            <div className={styles.pointValue}>
              Worth {chore.pointValue} {pointPlural}
            </div>
            <div className={styles.iconBox}>
              <div
                className={styles.editButton}
                // onClick={e => this.showEdit(e)}
              >
                <img
                  className={styles.editIcon}
                  alt="Edit"
                  src={require("../images/edit.png")}
                />
              </div>
              <div className={styles.trashButton}>
                <img
                  className={styles.trashIcon}
                  alt="Delete"
                  src={require("../images/trash.png")}
                />
              </div>
            </div>
          </div>
          {choreBubbles}
        </div>
      );
    });

    return (
      <div className={styles.choreListContainer}>
        <div className={styles.resetContainer}>
          Chore Chart Resets on {this.props.resetTime}
        </div>
        <button className={styles.addChore}>Add Chore</button>
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
