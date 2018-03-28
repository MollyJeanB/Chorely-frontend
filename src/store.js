import {createStore, combineReducers} from "redux"
import {reducer as formReducer} from "redux-form"

export default createStore(
  combineReducers({
    form: formReducer
  })
)
