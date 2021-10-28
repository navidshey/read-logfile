import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./../store/index";

export const makeTestStore = () => {
  const store = createStore(rootReducer, {});
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);
  return store;
};

export function testRender(jsx, { store, ...otherOpts }) {
  return render(<Provider store={store}>{jsx}</Provider>, otherOpts);
}
