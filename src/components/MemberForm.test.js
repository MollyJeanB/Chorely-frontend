import React from 'react';
import ReactDOM from 'react-dom';
import MemberForm from './MemberForm';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("MemberForm", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <MemberForm />
    </Provider>
    )
  })
})
