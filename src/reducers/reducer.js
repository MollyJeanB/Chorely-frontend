import { EXPAND_MENU, SHOW_MEMBER_FORM } from "../actions/actions";

const initialState = {
  drawerOpen: false,
  memberFormDisplayed: false
  // members: []
};

export const choreReducer = (state=initialState, action) => {

  if (action.type === EXPAND_MENU) {
    return Object.assign({}, state, {
      drawerOpen: !state.drawerOpen
    })
  }

if (action.type === SHOW_MEMBER_FORM) {
  return Object.assign({}, state, {
    memberFormDisplayed: !state.memberFormDisplayed
  })
}

  return state;
}
