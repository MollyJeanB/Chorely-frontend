import {createStore, combineReducers, applyMiddleware} from "redux"
import {reducer as formReducer} from "redux-form"
import {choreReducer} from "./reducers/reducer"
import thunk from "redux-thunk"

export default createStore(
  combineReducers({
    form: formReducer,
    chart: choreReducer
  }),
  applyMiddleware(thunk)
)
