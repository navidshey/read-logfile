import React from "react";
import { render } from "@testing-library/react";
import { CustomBox } from './../components/custom/box/CustomBox';

function renderComponent(props) {
  const defaultProps = {
    title: "title",
    color: "green",
  };
  return render(<CustomBox {...defaultProps} {...props} />);
}

describe("<CustomBox>", () => {
  it("should show title", async () => {
    const { getByText } = renderComponent();
    expect(getByText("title")).toBeTruthy();
  });

 it('should set background to box', ()=>{
   const { getByTestId  } = renderComponent();
   const box = getByTestId("custom-box");
    const style = window.getComputedStyle(box);
    expect(style.backgroundColor).toEqual("green");
  })
});
