import {saveAuthToken, clearAuthToken} from '../local-storage';
const {API_BASE_URL} = require("../config")

//actions for mobile menu changes, color changes to member, GET request for all data on load, and auth ajax calls

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
        dispatch(chartLoading(false))
      })
      .catch(err => console.log(err))
  };
};

export const CHART_LOADING = "CHART_LOADING"
export const chartLoading = value => ({
  type: CHART_LOADING,
  value
})

export const LOADING = "LOADING"
export const loading = value => ({
  type: LOADING,
  value
})

export const LOGIN_LOADING = "LOGIN_LOADING"
export const loginLoading = value => ({
  type: LOGIN_LOADING,
  value
})

export const postNewUser = credentials => {
  return (dispatch) => {
    dispatch(loading(true))
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
        dispatch(loading(false))
    })
    .catch((err) => {
      console.log(err)
      dispatch(postNewUserFail())
      dispatch(loading(false))
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
    dispatch(loginLoading(true))
    fetch(`${API_BASE_URL}/auth/login`, {
      method: "post",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      dispatch(loginLoading(false))
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
      dispatch(loginLoading(false))
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
