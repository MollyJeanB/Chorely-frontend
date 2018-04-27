
const API_BASE_URL = "http://localhost:8080";

export const POST_COMPLETION_SUCCESS = "POST_COMPLETION_SUCCESS";
export const postCompletionSuccess = values => ({
  type: POST_COMPLETION_SUCCESS,
  values
})


export const postCompletion = (memberId, choreId) => {
  console.log(memberId, choreId)
  return (dispatch) => {

    fetch(`${API_BASE_URL}/completions`, {
      method: "post",
      body: JSON.stringify(memberId, choreId),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      console.log(response)
      return response.json()
    }
    )
    .then(data => {
      dispatch(postCompletionSuccess(data))
    })
    .catch(err => console.log(err))
  }
}

export const deleteCompletion = (id, values) => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/completions/${id}`, {
      method: "delete",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => dispatch(deleteCompletionSuccess(id)))
    .catch(err => console.log(err))
  }
}

export const DELETE_COMPLETION_SUCCESS = "DELETE_COMPLETION_SUCCESS";
export const deleteCompletionSuccess = id => ({
  type: DELETE_COMPLETION_SUCCESS,
  id
})

export const updateCompletion = (id, values) => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/completions/${id}`, {
      method: "put",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      console.log(response)
      return response.json()
    }
    )
    .then(data => {
      dispatch(updateCompletionSuccess(data))
    })
    .catch(err => console.log(err))
  }
}

export const UPDATE_COMPLETION_SUCCESS = "UPDATE_COMPLETION_SUCCESS"
export const updateCompletionSuccess = (id, values) => ({
  type: UPDATE_COMPLETION_SUCCESS,
  id,
  values
})
