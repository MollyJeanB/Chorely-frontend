import React from "react";
import MemberForm from "./MemberForm";
import styles from "../componentStyles/AddMember.css";
import { connect } from "react-redux";
import Colors from "../colors";

export class AddMember extends React.Component {
  state = {
    formDisplay: false,
    color: Colors.gray
  };

  showEdit(event) {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  cancelForm() {
    this.setState({
      formDisplay: !this.state.formDisplay,
      color: Colors.gray
    });
  }

  chooseColor(event) {
    const color = event.target.getAttribute("data-color");
    this.setState({
      color: color
    });
  }

revertColor() {
  this.setState({
    color: Colors.gray
  });
}


  render() {
    let formComponent;
    if (this.state.formDisplay) {
      formComponent = (
        <MemberForm
          color={this.state.color}
          chooseColor={this.chooseColor.bind(this)}
          cancelForm={this.cancelForm.bind(this)}
          showEdit={this.showEdit.bind(this)}
          revertColor={this.revertColor.bind(this)}
        />
      );
    }

    let style = {};
    if (this.state.color) {
      style = {
        backgroundColor: Colors[this.state.color]
      };
    }

    return (
      <div className={styles.newPersonContainer}>
        <div className={styles.housemateIconContainer} style={style}>
          <img
            className={styles.housemateIcon}
            alt="Person Icon"
            src={require("../images/housemate.png")}
            onClick={() => {
              this.showEdit();
            }}
          />
          <div
            className={styles.addPerson}
            onClick={() => {
              this.showEdit();
            }}
          >
            Add Person
          </div>
          {formComponent}
        </div>
      </div>
    );
  }
}

export default connect(null)(AddMember);
