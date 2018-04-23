import axios from 'axios';

const API_BASE_URL = "http://localhost:8080";

export const POST_MEMBER_SUCCESS = "POST_MEMBER_SUCCESS";
export const postMemberSuccess = values => ({
  type: POST_MEMBER_SUCCESS,
  values
})

// export const POST_MEMBER  = "POST_MEMBER"
export const postMember = values => {
  return (dispatch) => {
    axios.post(`${API_BASE_URL}/members`, values)
    .then(data => {
      console.log(data.data)
      dispatch(postMemberSuccess(data.data));
    })
    .catch(err => {
      // dispatch(submitNewMemberFailure(err))
    });
  }
}

// export const updateMember
//
// export const DELETE_MEMBER = "DELETE_MEMBER";
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
