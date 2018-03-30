import {createStore, combineReducers} from "redux"
import {reducer as formReducer} from "redux-form"
import {choreReducer} from "./reducers/reducer"

export default createStore(
  combineReducers({
    form: formReducer,
    chart: choreReducer
  }))
