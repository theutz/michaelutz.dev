import { render } from "@testing-library/react";
import { CTA } from "components/pages/home/CTA";

describe("<CTA />", () => {
  it("renders", () => {
    // Arrange

    // Act
    const { asFragment } = render(<CTA />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
