import React from 'react';
import ReactDOM from 'react-dom';
import Chore from './Chore';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("Chore", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <Chore />
    </Provider>
    )
  })
})
