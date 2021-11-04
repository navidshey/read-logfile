import styled from "@emotion/styled";
import React from "react";

const ErrorDiv = styled.div`
    margin: auto,
    text-align: center,
    margin-top: 10%,
    color: red
  font-size: xxx-large
`;

/**
 * @returns Is the component when the page not found, shows the error
 */
const NotFount = () => {
  return (
    <ErrorDiv>
      404
      <br />
      The page not fount !
    </ErrorDiv>
  );
};

export default NotFount;
