import React from 'react';
import ReactDOM from 'react-dom';
import ChoreBubble from './ChoreBubble';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("ChoreBubble", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <ChoreBubble />
    </Provider>
    )
  })
})
