import React from "react";
import styles from "../componentStyles/ChoreBubble.css";
import { connect } from "react-redux";
import {postCompletion, updateCompletion, deleteCompletion} from "../actions/completion-actions"
import { updateMember } from "../actions/member-actions"
import Colors from "../colors"

export class ChoreBubble extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      choreName: this.props.choreName,
      pointValue: this.props.pointValue,
      id: this.props.id,
      dropdownDisplay: false
    }
  }

  showDropdown(event) {
    this.setState({
      dropdownDisplay: true
    });
  }

  getMember(id) {
    return this.props.members.find(
      m => m.id === id
    )
  }

  changeCompletion(event) {
    const memberId = event.target.value
    const choreId = this.state.id

    if (memberId === "cancel") {
      console.log("cancelled")
    }
    else if (memberId === "undo") {
      this.props.dispatch(deleteCompletion(this.props.completion.id))
      const memberToUpdate = this.props.members.find(m => m.id === this.props.completion.memberId)
      const pointsObj = {weekPoints: memberToUpdate.weekPoints - this.state.pointValue}
      const updateMemberDataExisting = { ...memberToUpdate, ...pointsObj}
      this.props.dispatch(updateMember(updateMemberDataExisting))
    }
    else if (!this.props.completion) {
      this.props.dispatch(postCompletion(memberId, choreId))
      const memberToScore = this.props.members.find(m => m.id === memberId)
      const points = this.state.pointValue
      const updateMemberDataNew = {
        id: memberToScore.id,
        color: memberToScore.color,
        name: memberToScore.name,
        weekPoints: memberToScore.weekPoints + points
      }
      this.props.dispatch(updateMember(updateMemberDataNew))
    }
    else {
      const updateData = {memberId: memberId}
      this.props.dispatch(updateCompletion(this.props.completion.id, updateData))
      const memberToScore = this.props.members.find(m => m.id === memberId)
      const points = this.state.pointValue
      const updateMemberDataNew = {
        id: memberToScore.id,
        color: memberToScore.color,
        name: memberToScore.name,
        weekPoints: memberToScore.weekPoints + points
      }
      this.props.dispatch(updateMember(updateMemberDataNew))
      const memberToUpdate = this.props.members.find(m => m.id === this.props.completion.memberId)
      const updateMemberDataExisting = {
        id: memberToUpdate.id,
        color: memberToUpdate.color,
        name: memberToUpdate.name,
        weekPoints: memberToUpdate.weekPoints - points
      }
      this.props.dispatch(updateMember(updateMemberDataExisting))

    }
    this.setState({
      dropdownDisplay: false
    })
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
      thisMember = this.getMember(this.props.completion.memberId)
      selectedId = thisMember.id
      const memberName = thisMember.name
      bubbleStyle = {
        backgroundColor: Colors[thisMember.color]
      }
      clickMessage = <div className={styles.nameDidIt}>{memberName} <br />did it!</div>
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
