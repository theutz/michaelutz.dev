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

describe(`the links`, () => {
  const hamburgerSelector = "[data-cy=hamburger-menu-button]"

  const links = ["Pricing", "Partners", "Company"]
  beforeEach(() => {
    cy.get("[data-cy=hamburger-menu-button]").as("hamburger")
  })

  context(`on mobile`, { viewportHeight: 844, viewportWidth: 390 }, () => {
    it(`is visible`, () => {
      cy.get("@hamburger").should("be.visible")
    })

    context(`when clicking`, () => {
      before(() => {
        cy.get(hamburgerSelector).click()
      })

      beforeEach(() => {
        cy.get("[data-cy=hamburger-popover]").as("menu")
      })

      it(`shows the popover menu`, () => {
        cy.get("@menu").should("be.visible")
      })

      describe(`other links`, () => {
        links.forEach((link) => {
          it(`has the ${link} link`, () => {
            cy.get("@menu").find(`a:contains(${link})`).should("be.visible")
          })
        })
      })
    })
  })

  context(`on larger screens`, () => {
    it(`is not visible`, () => {
      cy.get("@hamburger").should("not.be.visible")
    })
  })
})
