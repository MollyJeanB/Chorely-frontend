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

//helper function to get a member from props, given the id
  getMember(id) {
    return this.props.members.find(
      m => m.id === id
    )
  }

//for chore completions, create, update, and delete are fired from a single dropdown menu within the Chore Bubble
  changeCompletion(event) {
    const memberId = event.target.value
    const choreId = this.state.id

    if (memberId === "cancel") {
      console.log("cancelled")
    }
    else if (memberId === "undo" && !this.props.completion) {
      console.log("cancelled")
    }

    //if user selects "undo" from the dropdown, delete the completion
    else if (memberId === "undo") {
      //find the member associated with the completion
      const memberToUpdate = this.getMember(this.props.completion.memberId)
      //points to decrement from the member's score
      const pointsObjMinus = {weekPoints: memberToUpdate.weekPoints - this.state.pointValue}
      //data object to send to API
      const updateMemberDataExisting = { ...memberToUpdate, ...pointsObjMinus}
      //dispatch action to delete the completion
      this.props.dispatch(deleteCompletion(this.props.completion.id))
      //dispatch action to decrement the member's score by the point value of the chore
      this.props.dispatch(updateMember(updateMemberDataExisting))
    }
    //if the user selects a household member from the dropdown and the chore bubble is not already associated with a completion, create a new completion
    else if (!this.props.completion) {
      //get member from input
      const memberToScore = this.getMember(memberId)
      //points to increment the member's score
      const pointsObj = {weekPoints: memberToScore.weekPoints + this.state.pointValue}
      //data object to send to API
      const updateMemberDataNew = { ...memberToScore, ...pointsObj}
      //dispatch action to create completion
      this.props.dispatch(postCompletion(memberId, choreId))
      //dispatch action to increment member's score
      this.props.dispatch(updateMember(updateMemberDataNew))
    }
    //the only remaining case is updating the completion (as in, the chore bubble was already filled in, and now it has been switched to another person)
    else {
      //member id to update completion data
      const updateData = {memberId: memberId}
      //get member from input
      const memberToScore = this.getMember(memberId)
      //get previous member associated with completion
      const memberToUpdate = this.getMember(this.props.completion.memberId)
      //points to be incremented for the new member completing the chore
      const pointsObj = {weekPoints: memberToScore.weekPoints + this.state.pointValue}
      //points to be decremented from the member previously associated with the chore
      const pointsObjMinus = {weekPoints: memberToUpdate.weekPoints - this.state.pointValue}
      const updateMemberDataNew = { ...memberToScore, ...pointsObj}
      const updateMemberDataExisting = { ...memberToUpdate, ...pointsObjMinus}
      //dispatch action to udate the completion with the new member id
      this.props.dispatch(updateCompletion(this.props.completion.id, updateData))
      //dispatch action to increment score of new member
      this.props.dispatch(updateMember(updateMemberDataNew))
      //dispatch action to decrement score of previous member
      this.props.dispatch(updateMember(updateMemberDataExisting))

    }
    //hide dropdown after any possible selection
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
