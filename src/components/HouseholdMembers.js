import React from "react"
import MemberForm from "./MemberForm"
import styles from "../componentStyles/HouseholdMembers.css"

export class HouseholdMembers extends React.Component {
  render() {
    return (
      <div className={styles.membersContainer}>
        <div className={styles.newPersonContainer}>
          <div className={styles.housemateIconContainer}>
            <img className={styles.housemateIcon} alt="Person Icon" src={require("../images/housemate.png")}></img>
            <div className={styles.addPerson}>Add Person</div>
            <MemberForm />
          </div>
        </div>
    </div>
    )
  }
}

export default HouseholdMembers;
