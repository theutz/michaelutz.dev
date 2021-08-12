describe("<UnderConstruction />", () => {
  before(() => {
    cy.visit("/portfolio")
  })

  it("loads", () => {
    cy.get("[data-testid=under-construction]").should("be.visible")
  })
})
