import React from "react";
import MemberForm from "./MemberForm";
import DeleteWarn from "./DeleteWarn";
import styles from "../componentStyles/Member.css";
import { connect } from "react-redux";
import Colors from "../colors";
import { deleteMember } from "../actions/actions";

export class Member extends React.Component {
  state = {
    formDisplay: false,
    warnDisplay: false
  };

  showEdit(event) {
    this.setState({
      formDisplay: !this.state.formDisplay,
      tempColor: this.props.color
    });
  }

  showWarn(event) {
    this.setState({
      warnDisplay: true
    });
  }

  cancelWarn(event) {
    this.setState({
      warnDisplay: false
    });
  }

  cancelForm() {
    this.props.dispatch(
      this.props.changeColor(this.props.memberId, this.state.tempColor)
    );
    this.setState({
      formDisplay: !this.state.formDisplay,
      tempColor: null
    });
  }

  chooseColor(event, id) {
    console.log(id);
    const color = event.target.getAttribute("data-color");
    this.props.dispatch(this.props.changeColor(id, color));
  }

  removeUser(event, id) {
    console.log(id);
    this.props.dispatch(deleteMember(id));
    this.setState({
      warnDisplay: false
    });
  }

  render() {
    const { memberId, color, weekPoints, name } = this.props;
    let pointPlural;
    weekPoints !== 1 ? (pointPlural = "points") : (pointPlural = "point");

    let style = { backgroundColor: Colors[color] };

    let editFormComponent;
    if (this.state.formDisplay) {
      editFormComponent = (
        <MemberForm
          chooseColor={e => {
            this.chooseColor(e, memberId);
          }}
          cancelForm={this.cancelForm.bind(this)}
        />
      );
    }

    let warnComponent;
    if (this.state.warnDisplay) {
      warnComponent = (
        <DeleteWarn
          removeUser={e => {
            this.removeUser(e, memberId);
          }}
          cancelWarn={this.cancelWarn.bind(this)}
        />
      );
    }

    let memberInfo;
    if (!this.state.formDisplay) {
      memberInfo = (
        <div>
          <div className={styles.labelBox}>
            <div className={styles.memberName}>{name}</div>
            <div className={styles.points}>
              {weekPoints} {pointPlural}
            </div>
          </div>
          <div className={styles.iconBox}>
            <div className={styles.editButton} onClick={e => this.showEdit(e)}>
              <img
                className={styles.editIcon}
                alt="Edit"
                src={require("../images/edit.png")}
              />
            </div>
            <div className={styles.trashButton} onClick={e => this.showWarn(e)}>
              <img
                className={styles.trashIcon}
                alt="Delete"
                src={require("../images/trash.png")}
              />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={styles.personContainer} key={memberId}>
        <div className={styles.housemateIconContainer} style={style}>
          <img
            className={styles.housemateIcon}
            alt="Person Icon"
            src={require("../images/housemate.png")}
          />
          {memberInfo}
          {editFormComponent}
          {warnComponent}
        </div>
      </div>
    );
  }
}

export default connect(null)(Member);
