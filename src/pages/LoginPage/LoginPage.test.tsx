import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../redux/store/store";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component,", () => {
  describe("When it is called", () => {
    test("Then it should render a page with a login form and a hidden register form", () => {
      render(
        <Router>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </Router>
      );
    });
  });
  describe("When it renders", () => {
    test("Then it should render a title that says 'Iniciar sesión'", () => {
      render(
        <Router>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </Router>
      );

      const title = screen.getByRole("heading");

      expect(title).toHaveClass("title");
    });
  });
});
