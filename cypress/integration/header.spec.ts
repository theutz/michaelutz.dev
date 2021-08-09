before(() => {
  cy.visit("/")
})

beforeEach(() => {
  cy.get("[data-cy=header-nav]").as("header")
})

describe(`the logo`, () => {
  it(`has sr text`, () => {
    cy.get("@header").find(".sr-only:contains(Michael Utz)").should("exist")
  })

  describe("the link", () => {
    beforeEach(() => {
      cy.get("@header").find("a[href='/']").as("link")
    })

    it(`exists`, () => {
      cy.get("@link").should("exist")
    })

    it(`takes you to the home page`, () => {
      cy.get("@link").click()
      cy.url().should("eq", Cypress.config().baseUrl + "/")
    })
  })
})
