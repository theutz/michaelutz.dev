describe(`Header`, () => {
  const selectors = {
    header: "header-nav",
    hamburger: "hamburger-menu-button",
    hamburgerPopover: "hamburger-popover",
    logoLink: "header-logo-link",
  }

  before(() => {
    cy.visit("/")
  })

  describe(`the logo`, () => {
    it(`exists`, () => {
      cy.getBySel(selectors.logoLink).should("exist")
    })

    it(`has sr text`, () => {
      cy.getBySel(selectors.header)
        .find(".sr-only")
        .contains("Michael Utz")
        .should("exist")
    })

    context(`when clicking`, () => {
      beforeEach(() => {
        cy.getBySel(selectors.logoLink).click()
      })

      it(`takes you to the home page`, () => {
        cy.url().should("eq", Cypress.config().baseUrl + "/")
      })
    })
  })

  describe(`the links`, () => {
    const links = ["Pricing", "Partners", "Company"]

    context(`on mobile`, { viewportHeight: 844, viewportWidth: 390 }, () => {
      it(`is visible`, () => {
        cy.getBySel(selectors.hamburger).should("be.visible")
      })

      context(`when clicking`, () => {
        before(() => {
          cy.getBySel(selectors.hamburger).click()
        })

        beforeEach(() => {
          cy.getBySel(selectors.hamburgerPopover)
        })

        it(`shows the popover menu`, () => {
          cy.getBySel(selectors.hamburgerPopover).should("be.visible")
        })

        describe(`other links`, () => {
          links.forEach((link) => {
            it(`has the ${link} link`, () => {
              cy.getBySel(selectors.hamburgerPopover)
                .find(`a:contains(${link})`)
                .should("be.visible")
            })
          })
        })
      })
    })

    context(`on larger screens`, () => {
      it(`is not visible`, () => {
        cy.getBySel(selectors.hamburger).should("not.be.visible")
      })
    })
  })
})
