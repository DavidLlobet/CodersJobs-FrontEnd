import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

import store from "../../redux/store/store";

const { screen, render } = require("@testing-library/react");
const { Provider } = require("react-redux");

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("Then it should render", () => {
      render(
        <Router>
          <Provider store={store}>
            <Header />;
          </Provider>
        </Router>
      );
      const header = screen.getByTitle("header");

      expect(header).toHaveClass("header");
    });
  });
});
