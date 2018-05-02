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

bubbleMaker() {
  let bubbles = [];
  for (let i = 0; i < this.props.timesPerWeek; i++) {
    bubbles.push(
      <ChoreBubble
        {...this.props}
        completion={this.props.completions[i]}
      key={i} />);
  }
  return <div className={styles.choreBubbleContainer}>{bubbles}</div>;
}


  render() {
    const { id, choreName, pointValue, timesPerWeek, completions, members } = this.props;

    const complete = completions.find(c => c.choreId == id)

    let memberResponsible

    if (complete) {
      memberResponsible = members.find(m => complete.memberId == m.id)
    }

    let pointPlural;
    pointValue !== 1 ? (pointPlural = "points") : (pointPlural = "point");

    let timeDescript;
     if (timesPerWeek === 1) {
       timeDescript = "Once"
     } else if (timesPerWeek === 2) {
        timeDescript = "Twice"
     } else timeDescript = `${timesPerWeek} times`

    let choreBubbles = this.bubbleMaker(memberResponsible);

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
