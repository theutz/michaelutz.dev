import { render, screen } from "@testing-library/react";
import { Default } from "components/layouts/Default";

describe("<Default />", () => {
  let asFragment: () => void;

  beforeEach(() => {
    // Arrange
    // Act
    ({ asFragment } = render(<Default>Hello</Default>));
  });

  // Assert

  it("renders", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("passes down children", () => {
    expect(screen.getByText("Hello")).toBeVisible();
  });
});
