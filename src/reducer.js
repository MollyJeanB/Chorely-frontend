import React from "react";
import { connect } from "react-redux";
import { EXPAND_MENU } from "./actions";

const initialState = {
  drawerOpen: false
};

export default (state=initialState, action) => {
let drawerOpen;
  if (action.type === EXPAND_MENU) {
    return Object.assign({}, state, {
      drawerOpen: !this.state.drawerOpen
    })
  }
  return state;
}
