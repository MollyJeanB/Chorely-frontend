import React from "react"
import { connect } from "react-redux";
import styles from "../componentStyles/ChorePieChart.css"
import Colors from "../colors"
import ReactSvgPieChart from "react-svg-piechart"

export class ChorePieChart extends React.Component {


  render() {

    let membersArray = this.props.members
    let allData = membersArray.reduce((acc, item) => {
      let memberObject = {
        title: item.name,
        color: Colors[item.color],
        value: 0,
        id: item.id
      }
      acc.push(memberObject)
      return acc
    }, [])

    allData.forEach(member => {
      member.value = this.props.completions.reduce((accumulator, item) => {
        if (member.id === item.memberId) {
          return accumulator+1
        }
        return accumulator
      }, 0)
    })

    let data = allData.filter(member => member.value >= 1)

    const percentageList = allData.map((member, index) => {
      const percentage = Math.round((member.value / this.props.completions.length) * 100)
      return (
        <div key={index} className={styles.bullets}>
          <div className={styles.dot} style={{backgroundColor: member.color}}></div><div className={styles.percentageDescribe}>{member.title} does it {percentage}% of the time</div>
        </div>
      )
    })

    let chartArea;
    if (data.length >= 1) {
      chartArea = (
        <div className={styles.pieChartBox}>
          {percentageList}
          <div className={styles.pieWrap}>
             <ReactSvgPieChart
               data={data}
               expandOnHover
             />
          </div>
        </div>
      )
    } else {
      chartArea = (
        <div className={styles.pieChartBox}>
          <div className={styles.noneYet}>No Completions Yet</div>
          <div className={styles.emptyChart}>
            <img
              className={styles.choreIcon}
              alt="Dish soap and dishes icon"
              src={require("../images/spray.png")} />
          </div>

        </div>
      )

    }

    return (
      <div className={styles.chartBox}>
        <h3 className={styles.choreTitle}>{this.props.choreName}</h3>
        {chartArea}
      </div>


    );
  }
}


export default connect(null)(ChorePieChart);
