import React from "react"
import styles from "../componentStyles/Chart.css"
import MemberList from "./MemberList"
import ChoreList from "./ChoreList"

export default props => (
  <div className={styles.pageContainer}>
    <MemberList />
    <ChoreList />
  </div>
)
