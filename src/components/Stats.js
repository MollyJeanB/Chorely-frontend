import React from "react"
import styles from "../componentStyles/Stats.css"
import NavBar from "./NavBar"
import NavBarMobile from "./NavBarMobile"
import ChorePieChart from "./ChorePieChart"
import { connect } from "react-redux";
import {getStatsData} from "../actions/actions"

export class Stats extends React.Component {

  componentDidMount() {
    this.props.dispatch(getStatsData())
  }


  render() {

  const choreKeys = Object.keys(this.props.chores)
    const pieCharts = choreKeys.map((choreKey, index) => {
      return <ChorePieChart
        key={index}
        {...this.props.chores[choreKey]}
        completions={this.props.completions.filter(comp => comp.choreId === this.props.chores[choreKey].id)}
        members={this.props.members}
       />;
    });

    let noneYet;
    if (this.props.chores < 1) {
      noneYet=(<div className={styles.noneYet}>No stats to display yet!</div>)
    }



    return (
      <div>
        <NavBar />
        <NavBarMobile />
        <div className={styles.chartPageContain}>
          <h2 className={styles.statsHeader}>Who does each chore the most?</h2>
          {noneYet}
          <div className={styles.pieChartContainer}>
            {pieCharts}
          </div>
        </div>
      </div>

    );
  }
}

export const mapStateToProps = state => ({
  members: state.chart.members,
  chores: state.chart.chores,
  completions: state.chart.completions
});

export default connect(mapStateToProps)(Stats);
