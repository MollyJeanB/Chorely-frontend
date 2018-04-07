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

export const EDIT_MEMBER_FORM = "EDIT_MEMBER_FORM"
export const editMemberForm = memberIndex => ({
  type: EDIT_MEMBER_FORM,
  memberIndex: memberIndex
})

export const CHANGE_COLOR = "CHANGE_COLOR"
export const changeColor = (id, memberColor) => ({
  type: CHANGE_COLOR,
  memberColor,
  id
})

export const SUBMIT_NEW_MEMBER_SUCCESS = "SUBMIT_NEW_MEMBER_SUCCESS"
export const submitNewMemberSuccess = values => {
  debugger
}

export const SUBMIT_NEW_MEMBER = "SUBMIT_NEW_MEMBER"
export const submitNewMember = values => (dispatch, getState) => {
  values.memberColor = getState().chart.memberColor
  return {
    type: SUBMIT_NEW_MEMBER,
    values
  }
}

// export const SUBMIT_NEW_MEMBER = "SUBMIT_NEW_MEMBER"
// export const submitNewMember = values => {
//   return (dispatch, getState) => {
//     values.memberColor = getState().chart.memberColor
//     fetch(`${API_BASE_URL}/members`, {
//       method: "post",
//       body: JSON.stringify(values),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       .then(res => {
//         if (!res.ok) {
//           return Promise.reject(res.statusText)
//         }
//         return res.json()
//       })
//       .then(member => {
//         dispatch(submitNewMemberSuccess(member))
//       })
//       .catch(err => {
//         // dispatch(submitNewMemberFailure(err))
//       })
//   }
// }
