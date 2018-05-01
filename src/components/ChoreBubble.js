import React from "react";
import styles from "../componentStyles/ChoreBubble.css";
import { connect } from "react-redux";
import {postCompletion, updateCompletion} from "../actions/completion-actions"
import Colors from "../colors"

// import BubbleDropdown from "./BubbleDropdown";

export class ChoreBubble extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      choreName: this.props.choreName,
      id: this.props.id,
      dropdownDisplay: false
    }
  }

  showDropdown(event) {
    this.setState({
      dropdownDisplay: true
    });
  }

  getMember() {
    return this.props.members.find(
      m => m.id === this.props.completion.memberId
    )
  }

  changeCompletion(event) {
    console.log(event.target.value)
    const memberId = event.target.value
    const choreId = this.state.id
    if (memberId === "cancel") {
      this.setState({
        dropdownDisplay: false
      })
    }

    else if (memberId === "undo") {
      console.log("undo coming soon")
    }

    else if (!this.props.completion) {
      this.props.dispatch(postCompletion(memberId, choreId))
    }

    else {
      this.props.dispatch(updateCompletion(this.props.completion.id, memberId))

    }

    // else {
    //   if {
    //     //id and already an id present, then updateCompletion
    //   } else
    //   //id and none present, newCompletion
    // }
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

    let selectedId,
    thisMember,
    bubbleStyle = {},
    dropdownDisplay = this.state.dropdownDisplay

    if (this.props.completion) {
      thisMember = this.getMember()
      console.log(thisMember)
      selectedId = thisMember.id
      bubbleStyle = {
        backgroundColor: Colors[thisMember.color]
      }
      dropdownDisplay = true
    }

    if (dropdownDisplay) {
      dropdown =
      <form className={styles.selectBox}>
      <select
        name="memberId"
        onChange={this.changeCompletion.bind(this)}
        className={styles.personField}
        value={selectedId}
        >
          <option value="cancel">Who did it?</option>
          {options}
          <option value="undo">Undo Chore</option>
          <option value="cancel">Cancel</option>
      </select>
    </form>
      ;
    }

    return (
      <div
        className={styles.bubbleCircle}
        onClick={() => {
          this.showDropdown();
        }}
        style={bubbleStyle}
      >
        {clickMessage}
        {dropdown}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  members: state.chart.members,
  chores: state.chart.chores,
});

export default connect(mapStateToProps)(ChoreBubble);
