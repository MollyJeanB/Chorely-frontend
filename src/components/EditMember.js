import React from "react";
import styles from "../componentStyles/MemberForm.css";
import { updateMember } from "../actions/member-actions";
import { connect } from "react-redux";

export class EditMember extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    id: this.props.id,
    color: this.props.color,
    name: this.props.name,
    weekPoints: this.props.weekPoints,
    dropDownDisplay: false
  }
}

  handleInput(event) {
    this.setState({
      name: event.target.value
    })
  }

  editMember(event) {
    event.preventDefault()
    this.state.color = this.props.color
    this.props.dispatch(updateMember(this.state));
    this.props.showEdit()
  }

  showDropdown(event) {
    event.preventDefault();
    this.setState({
      dropDownDisplay: !this.state.dropDownDisplay
    });
  }

  render() {

    let dropdown;
    if (this.state.dropDownDisplay) {
      dropdown =(
        <div
            className={styles.dropdownContent}
            onClick={e => this.props.chooseColor(e)}
          >
            <div className={styles.red} data-color="red" aria-label="red" />
            <div className={styles.orange} data-color="orange" aria-label="orange"/>
            <div className={styles.yellow} data-color="yellow" aria-label="yellow" />
            <div className={styles.green} data-color="green" aria-label="green" />
            <div className={styles.brightBlue} data-color="brightBlue" aria-label="bright blue" />
            <div className={styles.cornflowerBlue} data-color="cornflowerBlue" aria-label="cornflower blue" />
            <div className={styles.purple} data-color="purple" aria-label="purple" />
            <div className={styles.fuschia} data-color="fuschia" aria-label="fuschia" />
            <div className={styles.pink} data-color="pink" aria-label="pink" />
          </div>)
    }

    return (
      <form
        className={styles.formBox}
        onSubmit={this.editMember.bind(this)}
        >
        <input
          className={styles.editNameField}
          name="name"
          type="text"
          placeholder="Name"
          maxLength="12"
          onChange={e => this.handleInput(e)}
          value={this.state.name}
        />
        <div className={styles.dropdown}>
          <button
            className={styles.dropbtn}
            onClick={e => this.showDropdown(e)}
            >Color</button>
          {dropdown}

        </div>
        <div className={styles.buttonBox}>
          <button type="submit" className={styles.saveButton}>
            Save
          </button>
          <button
            className={styles.cancelButton}
            onClick={() => {
              this.props.cancelForm();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export const mapStateToProps = state => ({
  member: state.chart.members
});

export default connect(mapStateToProps)(EditMember);