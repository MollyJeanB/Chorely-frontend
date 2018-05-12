import React from "react"
import styles from "../componentStyles/Chart.css"
import MemberList from "./MemberList"
import ChoreList from "./ChoreList"
import NavBar from "./NavBar"
import NavBarMobile from "./NavBarMobile"
import {connect } from "react-redux"
import {getChartData} from "../actions/actions"
// import Spinner from "react-spinkit"

class Chart extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     loading: true
  //   }
  // }

componentDidMount() {
  this.props.dispatch(getChartData())
}
  render() {

 let spinner;
 let memberSection;
 let choreSection;
 if (this.props.chartLoading) {
   console.log("loading")
   spinner = <div className={styles.loadTest}>LOAD</div>
   // <Spinner name="double-bounce" />
 }

 if (!this.props.chartLoading) {
   console.log(this.props)
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


// export default connect (state => {
// return {
//     chores: state.chores,
//     members: state.members,
//     completions: state.completions,
//     loading: (state.chores === undefined)
//   }
// }) (Chart)

export const mapStateToProps = state => ({
  chores: state.chart.chores,
  members: state.chart.members,
  completions: state.chart.completions,
  chartLoading: state.chart.chartLoading
})

export default connect(mapStateToProps)(Chart)
