import Skeleton from "@mui/material/Skeleton";
import React from "react";

/**
 *
 * @returns Loading icons when ever data is fetching
 */
const Spinner = () => {
  return (
    <>
      {" "}
      <Skeleton variant="text" width={350} />{" "}
      <Skeleton variant="text" width={290} />{" "}
      <Skeleton variant="text" width={150} />{" "}
    </>
  );
};

export default Spinner;
