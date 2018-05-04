import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("Login", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <Login />
    </Provider>
    )
  })
})
