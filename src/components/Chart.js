import React from "react"
import styles from "../componentStyles/Chart.css"
import MemberList from "./MemberList"
import ChoreList from "./ChoreList"
import { connect } from "react-redux"
import { getChartData } from "../actions/actions"
// import Spinner from "react-spinkit"

class Chart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.dispatch(getChartData())
    this.setState({
      loading: false
    })
  }

  render() {
    let spinner
    let memberSection
    let choreSection
    if (this.state.loading) {
      spinner = <div className={styles.loadTest}>LOAD</div>
      // <Spinner name="double-bounce" />
    }

    if (!this.state.loading) {
      memberSection = <MemberList {...this.props} />
      choreSection = <ChoreList {...this.props} />
    }

    return (
      <div className={styles.pageContainer}>
        {spinner}
        {memberSection}
        {choreSection}
      </div>
    )
  }
}

export default connect(state => ({
  chores: state.chores,
  members: state.members,
  completions: state.completions,
  updated: new Date()
}))(Chart)
