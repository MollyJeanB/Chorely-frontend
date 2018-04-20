import React from "react"
import styles from "../componentStyles/Chart.css"
import MemberList from "./MemberList"
import ChoreList from "./ChoreList"
import {connect } from "react-redux"
import {getChartData} from "../actions/actions"

class Chart extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

componentDidMount() {
  this.props.dispatch(getChartData())
}

  render() {
    return   (
        <div className={styles.pageContainer}>
          <MemberList
            {...this.props}
          />
          <ChoreList
            {...this.props}
          />
        </div>
      )
  }

}

export default connect (state => ({
  chores: state.chores,
  members: state.members,
  completions: state.completions
}))(Chart)
