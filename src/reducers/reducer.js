import {
  EXPAND_MENU,
  SHOW_MEMBER_FORM,
  CHANGE_COLOR,
  EDIT_MEMBER_FORM,
  GET_CHART_DATA_SUCCESS
} from "../actions/actions";

import {
  POST_MEMBER_SUCCESS,
} from "../actions/member-actions"

import {
  POST_CHORE_SUCCESS
} from "../actions/chore-actions"

const initialState = {
  resetTime: "Sunday at 5pm",
  members: [],
  chores: {},
  completions: {},
};

export const choreReducer = (state = initialState, action) => {
  if (action.type === EXPAND_MENU) {
    return Object.assign({}, state, {
      drawerOpen: !state.drawerOpen
    });
  }

  if (action.type === SHOW_MEMBER_FORM) {
    return Object.assign({}, state, {
      memberFormDisplayed: !state.memberFormDisplayed
    });
  }

  if (action.type === CHANGE_COLOR) {
    let member = state.members[action.id];
    member.color = action.color;
    let members = state.members;
    members[action.id] = member;
    return Object.assign({}, state, {
      members: members
    });
  }

if (action.type === POST_MEMBER_SUCCESS) {
  return Object.assign({}, state, {
    members: [...state.members, action.values]
  })
}

if (action.type === POST_CHORE_SUCCESS) {
  return Object.assign({}, state, {
    chores: action.values.chores
  })
}

  if (action.type === GET_CHART_DATA_SUCCESS) {
    return Object.assign({}, state, {
      members: action.values.members,
      chores: action.values.chores
    })
  }

  if (action.type === EDIT_MEMBER_FORM) {
    const updatedMember = state.members[action.memberIndex];
    updatedMember.memberFormDisplayed = !updatedMember.memberFormDisplayed;
    let members = state.members;
    members[action.memberId] = updatedMember;

    return Object.assign({}, state, {
      members: members
    });
  }

  return state;
};
