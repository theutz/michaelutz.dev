import { render, screen } from "@testing-library/react"
import About from "pages/About"

describe("<About />", () => {
  it("renders", () => {
    // Arrange

    // Act
    const { asFragment } = render(<About />)

    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
