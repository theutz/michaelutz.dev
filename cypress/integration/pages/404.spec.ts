describe(`404 Page`, () => {
  before(() => {
    cy.visit("/some-random-not-found-page", { failOnStatusCode: false })
  })

  it(`loads correctly`, () => {
    cy.get("[data-cy=404-page]").should("exist")
  })

  describe(`return to home`, () => {
    beforeEach(() => {
      cy.get("[data-cy=return-home-link]").as("link")
    })

    it(`returns to the home page`, () => {
      cy.get("@link").click()

      cy.url().should("eq", Cypress.config().baseUrl + "/")
    })
  })
})
