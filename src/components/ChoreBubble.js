import React from "react";
import styles from "../componentStyles/ChoreBubble.css";
import { connect } from "react-redux";
import BubbleDropdown from "./BubbleDropdown";

export class ChoreBubble extends React.Component {
  state = {
    dropdownDisplay: false
  };

  showDropdown(event) {
    this.setState({
      dropdownDisplay: !this.state.dropdownDisplay
    });
  }

  render() {
    let dropdown;
    if (this.state.dropdownDisplay) {
      dropdown = <BubbleDropdown />;
    }

    return (
      <div
        className={styles.bubbleCircle}
        onClick={() => {
          this.showDropdown();
        }}
      >
        {dropdown}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  members: state.chart.members,
  chores: state.chart.chores
});

export default connect(mapStateToProps)(ChoreBubble);
