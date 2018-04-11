import React from "react";
// import ReactDOM from 'react-dom';
import { choreReducer } from "./reducer";
import { expandMenu, showMemberForm } from "../actions/actions";
import configure from "../setupTests";

describe("choreReducer", () => {
  it("should set the initial state when nothing is passed in", () => {
    const state = choreReducer(undefined, { type: "__UNKNOWN" });
    expect(state).toEqual({
      resetTime: "Sunday at 5pm",
      members: {
        "1": {
          name: "Mel",
          memberFormDisplayed: false,
          memberId: 1,
          color: "orange",
          weekPoints: 1,
          totalPoints: 17
        },
        "2": {
          name: "Queen Flea",
          memberFormDisplayed: false,
          color: "fuschia",
          memberId: 2,
          weekPoints: 1,
          totalPoints: 17
        },
        "3": {
          name: "Flea Peasant",
          color: "cornflowerBlue",
          weekPoints: 1,
          memberId: 3,
          totalPoints: 17
        },
        "4": {
          name: "Molly",
          color: "brightBlue",
          memberId: 4,
          weekPoints: 3,
          totalPoints: 25
        },
        "5": {
          name: "Steve",
          color: "purple",
          memberId: 5,
          weekPoints: 4,
          totalPoints: 26
        }
      },
      chores: {
        "1": {
          choreName: "Sweep Floors",
          choreId: 1,
          pointValue: 2,
          timesPerWeek: 3
        },
        "2": {
          choreName: "Wipe Counters",
          choreId: 2,
          pointValue: 1,
          timesPerWeek: 7
        },
        "3": {
          choreName: "Clean Bathroom",
          choreId: 3,
          pointValue: 5,
          timesPerWeek: 1
        }
      },
      choreCompletions: {
        "1": {
          choreId: 3,
          memberId: 1,
          completedAt: 1
        }
      }
    });
  });
});
