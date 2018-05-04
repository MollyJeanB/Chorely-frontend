import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Member';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("Landing", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <Landing />
    </Provider>
    )
  })
})
