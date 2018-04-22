import {
  EXPAND_MENU,
  SHOW_MEMBER_FORM,
  CHANGE_COLOR,
  EDIT_MEMBER_FORM,
  POST_MEMBER_SUCCESS,
  DELETE_MEMBER,
  GET_CHART_DATA_SUCCESS
} from "../actions/actions";

const initialState = {
  resetTime: "Sunday at 5pm",
  members: {},
  chores: {},
  choreCompletions: {},
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
    member.color = action.memberColor;
    let members = state.members;
    members[action.id] = member;
    return Object.assign({}, state, {
      members: members
    });
  }

  if (action.type === DELETE_MEMBER) {
    console.log(action.id);
    delete state.members[action.id];
    let members = state.members;
    return Object.assign({}, state, {
      members: members
    });
  }

  // if (action.type === SUBMIT_NEW_MEMBER) {
  //   const id = Object.keys(state.members).length + 1;
  //   const newMember = {
  //     [id]: {
  //       name: action.values.memberName,
  //       color: action.values.memberColor,
  //       weekPoints: 0,
  //       memberId: id
  //     }
  //   };
  //   return Object.assign({}, state, {
  //     members: {
  //       ...state.members,
  //       ...newMember
  //     }
  //   });
  // }

if (action.type === POST_MEMBER_SUCCESS) {
  return Object.assign({}, state, {
    members: action.values.members
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
