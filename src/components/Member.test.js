import React from 'react';
import ReactDOM from 'react-dom';
import Member from './Member';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("Member", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <Member />
    </Provider>
    )
  })

})
