import {
  EXPAND_MENU,
  SHOW_MEMBER_FORM,
  CHOOSE_MEMBER_COLOR,
  CHOOSE_MEMBER_NAME,
  SUBMIT_NEW_MEMBER_SUCCESS
} from "../actions/actions"

const initialState = {
  drawerOpen: false,
  memberFormDisplayed: false,
  members: []
}

export const choreReducer = (state = initialState, action) => {
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

  if (action.type === CHOOSE_MEMBER_COLOR) {
    return Object.assign({}, state, {
      memberColor: action.memberColor
    })
  }

  if (action.type === CHOOSE_MEMBER_NAME) {
    return Object.assign({}, state, {
      memberName: action.memberName
    })
  }

  if (action.type === SUBMIT_NEW_MEMBER_SUCCESS) {
    debugger
    return Object.assign({}, state, {
      members: state.members.concat(action.member)
    })
  }

  return state
}
