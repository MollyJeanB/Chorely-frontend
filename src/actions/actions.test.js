import {EXPAND_MENU, expandMenu, CHANGE_COLOR, changeColor, LOGIN_FAIL, loginFail, LOGOUT_SUCCESS, logoutSuccess, POST_NEW_USER_FAIL, postNewUserFail, POST_NEW_USER_SUCCESS, postNewUserSuccess} from "./actions"

describe("expandMenu", () => {
  it("Should return the action", () => {
    const drawerOpen = "bear";
    const action = expandMenu(drawerOpen);
    expect(action.type).toEqual(EXPAND_MENU);
    expect(action.drawerOpen).toEqual(drawerOpen)
  })
})

describe("changeColor", () => {
  it("Should return the action", () => {
    const color = "red";
    const id = "12345"
    const action = changeColor(id, color);
    expect(action.type).toEqual(CHANGE_COLOR);
    expect(action.color).toEqual(color);
    expect(action.id).toEqual(id)
  })
})

describe("loginFail", () => {
  it("Should return the action", () => {
    const action = loginFail()
    expect(action.type).toEqual(LOGIN_FAIL)
  })
})

describe("logoutSuccess", () => {
  it("Should return the action", () => {
    const action = logoutSuccess()
    expect(action.type).toEqual(LOGOUT_SUCCESS)
  })
})

describe("postNewUserFail", () => {
  it("Should return the action", () => {
    const action = postNewUserFail()
    expect(action.type).toEqual(POST_NEW_USER_FAIL)
  })
})

describe("postNewUserSuccess", () => {
  it("Should return the action", () => {
    const action = postNewUserSuccess()
    expect(action.type).toEqual(POST_NEW_USER_SUCCESS)
  })
})
