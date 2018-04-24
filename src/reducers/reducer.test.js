import React from "react";
// import ReactDOM from 'react-dom';
import { choreReducer } from "./reducer";
import { expandMenu, showMemberForm } from "../actions/actions";
import configure from "../setupTests";

describe("choreReducer", () => {
  it("should set the initial state when nothing is passed in", () => {
    const state = choreReducer(undefined, { type: "__UNKNOWN" });
    expect(state).toEqual({
      resetTime: "Sunday at 5pm",
      members: [],
      chores: [],
      completions: []
    });
  });
});
