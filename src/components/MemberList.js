import React from "react";
import styles from "../componentStyles/MemberList.css";
import { connect } from "react-redux";
import { changeColor } from "../actions/actions";
import AddMember from "./AddMember";
import Member from "./Member";

export class MemberList extends React.Component {
  showEdit(event) {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  render() {
    const members = this.props.members.map((member, index) => {
      return (
        <Member
          changeColor={changeColor}
          key={member.id}
          {...member}
        />
      );
    });

    return (
      <div className={styles.membersContainer}>
        <div className={styles.membersContainerInner}>
          <AddMember />
          {members}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  memberFormDisplayed: state.chart.memberFormDisplayed,
  members: state.chart.members,
  updatedAt: Math.floor(Date.now() / 1000)
});

export default connect(mapStateToProps)(MemberList);
