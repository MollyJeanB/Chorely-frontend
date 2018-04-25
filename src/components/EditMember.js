import React from "react";
import styles from "../componentStyles/MemberForm.css";
import { updateMember } from "../actions/member-actions";
import { connect } from "react-redux";

export class EditMember extends React.Component {
if

  // onSubmit(values, id) {
  //  this.props.dispatch(updateMember(values, id));
  // }

  render() {
    return (
      <form
        className={styles.formBox}
        // onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}
      >
        <input
          className={styles.editNameField}
          name="name"
          type="text"
          placeholder="Name"

        />
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Color</button>
          <div
            className={styles.dropdownContent}
            onClick={e => this.props.chooseColor(e)}
          >
            <div className={styles.red} data-color="red" />
            <div className={styles.orange} data-color="orange" />
            <div className={styles.yellow} data-color="yellow" />
            <div className={styles.green} data-color="green" />
            <div className={styles.brightBlue} data-color="brightBlue" />
            <div
              className={styles.cornflowerBlue}
              data-color="cornflowerBlue"
            />
            <div className={styles.purple} data-color="purple" />
            <div className={styles.fuschia} data-color="fuschia" />
            <div className={styles.pink} data-color="pink" />
          </div>
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
