import { logFilesRowCount, numberOfRowsReturnOnEachCall } from "./constants";
/**
 * Function to create Mock logfile
 *
 * @param {number} from - shows size of returned row of log files which should be less than considered rows of logfile
 * @returns rows of logfile if from is less than size of considered rows or null, if it is not
 */
export function createLogFile(from) {
  const logFileSize = logFilesRowCount;
  const rowOnEachCall = numberOfRowsReturnOnEachCall;
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
