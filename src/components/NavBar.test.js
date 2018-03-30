import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import {shallow} from "enzyme";
import configure from "../setupTests"

describe("NavBar", () => {
  it("Renders without crashing", () => {
    shallow(<NavBar />)
  })
})
