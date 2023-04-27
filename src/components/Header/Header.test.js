import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe("Testing the header", () => {
  it("should render the header on the screen", () => {
    render(<Header />);
   

    const head = screen.getByRole("heading", {
      name: /craft beer breweries/i,
    });

    expect(head).toBeInTheDocument();
  });
});
