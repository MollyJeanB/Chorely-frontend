const {API_BASE_URL} = require("../config")

//ajax calls for the completions CRUD operations and passing responses onto the reducer

export const POST_COMPLETION_SUCCESS = "POST_COMPLETION_SUCCESS";
export const postCompletionSuccess = values => ({
  type: POST_COMPLETION_SUCCESS,
  values
})


export const postCompletion = (memberId, choreId) => {
  return (dispatch, getState) => {
    let authToken = getState().chart.authToken
     fetch(`${API_BASE_URL}/completions`, {
       method: "post",
       body: JSON.stringify({ choreId, memberId }),
       headers: {
         "Content-Type": "application/json",
         "Authorization": `Bearer ${authToken}`
       }
     })
       .then(response => {
         return response.json()
       })
       .then(data => {
         dispatch(postCompletionSuccess(data))
       })
       .catch(err => console.log(err))
   }
 }


export const deleteCompletion = (id) => {
  return (dispatch, getState) => {
    let authToken = getState().chart.authToken
    fetch(`${API_BASE_URL}/completions/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`
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

export const updateCompletion = (id, memberId) => {
  return (dispatch, getState) => {
    let authToken = getState().chart.authToken
    fetch(`${API_BASE_URL}/completions/${id}`, {
      method: "put",
      body: JSON.stringify(memberId),
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
      dispatch(updateCompletionSuccess(data))
    })
    .catch(err => console.log(err))
  }
}

export const UPDATE_COMPLETION_SUCCESS = "UPDATE_COMPLETION_SUCCESS"
export const updateCompletionSuccess = data => ({
  type: UPDATE_COMPLETION_SUCCESS,
  values: data
})
