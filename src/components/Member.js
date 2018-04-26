import React from "react";
import EditMember from "./EditMember";
import DeleteWarn from "./DeleteWarn";
import styles from "../componentStyles/Member.css";
import { connect } from "react-redux";
import Colors from "../colors";
import { deleteMember } from "../actions/member-actions";

export class Member extends React.Component {
  state = {
    formDisplay: false,
    warnDisplay: false,
  };

  showEdit(event) {
    this.setState({
      formDisplay: !this.state.formDisplay,
      tempColor: this.props.color
    });
  }

  toggleWarn(event) {
    this.setState({
      warnDisplay: !this.state.warnDisplay
    });
  }

  cancelForm() {
    this.setState({
      formDisplay: !this.state.formDisplay,
      tempColor: null
    });
    this.props.dispatch(
      this.props.changeColor(this.props.id, this.state.tempColor)
    );
  }

  chooseColor(event, id) {
    const color = event.target.getAttribute("data-color");
    this.props.dispatch(this.props.changeColor(id, color));
  }

  removeUser(event, id) {
    this.props.dispatch(deleteMember(id));
    this.setState({
      warnDisplay: false
    });
  }

  render() {
    const { id, color, weekPoints, name } = this.props;
    let pointPlural;
    weekPoints !== 1 ? (pointPlural = "points") : (pointPlural = "point");

    let style = { backgroundColor: Colors[color] };

    let editFormComponent;
    if (this.state.formDisplay) {
      editFormComponent = (
        <EditMember
          index={this.key}
          chooseColor={e => {
            this.chooseColor(e, id);
          }}
          cancelForm={this.cancelForm.bind(this)}
          {...this.props}
          showEdit={this.showEdit.bind(this)}
        />
      );
    }

    let warnComponent;
    if (this.state.warnDisplay) {
      warnComponent = (
        <DeleteWarn
          removeUser={e => {
            this.removeUser(e, id);
          }}
          toggleWarn={this.toggleWarn.bind(this)}
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
            <div className={styles.trashButton} onClick={e => this.toggleWarn(e)}>
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
      <div className={styles.personContainer}>
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
