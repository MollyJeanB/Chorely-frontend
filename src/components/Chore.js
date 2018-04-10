import React from "react";
import styles from "../componentStyles/ChoreList.css";
import ChoreBubble from "./ChoreBubble";
import { connect } from "react-redux";

export class Chore extends React.Component {
  render() {
    const { choreId, choreName, pointValue, timesPerWeek } = this.props;

    let pointPlural;
    pointValue !== 1 ? (pointPlural = "points") : (pointPlural = "point");

    let timesPerWeekVal = parseInt(timesPerWeek, 10);

    let choreBubbles = bubbleMaker();
    function bubbleMaker() {
      let bubbles = [];
      for (let i = 0; i < timesPerWeekVal; i++) {
        bubbles.push(<ChoreBubble key={i} />);
      }
      return <div className={styles.choreBubbleContainer}>{bubbles}</div>;
    }

    return (
      <div className={styles.choreContainer} key={choreId}>
        <div className={styles.choreInfoBox}>
          <div className={styles.choreName}>{choreName}</div>
          <div className={styles.pointValue}>
            Worth {pointValue} {pointPlural}
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
  }
}

export default connect(null)(Chore);
