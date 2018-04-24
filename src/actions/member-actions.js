
const API_BASE_URL = "http://localhost:8080";

export const POST_MEMBER_SUCCESS = "POST_MEMBER_SUCCESS";
export const postMemberSuccess = values => ({
  type: POST_MEMBER_SUCCESS,
  values
})


export const postMember = values => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/members`, {
      method: "post",
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
      dispatch(postMemberSuccess(data))
    })
    .catch(err => console.log(err))
  }
}

export const deleteMember = id => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/members/${id}`, {
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
      dispatch(postMemberSuccess(data));
    })
    .catch(err => {
      // dispatch(submitNewMemberFailure(err))
    });
  }
}

export const updateMember = (id, values) => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/members/${id}`, {
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
      dispatch(postMemberSuccess(data));
    })
    .catch(err => {
      // dispatch(submitNewMemberFailure(err))
    });
  }
}
