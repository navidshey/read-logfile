import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import shortid from  "shortid";
import useInterval from "../../hooks/useInterval";
import { getLogfile } from "../../store/actions/logAction";
import Spinner from "../custom/spinner/Spinner";
import { CustomBox } from "./../custom/box/CustomBox";
import Grid from "@mui/material/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  sticky: {
    position: "sticky",
    top: "1rem",
  },

  logPaper: {
    maxHeight: "600px",
    overflow: "auto",
    padding: 20,
    marginTop: "17px",
  },

  headerTitle: {
    background: "green",
  },
});

/**
 * Component to Fetch periodically and show logfile with its details
 * 
 * It fetch Data every 1 second and new received rows attached to the end of existing rows
 */
export default function LogFileRead() {
  const logFileDispatch = useDispatch();

  const [errorCount, setErrorCount] = useState(0);
  const [infoCount, setInfoCount] = useState(0);
  const [warningCount, setWarningCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [delay, setDelay] = useState(1000);
  const classes = useStyles();
  const { newRows, logfiles, loading, error } = useSelector(
    (state) => state.logfile
  );
  useInterval(fetchData, delay);


  /**
   * On receiving new rows of logFiles, count its infos, errors and warnings rows and total lines 
   * If no new line exist stop process of periodic calling
   */
  useEffect(() => {
    newRows && setTotal((x) => x + newRows.length);
    newRows && countRowsDetails();
    if ((!newRows || newRows.length === 0) && logfiles) {
      setDelay(null);
    }

    /**
     * The function calculate the number of Warnings, Infos and Errors in log files and save save them in stateparameters
     */
    function countRowsDetails() {
      let result = { WARNING: 0, INFO: 0, ERROR: 0 };
      for (let i = 0; i < newRows.length; i++) {
        let status = newRows[i].split(" ")[2];
        result[status]++;
      }
      if (result["INFO"]) {
        setInfoCount((x) => x + result["INFO"]);
      }
      if (result["ERROR"]) {
        setErrorCount((x) => x + result["ERROR"]);
      }
      if (result["WARNING"]) {
        setWarningCount((x) => x + result["WARNING"]);
      }
    }
  }, [newRows, logfiles]);

  /**
   * Fetch new rows of log file based on the currenct total rows fetched till now
   */
  function fetchData() {
    logFileDispatch(getLogfile(total));
  }

  return (
    <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2} lg={2} key="status">
          <Grid className={classes.sticky}>
            <CustomBox title={`Info: ${infoCount}`} color="blue" />
            <CustomBox title={`warning: ${warningCount}`} color="orange" />
            <CustomBox title={`error: ${errorCount}`} color="red" />
            <CustomBox title={`total Lines: ${total}`} color="grey" />
          </Grid>
        </Grid>
        <Grid item xs={12} md={10} lg={10} key="logPaper">
          <CustomBox
            className={classes.headerTitle}
            title={
              delay
                ? `Reading log file every ${delay} Mili-second ...`
                : "Log File reading finished!"
            }
            color="green"
          />
          <Paper className={classes.logPaper} elevation={3}>
            {error && <div> {error}</div>}
            {!logfiles && delay && <Spinner />}
            {logfiles &&
              logfiles.map((row) => {
                return <div key={shortid.generate()}>{row}</div>;
              })}
            {logfiles && logfiles.length > 0 && loading && <Spinner />}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
