import React from 'react';
import ReactDOM from 'react-dom';
import ChoreForm from './ChoreForm';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("ChoreForm", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <ChoreForm />
    </Provider>
    )
  })
})
