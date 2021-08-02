import { render } from "@testing-library/react";
import Index from "../../pages/index";

describe("<Index />", () => {
  it("renders", () => {
    // Arrange

    // Act
    const { asFragment } = render(<Index />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  it("breaks", () => {
    expect(true).toBe(false);
  });
});
