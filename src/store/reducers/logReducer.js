import { actionKeyType } from "../constants";

const initialState = {
  loading: false,
};

/**Reducer for logfile
 *
 * based on sent action return new state
 * @param {object} state - current state of the store
 * @param {actionKeyType} action.type - an object which shows type of the action
 * @param {object} action.payload - dispatched data from action is saved in this object
 * @returns new state
 */
const logFileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionKeyType.LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionKeyType.GET_LOGFILE:
      return {
        ...state,
        error: null,
        loading: false,
        logfiles: state.logfiles
          ? [...state.logfiles, ...action.payload]
          : action.payload,
        newRows: action.payload,
      };
      case actionKeyType.GET_LOGFILE_ERROR:
        return{
          ...state,
          error: action.pay.LOADING,
          loading: false,
          logfiles: state.logfiles,
          newRows: null
        }
    default:
      return state;
  }
};

export default logFileReducer;
