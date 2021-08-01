import { render } from "@testing-library/react";
import { Hero } from "./Hero";

describe("<Hero />", () => {
  it("renders", () => {
    // Arrange

    // Act
    const { asFragment } = render(<Hero />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
