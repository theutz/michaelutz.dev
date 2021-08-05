import { render, screen } from "@testing-library/react"
import { Subscribe } from "components/Footer/Subscribe"

describe("<Subscribe />", () => {
  it("renders", () => {
    // Arrange

    // Act
    const { asFragment } = render(<Subscribe />)

    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
