import React from 'react';
// import ReactDOM from 'react-dom';
import NavBarMobile from './NavBarMobile';
import {shallow} from "enzyme";
import configure from "../setupTests"

describe("NavBarMobile", () => {
  it("Renders without crashing", () => {
    shallow(<NavBarMobile />)
  })
})
