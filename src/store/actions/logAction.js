// import axios from "axios";
import { responseDelay, actionKeyType } from './../constants';

/**Fetch new rows of log file
 * 
 * The function is a mock function which return response with a 2 seconds delay
 * In real application better to use axios library which is added to the project
 * 
 * @param {number} from - which shows count of received rows in log file
 * @returns dispatch new rows of log file to reducer. 
 */
export const getLogfile = (from) => (dispatch) => {
  dispatch(setLoading());

  // axios.get(apiRoutes.getLogfile)
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

/**
 * Function to create Mock logfile
 * 
 * @param {number} from - shows size of returned row of log files which should be less than considered rows of logfile
 * @returns rows of logfile if from is less than size of considered rows or null, if it is not
 */
function createLogFile(from) {
  const logFileSize = 100;
  const rowOnEachCall = 5;
  let result = [];
  if (from < logFileSize) {
    for (let i = 0; i < rowOnEachCall; i++) {
      result.push(randomRow());
    }
    return result;
  } else {
    return null;
  }
}

/**
 * Gerenate random row for log file
 */
function randomRow() {
  let min = 2010;
  let max = 2021;

  let second = randomNumber(59);
  let minutes = randomNumber(59);
  let hour = randomNumber(24);
  let month = randomNumber(12);
  let day = randomNumber(30);
  let year = +randomNumber(max - min) + min;
  let severity = randomSeverity();

  return `${year}-${month}-${day} ${hour}:${minutes}:${second},994 ${severity} Some ${severity} message `;
}

/**
 * generate random number to maxNumber of received param with at least 2 digits length
 * 
 * @param {number} maxNumber - max number between randomly generated numbers
 * @returns random number  
 */
function randomNumber(maxNumber) {
  let result = Math.ceil(Math.random() * maxNumber);
  return +result < 10 ? `0${result}` : result;
}

/**
 * Generate a random severity 
 */
function randomSeverity() {
  switch (Math.ceil(Math.random() * 3)) {
    case 1:
      return "INFO";
    case 2:
      return "WARNING";
    case 3:
      return "ERROR";
    default:
      return "INFO";
  }
}
