before(() => {
  cy.visit("/")
})

beforeEach(() => {
  cy.get("[data-cy=header-nav]").as("header")
})

describe(`the logo`, () => {
  beforeEach(() => {
    cy.get("@header").find("a[href='/']").as("link")
  })

  it(`exists`, () => {
    cy.get("@link").should("exist")
  })

  it(`has sr text`, () => {
    cy.get("@header").find(".sr-only:contains(Michael Utz)").should("exist")
  })

  context(`when clicking`, () => {
    beforeEach(() => {
      cy.get("@link").click()
    })

    it(`takes you to the home page`, () => {
      cy.url().should("eq", Cypress.config().baseUrl + "/")
    })
  })
})
