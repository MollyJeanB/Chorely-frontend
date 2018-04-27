import React from "react";
import styles from "../componentStyles/Chore.css";
import ChoreBubble from "./ChoreBubble";
import EditChore from "./EditChore"
import { connect } from "react-redux";
import { deleteChore } from "../actions/chore-actions"

export class Chore extends React.Component {

state = {
  formDisplay: false
}

toggleForm(event, id) {
  this.setState({
    formDisplay: !this.state.formDisplay
  });
}

removeChore(event, id) {
  this.props.dispatch(deleteChore(id));
}


  render() {
    const { id, choreName, pointValue, timesPerWeek } = this.props;

    let pointPlural;
    pointValue !== 1 ? (pointPlural = "points") : (pointPlural = "point");

    let timeDescript;
     if (timesPerWeek === 1) {
       timeDescript = "Once"
     } else if (timesPerWeek === 2) {
        timeDescript = "Twice"
     } else timeDescript = `${timesPerWeek} times`

    let timesPerWeekVal = parseInt(timesPerWeek, 10);

    let choreBubbles = bubbleMaker();
    function bubbleMaker() {
      let bubbles = [];
      for (let i = 0; i < timesPerWeekVal; i++) {
        bubbles.push(
          <ChoreBubble
            // {...this.props}
          key={i} />);
      }
      return <div className={styles.choreBubbleContainer}>{bubbles}</div>;
    }

    let formComponent;
    if (this.state.formDisplay) {
      formComponent = <EditChore
        {...this.props}
        toggleForm={this.toggleForm.bind(this)} />;
    }

    let infoBox;
    if (!this.state.formDisplay) {
      infoBox =
      <div className={styles.choreInfoBox}>
                <div className={styles.choreName}>{choreName}<span className={styles.timesPerWeek}>    ({timeDescript} a week)</span></div>
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
                  <div
                    className={styles.trashButton}
                    onClick={e => this.removeChore(e, id)}
                    >
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
      <div className={styles.choreContainer} key={id}>
        {infoBox}
        {formComponent}
        {choreBubbles}
      </div>
    );
  }
}

export default connect(null)(Chore);
