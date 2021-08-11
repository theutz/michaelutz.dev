import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { Header } from "./Header"

describe("<Header />", () => {
  it("renders", () => {
    // Arrange

    // Act
    const { asFragment } = render(<Header />)

    // Assert
    expect(asFragment()).toMatchSnapshot()
  })

  describe("Blog popover", () => {
    describe("when clicking popover", () => {
      it.each`
        topic
        ${"Technology"}
        ${"Design"}
        ${"Communication"}
        ${"All"}
      `("lists the $topic topic", async ({ topic }) => {
        render(<Header />)

        fireEvent.click(screen.getByText("Blog"))

        await waitFor(() => screen.getByText(topic))

        expect(screen.getByText(topic)).toBeVisible()
      })
    })
  })
})
