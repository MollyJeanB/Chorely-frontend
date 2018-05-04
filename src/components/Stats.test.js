import React from 'react';
import ReactDOM from 'react-dom';
import Stats from './Stats';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("Stats", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <Stats />
    </Provider>
    )
  })
})
