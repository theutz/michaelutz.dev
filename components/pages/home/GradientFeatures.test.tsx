import { render, screen } from "@testing-library/react";
import { GradientFeatures } from "components/pages/home/GradientFeatures";

describe("<GradientFeatures />", () => {
  it("renders", () => {
    // Arrange

    // Act
    const { asFragment } = render(<GradientFeatures />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
