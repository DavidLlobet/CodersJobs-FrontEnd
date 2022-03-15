import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When it renders", () => {
    test("Then it should render", () => {
      render(<Footer />);
      const footer = screen.getByTitle("footer");

      expect(footer).toHaveClass("footer");
    });
  });
});
