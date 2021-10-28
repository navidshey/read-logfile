import React from "react";
import { makeTestStore, testRender } from "./../util/testHelper";
import LogFileRead from "./../components/logfile/LogfileRead";
import { waitFor } from "@testing-library/dom";

function renderComponent(props) {
  const defaultProps = {
    logFileUrl: "",
  };
  const store = makeTestStore();
  return testRender(<LogFileRead {...defaultProps} {...props} />, { store });
}

describe("<LogFileRead>", () => {
  it("should containing five box with their initial content", async () => {
    const { container } = renderComponent();
    let [info, warning, error, total, header] =
      container.getElementsByClassName("MuiCardMedia-root");

    expect(container.getElementsByClassName("MuiCardMedia-root").length).toBe(
      5
    );
    expect(info.textContent).toBe("Info: 0");
    expect(warning.textContent).toBe("Warning: 0");
    expect(error.textContent).toBe("Error: 0");
    expect(total.textContent).toBe("Total Lines: 0");
    expect(header.textContent).toBe(
      "Reading log file every 1000 Mili-second ..."
    );
  });

  it("should skleton shows at the begining", async () => {
    const { container } = renderComponent();
    await waitFor(() =>
      expect(
        container.getElementsByClassName("MuiSkeleton-root").length
      ).not.toBe(0)
    );
  });
});
