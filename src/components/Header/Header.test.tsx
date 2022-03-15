import { render, screen } from "@testing-library/react";
import { Header } from "react-bootstrap/lib/Modal";

describe("Given a Footer component", () => {
  describe("When it renders", () => {
    test("Then it should render", () => {
      render(<Header />);
      const header = screen.getByTitle("header");

      expect(header).toHaveClass("header");
    });
  });
});
