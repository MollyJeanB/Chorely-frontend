const API_BASE_URL = "http://localhost:8080"

export const EXPAND_MENU = "EXPAND_MENU"
export const expandMenu = drawerOpen => ({
  type: EXPAND_MENU,
  drawerOpen
})

export const CHANGE_COLOR = "CHANGE_COLOR"
export const changeColor = (id, color) => ({
  type: CHANGE_COLOR,
  color,
  id
})

export const GET_CHART_DATA_SUCCESS = "GET_CHART_DATA_SUCCESS"
export const getChartDataSuccess = values => {
  return {
    type: GET_CHART_DATA_SUCCESS,
    values
  }
}

export const getChartData = values => {
  return dispatch => {
    fetch(`${API_BASE_URL}/`, {
      method: "get",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText)
        }
        return res.json()
      })
      .then(all => {
        dispatch(getChartDataSuccess(all))
      })
      .catch(err => console.log(err))
  }
}
