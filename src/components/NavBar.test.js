import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './App';
import {shallow} from "enzyme";

describe("NavBar", () => {
  it("Renders without crashing", () => {
    shallow(<NavBar />)
  })
})
