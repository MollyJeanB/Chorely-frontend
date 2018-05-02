import jwtDecode from "jwt-decode"
import {saveAuthToken} from '../local-storage';
const API_BASE_URL = "http://localhost:8080";

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
  return (dispatch) => {
    fetch(`${API_BASE_URL}/`, {
      method: "get",
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
      console.log(res)
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
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(err => console.log(err))
  }
}

const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(loginSuccess(decodedToken.user));
    saveAuthToken(authToken);
};

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const loginSuccess = currentUser => ({
    type: LOGIN_SUCCESS,
    currentUser
});

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});
