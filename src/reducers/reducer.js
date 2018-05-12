import {
  EXPAND_MENU,
  CHANGE_COLOR,
  GET_CHART_DATA_SUCCESS,
  POST_NEW_USER_SUCCESS,
  POST_NEW_USER_FAIL,
  LOGIN_FAIL,
  SET_AUTH_TOKEN,
  LOADING,
  CHART_LOADING,
  LOGIN_LOADING
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

import {
  POST_COMPLETION_SUCCESS,
  UPDATE_COMPLETION_SUCCESS,
  DELETE_COMPLETION_SUCCESS
 } from "../actions/completion-actions"

const initialState = {
  //right now resetTime is hardcoded. A future version of the app will include a weekly reset in which the completions and scores for the week reset while the chores and members remain in the chart. Overall scores will be tallied on the stats page, which is also a future feature
  resetTime: "Sunday at 5pm",
  chartLoading: true,
  members: {},
  chores: {},
  completions: {}
};

export const choreReducer = (state = initialState, action) => {

  if (action.type === LOGIN_FAIL) {
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

  if (action.type === LOADING) {
    return Object.assign({}, state, {
      loading: action.value
    })
  }

  if (action.type === CHART_LOADING) {
    return Object.assign({}, state, {
      chartLoading: action.value
    })
  }

  if (action.type === LOGIN_LOADING) {
    return Object.assign({}, state, {
      loginLoading: action.value
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

  if (action.type === DELETE_COMPLETION_SUCCESS) {
    let completionArray = [...state.completions]
    let deletedIndex = completionArray.findIndex(item => item.id === action.id);
   completionArray.splice(deletedIndex, 1);
       return Object.assign({}, state, {
         completions: completionArray
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

if (action.type === POST_COMPLETION_SUCCESS) {
  return Object.assign({}, state, {
    completions: [...state.completions, action.values]
  })
}

if (action.type === UPDATE_CHORE_SUCCESS) {
  let choreArray = [...state.chores]
  choreArray.forEach(chore => {
  if (chore.id === action.values.id) {
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

if (action.type === UPDATE_COMPLETION_SUCCESS) {
  let completionArray = [...state.completions]
  completionArray.forEach(completion => {
  if (completion.id === action.values.id) {
    completion = Object.assign(completion, action.values)
  }
})
  return Object.assign({}, state, {
    completions: completionArray
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
      chores: action.values.chores,
      completions: action.values.completions
    })
  }

  return state;
};
