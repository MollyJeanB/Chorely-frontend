import React from 'react';
import ReactDOM from 'react-dom';
import NavBarMobile from './NavBarMobile';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";
// import {saveAuthToken, clearAuthToken} from '../local-storage';
const localStorage = "localStorage"


describe("NavBarMobile", () => {
  it("Renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <NavBarMobile />
      </Provider>
    )
  })
})
