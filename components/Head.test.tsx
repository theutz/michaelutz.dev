import { render } from "@testing-library/react";
import { Head } from "components/Head";

describe("<Head />", () => {
  it("renders", () => {
    // Arrange

    // Act
    const { asFragment } = render(<Head />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
