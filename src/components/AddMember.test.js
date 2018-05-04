import React from 'react';
import ReactDOM from 'react-dom';
import AddMember from './AddMember';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("AddMember", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <AddMember />
    </Provider>
    )
  })
})
