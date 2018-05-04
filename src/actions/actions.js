import {saveAuthToken, clearAuthToken} from '../local-storage';
// const API_BASE_URL = "http://localhost:8080";
const {API_BASE_URL} = require("../config")

export const EXPAND_MENU = "EXPAND_MENU";
export const expandMenu = drawerOpen => ({
  type: EXPAND_MENU,
  drawerOpen
});

export const CHANGE_COLOR = "CHANGE_COLOR";
export const changeColor = (id, color) => ({
  type: CHANGE_COLOR,
  color,
  id
});

export const GET_CHART_DATA_SUCCESS = "GET_CHART_DATA_SUCCESS";
export const getChartDataSuccess = values => ({
  type: GET_CHART_DATA_SUCCESS,
  values
})

export const getChartData = values => {
  return (dispatch, getState) => {
    let authToken = getState().chart.authToken
    fetch(`${API_BASE_URL}/`, {
      method: "get",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(all => {
        dispatch(getChartDataSuccess(all));
      })
      .catch(err => console.log(err))
  };
};

export const postNewUser = credentials => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/users`, {
      method: "post",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    }
    )
    .then(data => {
        dispatch(postNewUserSuccess(data))
    })
    .catch((err) => {
      console.log(err)
      dispatch(postNewUserFail())
    })
  }
}

export const POST_NEW_USER_SUCCESS = "POST_NEW_USER_SUCCESS";
export const postNewUserSuccess = values => ({
  type: POST_NEW_USER_SUCCESS,
  values
})

export const POST_NEW_USER_FAIL = "POST_NEW_USER_FAIL";
export const postNewUserFail = () => ({
  type: POST_NEW_USER_FAIL
})

export const login = credentials => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/auth/login`, {
      method: "post",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    }
    )
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      console.log(err)
      dispatch(loginFail())
    })
  }
}

export const LOGIN_FAIL = "LOGIN_FAIL";
export const loginFail = () => ({
  type: LOGIN_FAIL
})

const storeAuthInfo = (authToken, dispatch) => {
    dispatch(setAuthToken(authToken));
    saveAuthToken(authToken);
};

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const logout = (dispatch) => {
  clearAuthToken()
  dispatch(logoutSuccess())
}

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
});
