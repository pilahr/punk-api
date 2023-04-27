import { render, screen } from "@testing-library/react";
import SearchBox from "./SearchBox";

describe("Testing the search box", () => {
  it("should render the search box on the screen", () => {
    render(<SearchBox />);

    const search = screen.getByRole("textbox");

    expect(search).toBeInTheDocument();
  });
});
