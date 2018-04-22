const API_BASE_URL = "http://localhost:8080";

export const POST_CHORE_SUCCESS = "POST_MEMBER_SUCCESS";
export const postChoreSuccess = values => ({
  type: POST_CHORE_SUCCESS,
  values
})

// export const POST_MEMBER  = "POST_MEMBER"
export const postChore = values => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/chores`, {
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
      dispatch(postChoreSuccess(data));
    })
    .catch(err => {
      // dispatch(submitNewMemberFailure(err))
    });
  }
}

export const deleteChore = id => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/chores/${id}`, {
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
      dispatch(postChoreSuccess(data));
    })
    .catch(err => {
      // dispatch(submitNewMemberFailure(err))
    });
  }
}
