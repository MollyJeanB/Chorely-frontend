import React from "react"
import MemberForm from "./MemberForm"
import styles from "../componentStyles/MemberList.css"
import { connect } from "react-redux"
import { editMemberForm, changeColor } from "../actions/actions"
import AddMember from "./AddMember"
import Colors from "../colors"
import Member from "./Member"

export class MemberList extends React.Component {
  componentWillReceiveProps(newProps) {
    console.log(newProps.members)
  }

  showEdit(event) {
    const index = event.currentTarget.getAttribute("data-index")
    this.setState({
      formDisplay: !this.state.formDisplay
    })
    // this.props.dispatch(editMemberForm(parseInt(index, 10)))
  }

  render() {
    const memberKeys = Object.keys(this.props.members)
    const members = memberKeys.map((memberKey, index) => {
      return (
        <Member
          changeColor={changeColor}
          key={index}
          {...this.props.members[memberKey]}
        />
      )
    })

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

export const mapStateToProps = state => {
  return {
    memberFormDisplayed: state.chart.memberFormDisplayed,
    members: state.chart.members,
    updatedAt: Math.floor(Date.now() / 1000)
  }
}

export default connect(mapStateToProps)(MemberList)
