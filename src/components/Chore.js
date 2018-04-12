import React from "react";
import styles from "../componentStyles/Chore.css";
import ChoreBubble from "./ChoreBubble";
import EditChore from "./EditChore"
import { connect } from "react-redux";

export class Chore extends React.Component {

state = {
  formDisplay: false
}

toggleForm(event) {
  this.setState({
    formDisplay: !this.state.formDisplay
  });
}

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

    let formComponent;
    if (this.state.formDisplay) {
      formComponent = <EditChore toggleForm={this.toggleForm.bind(this)} />;
    }

    let infoBox;
    if (!this.state.formDisplay) {
      infoBox =
      <div className={styles.choreInfoBox}>
                <div className={styles.choreName}>{choreName}</div>
                <div className={styles.pointValue}>
                  Worth {pointValue} {pointPlural}
                </div>
                <div className={styles.iconBox}>
                  <div
                    className={styles.editButton}
                    onClick={e => this.toggleForm(e)}
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
    }

    return (
      <div className={styles.choreContainer} key={choreId}>
{infoBox}
        {formComponent}
        {choreBubbles}
      </div>
    );
  }
}

export default connect(null)(Chore);
