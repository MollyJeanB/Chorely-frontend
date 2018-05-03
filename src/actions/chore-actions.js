const API_BASE_URL = "http://localhost:8080";

export const POST_CHORE_SUCCESS = "POST_CHORE_SUCCESS";
export const postChoreSuccess = values => ({
  type: POST_CHORE_SUCCESS,
  values
})

export const postChore = values => {
  return (dispatch, getState) => {
    let authToken = getState().chart.authToken
    fetch(`${API_BASE_URL}/chores`, {
      method: "post",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`
      }
    })
    .then(response => {
      return response.json()
    }
    )
    .then(data => {
      dispatch(postChoreSuccess(data))
    })
    .catch(err => console.log(err))
  }
}

export const deleteChore = (id, values) => {
  return (dispatch, getState) => {
    let authToken = getState().chart.authToken
    fetch(`${API_BASE_URL}/chores/${id}`, {
      method: "delete",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`
      }
    })
    .then(() => dispatch(deleteChoreSuccess(id)))
    .catch(err => console.log(err))
  }
}

export const DELETE_CHORE_SUCCESS = "DELETE_CHORE_SUCCESS";
export const deleteChoreSuccess = id => ({
  type: DELETE_CHORE_SUCCESS,
  id
})

export const updateChore = state => {
  return (dispatch, getState) => {
    let authToken = getState().chart.authToken
    fetch(`${API_BASE_URL}/chores/${state.id}`, {
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
      dispatch(updateChoreSuccess(data))
    })
    .catch(err => console.log(err))
  }
}

export const UPDATE_CHORE_SUCCESS = "UPDATE_CHORE_SUCCESS"
export const updateChoreSuccess = data => ({
  type: UPDATE_CHORE_SUCCESS,
  values: data

})
