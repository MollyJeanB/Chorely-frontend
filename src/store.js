import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from "redux-form";
import { choreReducer } from "./reducers/reducer";
// import { authReducer } from "./reducers/auth-reducer"
import thunk from "redux-thunk";
import {setAuthToken} from "./actions/actions"
import {loadAuthToken} from "./local-storage"

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(
  combineReducers({
    form: formReducer,
    chart: choreReducer,
  }),
  enhancer
);


const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  // store.dispatch(refreshAuthToken())
}

export default store
