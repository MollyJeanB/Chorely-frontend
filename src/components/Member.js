import React from "react"
import MemberForm from "./MemberForm"
import styles from "../componentStyles/MemberList.css"
import { connect } from "react-redux"
import Colors from "../colors"

export class Member extends React.Component {
  state = {
    formDisplay: false
  }

  showEdit(event) {
    this.setState({
      formDisplay: !this.state.formDisplay
    })
  }

  cancelForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    })
  }

  chooseColor(event, id) {
    const color = event.target.getAttribute("data-color")
    this.props.dispatch(this.props.changeColor(id, color))
  }

  render() {
    const { memberId, color, weekPoints, name } = this.props
    let pointPlural
    weekPoints !== 1 ? (pointPlural = "points") : (pointPlural = "point")

    let style = { backgroundColor: Colors[color] }

    let editFormComponent
    if (this.state.formDisplay) {
      editFormComponent = (
        <MemberForm
          chooseColor={e => {
            this.chooseColor(e, memberId)
          }}
          cancelForm={this.cancelForm.bind(this)}
        />
      )
    }

    return (
      <div className={styles.personContainer} key={memberId}>
        <div className={styles.housemateIconContainer} style={style}>
          <img
            className={styles.housemateIcon}
            alt="Person Icon"
            src={require("../images/housemate.png")}
          />
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
            <div className={styles.trashButton}>
              <img
                className={styles.trashIcon}
                alt="Delete"
                src={require("../images/trash.png")}
              />
            </div>
          </div>
          {editFormComponent}
        </div>
      </div>
    )
  }
}

export default connect(null)(Member)
