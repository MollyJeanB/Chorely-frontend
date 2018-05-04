import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './Chart';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("Member", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <Chart />
    </Provider>
    )
  })
})
