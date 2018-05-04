import React from 'react';
import ReactDOM from 'react-dom';
import EditChore from './EditChore';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("EditChore", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <EditChore />
    </Provider>
    )
  })
})
