import { render, screen } from "@testing-library/react"
import { LogoCloud } from "./LogoCloud"

describe("<LogoCloud />", () => {
  it("renders", () => {
    // Arrange

    // Act
    const { asFragment } = render(<LogoCloud />)

    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
