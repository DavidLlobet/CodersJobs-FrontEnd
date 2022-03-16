import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store/store";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const header = screen.getByTitle("header");
  const footer = screen.getByTitle("footer");

  expect(header).toHaveClass("header");
  expect(footer).toHaveClass("footer");
});
