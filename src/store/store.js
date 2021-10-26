import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./index";

const initialState = {};

const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
