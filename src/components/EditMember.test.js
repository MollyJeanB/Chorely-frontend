import React from 'react';
import ReactDOM from 'react-dom';
import EditMember from './EditMember';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("EditMember", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <EditMember />
    </Provider>
    )
  })
})
