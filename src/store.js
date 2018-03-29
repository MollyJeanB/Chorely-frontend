import {createStore, combineReducers} from "redux"
import {reducer as formReducer} from "redux-form"
import {drawerReducer} from "./reducer"

export default createStore(
  combineReducers({
    form: formReducer,
    drawer: drawerReducer
  }))
