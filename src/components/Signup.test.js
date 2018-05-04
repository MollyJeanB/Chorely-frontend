import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './Signup';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("Signup", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <Signup />
    </Provider>
    )
  })
})
