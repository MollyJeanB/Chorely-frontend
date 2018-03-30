import { EXPAND_MENU } from "../actions/actions";

const initialState = {
  drawerOpen: false
};

export const choreReducer = (state=initialState, action) => {
  if (action.type === EXPAND_MENU) {
    return Object.assign({}, state, {
      drawerOpen: !state.drawerOpen
    })
  }
  return state;
}
