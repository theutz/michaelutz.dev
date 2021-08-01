import { render } from "@testing-library/react";
import { Stats } from "components/pages/home/Stats";

describe("<Stats />", () => {
  it("renders", () => {
    // Arrange

    // Act
    const { asFragment } = render(<Stats />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
