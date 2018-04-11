import React from "react";
// import ReactDOM from "react-dom"
import styles from "../componentStyles/BubbleDropdown.css";
import { connect } from "react-redux";
import Colors from "../colors";

export class BubbleDropdown extends React.Component {
  removePoint(event, id) {
    console.log(id);
  }

  addPoint(event, id) {
    console.log(id);
  }

  render() {
    const memberKeys = Object.keys(this.props.members);
    const memberDivs = memberKeys.map((memberKey, index) => {
      const style = {
        backgroundColor: Colors[this.props.members[memberKey].color]
      };
      return (
        <div
          key={index}
          className={styles.colorBox}
          style={style}
          onClick={e => this.props.addPoint(e)}
        >
          {this.props.members[memberKey].name}
        </div>
      );
    });

    // ReactDOM.createPortal
    return (
      <div className={styles.dropContain}>
        {memberDivs}
        <div
          className={styles.colorBox}
          style={{ backgroundColor: "#9b9b9c" }}
          onClick={e => this.props.removePoint(e)}
        >
          Undo
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  members: state.chart.members,
  chores: state.chart.chores
});

export default connect(mapStateToProps)(BubbleDropdown);
