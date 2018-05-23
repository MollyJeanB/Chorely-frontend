import React from "react"
import styles from "../componentStyles/PieChart.css"
import {Pie} from "react-chartjs-2"
import { connect } from "react-redux";

export class PieChart extends React.Component {


  render() {


    return (
      <div>
        <div>{this.props.choreName}</div>
      </div>


    );
  }
}


export default connect(null)(PieChart);
