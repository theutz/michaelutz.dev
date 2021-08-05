import { render, screen } from "@testing-library/react"
import { Footer } from "./Footer"

describe("<Footer />", () => {
  it("renders", () => {
    // Arrange

    // Act
    const { asFragment } = render(<Footer />)

    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
