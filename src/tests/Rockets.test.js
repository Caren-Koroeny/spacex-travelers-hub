import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store"
import { render } from "@testing-library/react";
import Rockets from "../components/Rockets";

describe("Display Rockets Components", () => {
  it("Should rockets Mission items", () => {
    const container  = render(
        <Provider store={store}>
        <Rockets />
        </Provider>
    );
    expect(container).toMatchSnapshot();
    });
});
