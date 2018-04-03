export const EXPAND_MENU = "EXPAND_MENU"
export const expandMenu = drawerOpen => ({
  type: EXPAND_MENU,
  drawerOpen
})

export const SHOW_MEMBER_FORM = "SHOW_MEMBER_FORM"
export const showMemberForm = memberFormDisplayed => ({
  type: SHOW_MEMBER_FORM,
  memberFormDisplayed
})

export const ADD_MEMBER = "ADD_MEMBER"
export const addMember = members => ({
  type: ADD_MEMBER,
  members
})
