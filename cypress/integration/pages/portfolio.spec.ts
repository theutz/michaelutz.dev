describe("Portfolio Page", () => {
  before(() => {
    cy.visit("/portfolio")
  })

  it("loads", () => {
    cy.getBySel("page-portfolio")
  })
})
