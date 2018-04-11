import {
  EXPAND_MENU,
  SHOW_MEMBER_FORM,
  CHANGE_COLOR,
  EDIT_MEMBER_FORM,
  SUBMIT_NEW_MEMBER,
  DELETE_MEMBER
} from "../actions/actions";

const initialState = {
  drawerOpen: false,
  memberFormDisplayed: false,
  resetTime: "Sunday at 5pm",
  members: {
    "1": {
      name: "Mel",
      memberFormDisplayed: false,
      memberId: 1,
      color: "orange",
      weekPoints: 1,
      totalPoints: 17,
      choreCompletions: [
        {
          choreName: "Clean Bathroom",
          weekCompletions: 0,
          totalCompletions: 1
        }
      ]
    },
    "2": {
      name: "Queen Flea",
      memberFormDisplayed: false,
      color: "fuschia",
      memberId: 2,
      weekPoints: 1,
      totalPoints: 17
    },
    "3": {
      name: "Flea Peasant",
      color: "cornflowerBlue",
      weekPoints: 1,
      memberId: 3,
      totalPoints: 17
    },
    "4": {
      name: "Molly",
      color: "brightBlue",
      memberId: 4,
      weekPoints: 3,
      totalPoints: 25
    },
    "5": {
      name: "Steve",
      color: "purple",
      memberId: 5,
      weekPoints: 4,
      totalPoints: 26
    }
  },
  chores: {
    "1": {
      choreName: "Sweep Floors",
      choreId: 1,
      pointValue: 2,
      timesPerWeek: 3
    },
    "2": {
      choreName: "Wipe Counters",
      choreId: 2,
      pointValue: 1,
      timesPerWeek: 7,
      completions: {
        1: 4,
        2: 5
      }
    },
    "3": {
      choreName: "Clean Bathroom",
      choreId: 3,
      pointValue: 5,
      timesPerWeek: 1
    }
  }
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
    // delete state.members[action.id];
    // let members = state.members;
    // return Object.assign({}, state, {
    //   members: members
    // });
  }

  if (action.type === SUBMIT_NEW_MEMBER) {
    const id = Object.keys(state.members).length + 1;
    const newMember = {
      [id]: {
        name: action.values.memberName,
        color: action.values.memberColor,
        weekPoints: 0
      }
    };
    return Object.assign({}, state, {
      members: {
        ...state.members,
        ...newMember
      }
    });
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
