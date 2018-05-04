import React from 'react';
import ReactDOM from 'react-dom';
import ChoreList from './ChoreList';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("ChoreList", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <ChoreList />
    </Provider>
    )
  })
})
