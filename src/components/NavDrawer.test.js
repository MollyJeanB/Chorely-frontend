import React from 'react';
import ReactDOM from 'react-dom';
import NavDrawer from './NavDrawer';
import {shallow} from "enzyme";
import configure from "../setupTests";
import store from "../store";
import {Provider} from "react-redux";

describe("NavDrawer", () => {
  it("Renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <NavDrawer />
      </Provider>
    )
  })
})
