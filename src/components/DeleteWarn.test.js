import React from 'react';
import ReactDOM from 'react-dom';
import DeleteWarn from './DeleteWarn';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("DeleteWarn", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <DeleteWarn />
    </Provider>
    )
  })
})
