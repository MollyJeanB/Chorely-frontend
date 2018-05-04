import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("Input", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <Input />
    </Provider>
    )
  })
})
