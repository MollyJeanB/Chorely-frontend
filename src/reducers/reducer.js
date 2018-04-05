import { EXPAND_MENU, SHOW_MEMBER_FORM, CHANGE_COLOR } from "../actions/actions";

const initialState = {
  drawerOpen: false,
  memberFormDisplayed: false,
  resetTime: "Sunday at 5pm",
  members: [
    {
      name: "Mel",
      color: "orange",
      weekPoints: 1,
      totalPoints: 17,
      choreCompletions: [
        {
          choreName: "Sweep Floors",
          weekCompletions: 0,
          totalCompletions: 2
        },
        {
          choreName: "Wipe Counters",
          weekCompletions: 1,
          totalCompletions: 5
        },
        {
          choreName: "Clean Bathroom",
          weekCompletions: 0,
          totalCompletions: 1
        }
      ]
    },
    {
      name: "Queen Flea",
      color: "fuschia",
      weekPoints: 1,
      totalPoints: 17,
      choreCompletions: [
        {
          choreName: "Sweep Floors",
          weekCompletions: 0,
          totalCompletions: 2
        },
        {
          choreName: "Wipe Counters",
          weekCompletions: 1,
          totalCompletions: 5
        },
        {
          choreName: "Clean Bathroom",
          weekCompletions: 0,
          totalCompletions: 1
        }
      ]
    },
    {
      name: "Flea Peasant",
      color: "cornflowerBlue",
      weekPoints: 1,
      totalPoints: 17,
      choreCompletions: [
        {
          choreName: "Sweep Floors",
          weekCompletions: 0,
          totalCompletions: 2
        },
        {
          choreName: "Wipe Counters",
          weekCompletions: 1,
          totalCompletions: 5
        },
        {
          choreName: "Clean Bathroom",
          weekCompletions: 0,
          totalCompletions: 1
        }
      ]
    },
  {
    name: "Molly",
    color: "brightBlue",
    weekPoints: 3,
    totalPoints: 25,
    choreCompletions: [
      {
        choreName: "Sweep Floors",
        weekCompletions: 1,
        totalCompletions: 2
      },
      {
        choreName: "Wipe Counters",
        weekCompletions: 1,
        totalCompletions: 11
      },
      {
        choreName: "Clean Bathroom",
        weekCompletions: 0,
        totalCompletions: 2
      }
    ]
    },
  {
    name: "Steve",
    color: "purple",
    weekPoints: 4,
    totalPoints: 26,
    choreCompletions: [
      {
        choreName: "Sweep Floors",
        weekCompletions: 2,
        totalCompletions: 3
      },
      {
        choreName: "Wipe Counters",
        weekCompletions: 0,
        totalCompletions: 10
      },
      {
        choreName: "Clean Bathroom",
        weekCompletions: 0,
        totalCompletions: 2
      }
    ]
    }
  ],
  chores:  [
    {
        choreName: "Sweep Floors",
        pointValue: 2,
        timesPerWeek: 3,
        possibleCompletions: 15,
        totalCompletions: 7
      },
      {
        choreName: "Wipe Counters",
        pointValue: 1,
        timesPerWeek: 5,
        possibleCompletions: 25,
        totalCompletions: 22
      },
      {
        choreName: "Clean Bathroom",
        pointValue: 5,
        timesPerWeek: 1,
        possibleCompletions: 5,
        totalCompletions: 4
      }
  ]
};

export const choreReducer = (state=initialState, action) => {

  if (action.type === EXPAND_MENU) {
    return Object.assign({}, state, {
      drawerOpen: !state.drawerOpen
    })
  }

if (action.type === SHOW_MEMBER_FORM) {
  return Object.assign({}, state, {
    memberFormDisplayed: !state.memberFormDisplayed
  })
}

if (action.type === CHANGE_COLOR) {
  return Object.assign({}, state, {
    memberColor: action.memberColor
  })
}

  return state;
}
