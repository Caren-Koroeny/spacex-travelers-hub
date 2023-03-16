import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store"
import { render } from "@testing-library/react";
import Profile from "../components/Profile";
describe("Display Profile Components", () => {
  it("Should display Profile items", () => {
    const container  = render(
        <Provider store={store}>
        <Profile />
        </Provider>
    );
    expect(container).toMatchSnapshot();
    });
});
