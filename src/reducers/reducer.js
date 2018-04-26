import {
  EXPAND_MENU,
  CHANGE_COLOR,
  GET_CHART_DATA_SUCCESS
} from "../actions/actions"

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
  completions: {}
}

export const choreReducer = (state = initialState, action) => {
  if (action.type === EXPAND_MENU) {
    return Object.assign({}, state, {
      drawerOpen: !state.drawerOpen
    })
  }

  if (action.type === DELETE_CHORE_SUCCESS) {
    let newChores = state.members
    delete newChores[action.id]
    return Object.assign({}, state, {
      members: newChores
    })
  }

  if (action.type === DELETE_MEMBER_SUCCESS) {
    let newMembers = state.members
    delete newMembers[action.id]
    return Object.assign({}, state, {
      members: newMembers
    })
  }

  if (action.type === POST_MEMBER_SUCCESS) {
    let newMembers = state.members
    newMembers[action.values.id] = action.values
    return Object.assign({}, state, {
      members: newMembers
    })
  }

  if (action.type === POST_CHORE_SUCCESS) {
    let newChores = state.chores
    newChores[action.values.id] = action.values
    return Object.assign({}, state, {
      chores: newChores
    })
  }

  if (action.type === UPDATE_CHORE_SUCCESS) {
    let choreKeys = Object.keys(state.chores)
    let newChores = state.chores
    choreKeys.forEach(key => {
      let chore = state.chores[key]
      if (key === action.values.id) {
        chore = Object.assign(chore, action.values)
      }
    })
    return Object.assign({}, state, {
      chores: newChores
    })
  }

  if (action.type === UPDATE_MEMBER_SUCCESS) {
    let memberKeys = Object.keys(state.members)
    let newMembers = state.members
    memberKeys.forEach(key => {
      let member = state.members[key]
      if (key === action.values.id) {
        newMembers[key] = Object.assign(member, action.values)
      }
    })
    return Object.assign({}, state, {
      members: newMembers
    })
  }

  if (action.type === CHANGE_COLOR) {
    let memberKeys = Object.keys(state.members)
    let newMembers = state.members
    memberKeys.forEach(key => {
      let member = state.members[key]
      if (key === action.id) {
        member.color = action.color
      }
    })
    return Object.assign({}, state, {
      members: newMembers
    })
  }

  if (action.type === GET_CHART_DATA_SUCCESS) {
    return Object.assign({}, state, {
      members: action.values.members.reduce((acc, cur) => {
        acc[cur.id] = cur
        return acc
      }, {}),
      chores: action.values.chores.reduce((acc, cur) => {
        acc[cur.id] = cur
        return acc
      }, {})
    })
  }

  return state
}
