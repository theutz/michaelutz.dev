import { render, screen } from "@testing-library/react"
import { Header } from "./Header"

describe("<Header />", () => {
  it("renders", () => {
    // Arrange

    // Act
    const { asFragment } = render(<Header />)

    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
