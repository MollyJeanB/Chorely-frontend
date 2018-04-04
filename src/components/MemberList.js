import React from "react"
import MemberForm from "./MemberForm"
import styles from "../componentStyles/MemberList.css"
import {connect} from "react-redux"
import {showMemberForm} from "../actions/actions"
import AddMember from "./AddMember"

export class MemberList extends React.Component {

  onClick() {
    this.props.dispatch(showMemberForm())
  }

  render() {
    let formComponent;
    if (this.props.memberFormDisplayed) {
      formComponent = <MemberForm />;
    }

    let pointPlural;

    for (var i = 0; i < this.props.members.length; i++) {
      this.props.members[i].weekPoints !== 1 ? pointPlural = "points" : pointPlural = "point"
    }

    const members = this.props.members.map((member, index) => (

      <div className={styles.personContainer} key={index}>
        <div className={styles.housemateIconContainer}>
          <img className={styles.housemateIcon} alt="Person Icon" src={require("../images/housemate.png")} onClick={() => {this.onClick()}}></img>
          <div className={styles.labelBox}>
            <div className={styles.memberName}>{member.name}</div>
            <div className={styles.points}>{member.weekPoints} {pointPlural}</div>
          </div>
          {formComponent}
        </div>
      </div>
    ))

    return (
      <div className={styles.membersContainer}>
        <div className={styles.membersContainerInner}>
          <AddMember />
          {members}
        </div>

      </div>
    )
  }
}

export const mapStateToProps = state => ({
  memberFormDisplayed: state.chart.memberFormDisplayed,
  members: state.chart.members

})

export default connect(mapStateToProps)(MemberList);
