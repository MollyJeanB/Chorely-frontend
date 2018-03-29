import { EXPAND_MENU } from "./actions";

const initialState = {
  drawerOpen: false
};

export const drawerReducer = (state=initialState, action) => {
let drawerOpen;
  if (action.type === EXPAND_MENU) {
    return Object.assign({}, state, {
      drawerOpen: !state.drawerOpen
    })
  }
  return state;
}
