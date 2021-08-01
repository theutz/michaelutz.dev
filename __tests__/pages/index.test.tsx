import { render } from "@testing-library/react";
import { Home } from "../../pages/index";

test("it works", () => {
  // Arrange

  // Act
  const { asFragment } = render(<Home />);

  // Assert
  expect(asFragment()).toMatchSnapshot();
});
