// import axios from "axios";
import { responseDelay } from "./../../util/constants";
import { createLogFile } from "./../../util/logFileGenerator";
import { actionKeyType } from "./../constants";

/**Fetch new rows of log file
 *
 * The function is a mock function which return response with a 2 seconds delay
 * In real application better to use axios library which is added to the project
 *
 * @param {number} from - which shows count of received rows in log file
 * @returns dispatch new rows of log file to reducer.
 */
export const getLogfile = (url, from) => (dispatch) => {
  dispatch(setLoading());

  // axios.get(url)
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(Object.assign([], createLogFile(from)));
    }, responseDelay);
  })
    .then((response) =>
      dispatch({
        type: actionKeyType.GET_LOGFILE,
        payload: response,
      })
    )
    .catch(() =>
      dispatch({
        type: actionKeyType.GET_LOGFILE_ERROR,
        payload: "error in getting logfile rows !",
      })
    );
};

/**
 * dispatch loading to reducer
 */
const setLoading = () => {
  return {
    type: actionKeyType.LOADING,
  };
};
