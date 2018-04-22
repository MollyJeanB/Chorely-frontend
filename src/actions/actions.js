const API_BASE_URL = "http://localhost:8080";

// import { normalize, schema } from "normalizr"

export const EXPAND_MENU = "EXPAND_MENU";
export const expandMenu = drawerOpen => ({
  type: EXPAND_MENU,
  drawerOpen
});

export const SHOW_MEMBER_FORM = "SHOW_MEMBER_FORM";
export const showMemberForm = memberFormDisplayed => ({
  type: SHOW_MEMBER_FORM,
  memberFormDisplayed
});

export const EDIT_MEMBER_FORM = "EDIT_MEMBER_FORM";
export const editMemberForm = memberIndex => ({
  type: EDIT_MEMBER_FORM,
  memberIndex: memberIndex
});

export const CHANGE_COLOR = "CHANGE_COLOR";
export const changeColor = (id, memberColor) => ({
  type: CHANGE_COLOR,
  memberColor,
  id
});


export const GET_CHART_DATA_SUCCESS = "GET_CHART_DATA_SUCCESS";
export const getChartDataSuccess = values => ({
  type: GET_CHART_DATA_SUCCESS,
  values
})

export const GET_CHART_DATA = "GET_CHART_DATA";
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
      .catch(err => {
        // dispatch(submitNewMemberFailure(err))
      });
  };
};
