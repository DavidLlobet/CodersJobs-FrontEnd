import { BrowserRouter as Router } from "react-router-dom";

import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";
import store from "../../redux/store/store";

const { screen, render } = require("@testing-library/react");
const { Provider } = require("react-redux");



describe("Given a LoginForm component", () => {
  describe("When it renders", () => {
    test("Then it should render a form with several inputs and a button", () => {
      render(
        <Router>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </Router>
      );

      const loginForm = screen.getByRole("form");
      const button = screen.getByRole("button");

      expect(loginForm).toHaveClass("login-form");
      expect(button).toHaveClass("login-form__button");
    });
  });


  describe('When the user types in inputs', ()=>{
    test('Then values are updated', ()=>{
      render(
        <Provider store={store}>
          <Router>
            <LoginForm />
          </Router>
        </Provider>
      )
      userEvent.type(screen.getByPlaceholderText('Usuario'), 'David');
      expect(screen.getByPlaceholderText('Usuario')).toHaveValue('David');
    })
  })
});
