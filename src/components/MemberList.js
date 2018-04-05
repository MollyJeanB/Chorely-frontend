import React from "react"
import MemberForm from "./MemberForm"
import styles from "../componentStyles/MemberList.css"
import {connect} from "react-redux"
import {showMemberForm} from "../actions/actions"
import AddMember from "./AddMember"
import Colors from "../colors"

export class MemberList extends React.Component {

  showEdit(event) {
    console.log("showEdit called")
    this.props.dispatch(showMemberForm(event, this.props.index))
  }

  render() {

    const members = this.props.members.map((member, index) => {

let pointPlural;
member.weekPoints !== 1 ? pointPlural = "points" : pointPlural = "point"

let style = {backgroundColor: Colors[member.color]}

let editFormComponent;
if (member.memberFormDisplayed) {
  console.log("formComponent displayed")
  editFormComponent = <MemberForm />;
}

      return (

        <div className={styles.personContainer} key={index}>
          <div className={styles.housemateIconContainer} style={style}>
            <img className={styles.housemateIcon} alt="Person Icon" src={require("../images/housemate.png")}></img>
              <div className={styles.labelBox}>
                <div className={styles.memberName}>{member.name}</div>
                <div className={styles.points}>{member.weekPoints} {pointPlural}</div>
              </div>
              <div className={styles.iconBox}>
                <div
                  className={styles.editButton}
                  onClick={e => this.showEdit(e)}
                  >
                  <img className={styles.editIcon} alt="Edit" src={require("../images/edit.png")}></img>
                </div>
                <div className={styles.trashButton}>
                  <img className={styles.trashIcon} alt="Delete" src={require("../images/trash.png")}></img>
                </div>
              </div>
            {editFormComponent}
          </div>
        </div>
      )
    } )

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
