import { render } from "@testing-library/react"
import { AlternatingFeatureSections } from "./AlternatingFeatures"

describe("<AlternatingFeatureSections />", () => {
  it("renders", () => {
    // Arrange

    // Act
    const { asFragment } = render(<AlternatingFeatureSections />)

    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
