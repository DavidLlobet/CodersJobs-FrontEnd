import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../redux/store/store";
import HomePage from "./HomePage";

describe("Given a HomePage component,", () => {
  describe("When it renders", () => {
    test("Then it should render", () => {
      render(
        <Router>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </Router>
      );
    });
  });
  describe("When it renders", () => {
    test("Then it should render a list of jobs", () => {
      render(
        <Router>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </Router>
      );

      const list = screen.getByRole("list");

      expect(list).toHaveClass("listado");
    });
  });
});
