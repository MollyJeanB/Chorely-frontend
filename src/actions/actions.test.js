import {EXPAND_MENU, expandMenu} from "./actions"

describe("expandMenu", () => {
  it("Should return the action", () => {
    const drawerOpen = false;
    const action = expandMenu(drawerOpen);
    expect(action.type).toEqual(EXPAND_MENU);
    expect(action.drawerOpen).toEqual(drawerOpen)
  })
})
