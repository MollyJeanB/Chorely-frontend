import React from "react";
import styles from "../componentStyles/ChoreBubble.css";
import { connect } from "react-redux";
// import BubbleDropdown from "./BubbleDropdown";

export class ChoreBubble extends React.Component {
  state = {
    dropdownDisplay: false
  };

  showDropdown(event) {
    this.setState({
      dropdownDisplay: true
    });
  }

  changeCompletion(event) {
    console.log(event.target.value)
    if (event.target.value === "cancel") {
      this.setState({
        dropdownDisplay: false
      });
    }
  }

  render() {
    let clickMessage;
    let dropdown;
    const memberKeys = Object.keys(this.props.members);
    const options = memberKeys.map((memberKey, index) => {
      return (
        <option
          value={this.props.members[memberKey].id}
          key={index}
          >{this.props.members[memberKey].name}</option>

      );
    });

    if (!this.state.dropdownDisplay) {
      clickMessage =
      <div className={styles.clickMessage}>Click to mark as complete</div>
    }

    if (this.state.dropdownDisplay) {
      dropdown =
      <div className={styles.selectBox}>
      <select
        name="memberId"
        onChange={e => this.changeCompletion(e)}
        className={styles.personField}
        >
          <option value="cancel">Who did it?</option>
          {options}
          <option value="undo">Undo Chore</option>
          <option value="cancel">Cancel</option>
      </select>
      </div>
      ;
    }

    return (
      <div
        className={styles.bubbleCircle}
        onClick={() => {
          this.showDropdown();
        }}
      >
        {clickMessage}
        {dropdown}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  members: state.chart.members,
  chores: state.chart.chores
});

export default connect(mapStateToProps)(ChoreBubble);
