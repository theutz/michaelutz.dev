import { render, screen } from "@testing-library/react"
import About from "pages/about"

describe("<About />", () => {
  it("renders", () => {
    // Arrange

    // Act
    const { asFragment } = render(<About />)

    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
