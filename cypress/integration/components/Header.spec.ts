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
    const links = ["Portfolio", "About"]

    context(`on mobile`, { viewportHeight: 844, viewportWidth: 390 }, () => {
      it(`is visible`, () => {
        cy.getBySel(selectors.hamburger).should("be.visible")
      })

      context(`when clicking`, () => {
        links.forEach((link) => {
          describe(`the ${link} link`, () => {
            before(() => {
              cy.getBySel(selectors.hamburger).should("be.visible").click()
            })

            after(() => {
              cy.go("back")
            })

            it(`works`, () => {
              cy.getBySel(selectors.hamburgerPopover)
                .find(`a:contains(${link})`)
                .as("link")
              cy.get("@link").should("be.visible")
              cy.get("@link").click()
              cy.url().should("match", new RegExp(`/${link.toLowerCase()}$`))
              cy.getBySel(selectors.hamburgerPopover).should("not.exist")
            })
          })
        })
      })
    })

    context(`on larger screens`, () => {
      it(`is not visible`, () => {
        cy.getBySel(selectors.hamburger).should("not.be.visible")
      })

      describe(`other links`, () => {
        afterEach(() => {
          cy.go("back")
        })

        links.forEach((link) => {
          it(`has the ${link} link`, () => {
            cy.getBySel(`header-link-${link.toLowerCase()}`)
              .should("be.visible")
              .click()
            cy.url().should("match", new RegExp(`/${link.toLowerCase()}$`))
          })
        })
      })
    })
  })
})
