const API_BASE_URL = "http://localhost:8080";

export const POST_COMPLETION_SUCCESS = "POST_COMPLETION_SUCCESS";
export const postCompletionSuccess = values => ({
  type: POST_COMPLETION_SUCCESS,
  values
})

export const postCompletion = values => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/completions`, {
      method: "post",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      console.log(data)
      dispatch(postCompletionSuccess(data));
    })
    .catch(err => {
      // dispatch(submitNewMemberFailure(err))
    });
  }
}

export const deleteCompletion = id => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/completions/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      dispatch(postCompletionSuccess(data));
    })
    .catch(err => {
      // dispatch(submitNewMemberFailure(err))
    });
  }
}

export const updateCompletion = (id, values) => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/completions/${id}`, {
      method: "put",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      dispatch(postCompletionSuccess(data));
    })
    .catch(err => {
      // dispatch(submitNewMemberFailure(err))
    });
  }
}
