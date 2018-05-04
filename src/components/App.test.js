import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("App", () => {
  it("Renders without crashing", () => {
    shallow(
      <Provider store={store}>
      <App />
    </Provider>
    )
  })
})
