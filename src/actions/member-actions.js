const API_BASE_URL = "http://localhost:8080";

export const POST_MEMBER_SUCCESS = "POST_MEMBER_SUCCESS";
export const postMemberSuccess = values => ({
  type: POST_MEMBER_SUCCESS,
  values
})


export const postMember = values => {
  return (dispatch, getState) => {
    let authToken = getState().chart.authToken
    fetch(`${API_BASE_URL}/members`, {
      method: "post",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`
      }
    })
    .then(response => {
      console.log(response)
      return response.json()
    }
    )
    .then(data => {
      dispatch(postMemberSuccess(data))
    })
    .catch(err => console.log(err))
  }
}

export const deleteMember = (id, values) => {
  return (dispatch, getState) => {
    let authToken = getState().chart.authToken
    fetch(`${API_BASE_URL}/members/${id}`, {
      method: "delete",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`
      }
    })
    .then(() => dispatch(deleteMemberSuccess(id)))
    .catch(err => console.log(err))
  }
}

export const DELETE_MEMBER_SUCCESS = "DELETE_MEMBER_SUCCESS";
export const deleteMemberSuccess = id => ({
  type: DELETE_MEMBER_SUCCESS,
  id
})

export const updateMember = state => {
  return (dispatch, getState) => {
    let authToken = getState().chart.authToken
    fetch(`${API_BASE_URL}/members/${state.id}`, {
      method: "put",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`
      }
    })
    .then(response => {
      console.log(response)
      return response.json()
    }
    )
    .then(data => {
      dispatch(updateMemberSuccess(data))
    })
    .catch(err => console.log(err))
  }
}

export const UPDATE_MEMBER_SUCCESS = "UPDATE_MEMBER_SUCCESS"
export const updateMemberSuccess = data => ({
  type: UPDATE_MEMBER_SUCCESS,
  values: data
})
