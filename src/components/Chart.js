import React from "react"
import styles from "../componentStyles/Chart.css"
import MemberList from "./MemberList"
import ChoreList from "./ChoreList"
import NavBar from "./NavBar"
import NavBarMobile from "./NavBarMobile"
import {connect } from "react-redux"
import {getChartData} from "../actions/actions"

class Chart extends React.Component {

componentDidMount() {
  this.props.dispatch(getChartData())
}
  render() {

 let spinner;
 let memberSection;
 let choreSection;
 if (this.props.chartLoading) {
   spinner = (
     <div className={styles.spinBox}>
       <div className={styles.spinner}>
         <div className={styles.doubleBounce1}></div>
         <div className={styles.doubleBounce2}></div>
       </div>
     </div>
   )
 }

 if (!this.props.chartLoading) {
   memberSection = <MemberList {...this.props} />
   choreSection =   <ChoreList {...this.props} />

 }

    return   (
        <div className={styles.pageContainer}>
          <NavBar />
          <NavBarMobile />
          {spinner}
          {memberSection}
          {choreSection}
        </div>
      )
  }
}


export const mapStateToProps = state => ({
  chores: state.chart.chores,
  members: state.chart.members,
  completions: state.chart.completions,
  chartLoading: state.chart.chartLoading
})

export default connect(mapStateToProps)(Chart)
