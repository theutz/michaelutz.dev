import { render, screen } from "@testing-library/react"
import NotFoundPage from "pages/404"

describe("<NotFoundPage />", () => {
  it("renders", () => {
    // Arrange

    // Act
    const { asFragment } = render(<NotFoundPage />)

    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
