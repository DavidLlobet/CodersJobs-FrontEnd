import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../redux/store/store";
import RegisterForm from "./RegisterForm";

const { screen, render } = require("@testing-library/react");
const { Provider } = require("react-redux");

describe("Given a RegisterForm component", () => {
  describe("When it renders", () => {
    test("Then it should render a form with several inputs and a button", () => {
      render(
        <Router>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </Router>
      );

      const registerForm = screen.getByRole("form");
      const button = screen.getByRole("button");

      expect(registerForm).toHaveClass("register-form");
      expect(button).toHaveClass("register-form__button");
    });
  });

  describe('When the user types in something', ()=>{
    test('Then input values are updated',()=>{
      render(
        <Provider store={store}>
          <Router>
            <RegisterForm/>
          </Router>
        </Provider>
      )
      userEvent.type(screen.getByPlaceholderText('Email'),'David');
      expect(screen.getByPlaceholderText('Email')).toHaveValue('David');
    })
  })
});
