import React from 'react';
import ReactDOM from 'react-dom';
import MemberList from './MemberList';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("MemberList", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <MemberList />
    </Provider>
    )
  })
})
