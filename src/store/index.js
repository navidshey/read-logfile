import { combineReducers } from "redux";
import logFileReducer from "./reducers/logReducer";

const rootReducer = combineReducers({
  logfile: logFileReducer,
});

export default rootReducer;
