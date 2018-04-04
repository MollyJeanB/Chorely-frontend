const API_BASE_URL = "http://localhost:3000"

export const EXPAND_MENU = "EXPAND_MENU"
export const expandMenu = drawerOpen => ({
  type: EXPAND_MENU,
  drawerOpen
})

export const SHOW_MEMBER_FORM = "SHOW_MEMBER_FORM"
export const showMemberForm = memberFormDisplayed => ({
  type: SHOW_MEMBER_FORM,
  memberFormDisplayed
})

export const ADD_MEMBER = "ADD_MEMBER"
export const addMember = members => ({
  type: ADD_MEMBER,
  members
})

export const CHOOSE_MEMBER_COLOR = "CHOOSE_MEMBER_COLOR"
export const chooseMemberColor = memberColor => ({
  type: CHOOSE_MEMBER_COLOR,
  memberColor
})

export const CHOOSE_MEMBER_NAME = "CHOOSE_MEMBER_NAME"
export const chooseMemberName = memberName => ({
  type: CHOOSE_MEMBER_NAME,
  memberName
})

export const SUBMIT_NEW_MEMBER_SUCCESS = "SUBMIT_NEW_MEMBER_SUCCESS"
export const submitNewMemberSuccess = member => ({
  type: SUBMIT_NEW_MEMBER_SUCCESS,
  member
})

export const SUBMIT_NEW_MEMBER_FAILURE = "SUBMIT_NEW_MEMBER_FAILURE"
export const submitNewMemberFailure = error => ({
  type: SUBMIT_NEW_MEMBER_FAILURE,
  error
})

export const SUBMIT_NEW_MEMBER = "SUBMIT_NEW_MEMBER"
export const submitNewMember = () => (dispatch, getState) => {
  debugger
  const { memberName, memberColor } = getState().chart
  fetch(`${API_BASE_URL}/members`, {
    method: "post",
    body: JSON.stringify({ memberName, memberColor }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json()
    })
    .then(member => {
      dispatch(submitNewMemberSuccess(member))
    })
    .catch(err => {
      dispatch(submitNewMemberFailure(err))
    })
}
