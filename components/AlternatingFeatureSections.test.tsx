import { render, screen } from "@testing-library/react";
import { AlternatingFeatureSections } from "./AlternatingFeatureSections";

describe("<AlternatingFeatureSections />", () => {
  it("renders", () => {
    // Arrange

    // Act
    const { asFragment } = render(<AlternatingFeatureSections />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
