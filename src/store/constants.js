
/**
 * different action type of the application specifies in this object
 */
export const actionKeyType = {
  LOADING: "loading",
  GET_LOGFILE: "get_logfile",
  GET_LOGFILE_ERROR: "get_logfile_error",
};

export const apiRoutes = {
  getLogfile: "https://localhost:5000/getLogfile/...",
};

export const responseDelay =200;
export const periodOfCall = 1000;
