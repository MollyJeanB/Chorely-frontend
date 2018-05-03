import {
  EXPAND_MENU,
  CHANGE_COLOR,
  GET_CHART_DATA_SUCCESS,
  POST_NEW_USER_SUCCESS,
  POST_NEW_USER_FAIL,
  LOGIN_FAIL,
  SET_AUTH_TOKEN
} from "../actions/actions";

import {
  POST_MEMBER_SUCCESS,
  DELETE_MEMBER_SUCCESS,
  UPDATE_MEMBER_SUCCESS
} from "../actions/member-actions"

import {
  POST_CHORE_SUCCESS,
  DELETE_CHORE_SUCCESS,
  UPDATE_CHORE_SUCCESS
} from "../actions/chore-actions"

const initialState = {
  resetTime: "Sunday at 5pm",
  members: {},
  chores: {},
  completions: {},
};

export const choreReducer = (state = initialState, action) => {

  if (action.type === LOGIN_FAIL) {
    console.log("ran in reducer")
    return Object.assign({}, state, {
      loginFail: true
    })
  }

  if (action.type === SET_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: action.authToken,
      isLoggedin: true
    })
  }

  if (action.type === EXPAND_MENU) {
    return Object.assign({}, state, {
      drawerOpen: !state.drawerOpen
    });
  }

  if (action.type === POST_NEW_USER_SUCCESS) {
    return Object.assign({}, state, {
      successMessage: true,
      newUserName: action.values.username
    })
  }

  if (action.type === POST_NEW_USER_FAIL) {
    return Object.assign({}, state, {
      failMessage: true
    })
  }


  if (action.type === DELETE_CHORE_SUCCESS) {
    let choreArray = [...state.chores]
    let deletedIndex = choreArray.findIndex(item => item.id === action.id);
   choreArray.splice(deletedIndex, 1);
       return Object.assign({}, state, {
         chores: choreArray
       });
  }

  if (action.type === DELETE_MEMBER_SUCCESS) {
    let memberArray = [...state.members]
    let deletedIndex = memberArray.findIndex(item => item.id === action.id);
   memberArray.splice(deletedIndex, 1);
       return Object.assign({}, state, {
         members: memberArray
       });
  }

if (action.type === POST_MEMBER_SUCCESS) {
  return Object.assign({}, state, {
    members: [action.values, ...state.members]
  })
}

if (action.type === POST_CHORE_SUCCESS) {
  return Object.assign({}, state, {
    chores: [action.values, ...state.chores]
  })
}

if (action.type === UPDATE_CHORE_SUCCESS) {
  let choreArray = [...state.chores]
  choreArray.forEach(chore => {
  if (chore.id === action.values.id) {
    console.log(chore)
    chore = Object.assign(chore, action.values)
  }
})
  return Object.assign({}, state, {
    chores: choreArray
  })
}

if (action.type === UPDATE_MEMBER_SUCCESS) {
  let memberArray = [...state.members]
  memberArray.forEach(member => {
  if (member.id === action.values.id) {
    member = Object.assign(member, action.values)
  }
})
  return Object.assign({}, state, {
    members: memberArray
  })
}

if (action.type === CHANGE_COLOR) {
  let memberArray = [...state.members]
  memberArray.forEach(member => {
    if (member.id === action.id) {
      member.color = action.color;
    }
  })
  return Object.assign({}, state, {
    members: memberArray
  });
}

  if (action.type === GET_CHART_DATA_SUCCESS) {
    return Object.assign({}, state, {
      members: action.values.members,
      chores: action.values.chores
    })
  }

  return state;
};
