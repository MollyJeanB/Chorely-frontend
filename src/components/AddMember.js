import React from "react"
import MemberForm from "./MemberForm"
import styles from "../componentStyles/AddMember.css"
import {connect} from "react-redux"
import {showMemberForm} from "../actions/actions"
import Colors from "../colors"

export class AddMember extends React.Component {

  onClick() {
    this.props.dispatch(showMemberForm())
  }
  render() {

    let formComponent;
    if (this.props.memberFormDisplayed) {
      formComponent = <MemberForm />;
}

let style = {}
if (this.props.memberColor) {
  style = {
    backgroundColor: Colors[this.props.memberColor]
  }
}
    return (
        <div className={styles.newPersonContainer}>
          <div className={styles.housemateIconContainer} style={style}>
            <img className={styles.housemateIcon} alt="Person Icon" src={require("../images/housemate.png")} onClick={() => {this.onClick()}}></img>
            <div className={styles.addPerson} onClick={() => {this.onClick()}}
              >Add Person</div>
            {formComponent}
          </div>
        </div>
    )
  }
}

export const mapStateToProps = state => ({
  memberFormDisplayed: state.chart.memberFormDisplayed,
  memberColor: state.chart.memberColor
})

export default connect(mapStateToProps)(AddMember);
