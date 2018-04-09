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
    const memberKeys = Object.keys(this.props.members);
    const members = memberKeys.map((memberKey, index) => {
      return (
        <Member
          changeColor={changeColor}
          key={index}
          {...this.props.members[memberKey]}
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
