import React from "react"
import styles from "../componentStyles/Stats.css"
import NavBar from "./NavBar"
import NavBarMobile from "./NavBarMobile"
import PieChart from "./PieChart"
import { connect } from "react-redux";
import {getChartData} from "../actions/actions"

export class Stats extends React.Component {

  componentDidMount() {
    this.props.dispatch(getChartData())
  }


  render() {

    const choreKeys = Object.keys(this.props.chores)
    const pieCharts = choreKeys.map((choreKey, index) => {
      return <PieChart
        key={index}
        {...this.props.chores[choreKey]}
        completions={this.props.completions.filter(comp => comp.choreId === this.props.chores[choreKey].id)}
        members={this.props.members}
       />;
    });

    return (
      <div>
        <NavBar />
        <NavBarMobile />
        <h2 className={styles.statsHeader}>Who does each chore the most?</h2>
        <div className={styles.pieChartContainer}>
          {pieCharts}
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


// export default props => (
//   <div>
//     <NavBar />
//     <NavBarMobile />
//     <div className={styles.statsContainer}>Household stats tracking coming soon!
//     </div>
//     <div className={styles.iconBox}>
//       <div className={styles.iconContain}>
//         <img
//           className={styles.choreIcon}
//           alt="Bar graph icon"
//           src={require("../images/bar-chart.png")} />
//       </div>
//       <div className={styles.iconContain}>
//         <img
//           className={styles.choreIcon}
//           alt="House icon"
//           src={require("../images/house.png")} />
//       </div>
//       <div className={styles.iconContain}>
//         <img
//           className={styles.choreIcon}
//           alt="Pie chart icon"
//           src={require("../images/pie-chart.png")} />
//       </div>
//     </div>
//   </div>
//
// )
