import React from 'react';
// import ReactDOM from 'react-dom';
import NavDrawer from './NavDrawer';
import {shallow} from "enzyme";
import configure from "../setupTests"

describe("NavDrawer", () => {
  it("Renders without crashing", () => {
    shallow(<NavDrawer drawerOpen={true} />)
  })
})
