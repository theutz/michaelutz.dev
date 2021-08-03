describe(`Home Page`, () => {
  describe(`<head>`, () => {
    before(() => {
      cy.visit("/")
    })

    beforeEach(() => {
      cy.get("head").as("head")
    })

    it(`has a title`, () => {
      cy.title().should("eq", "Michael Utz | Web Developer")
    })

    it(`has an svg icon`, () => {
      cy.get("@head")
        .find("[data-cy=svg-favicon]")
        .should("have.attr", "rel", "icon")
        .should("have.attr", "type", "image/svg+xml")
        .and("have.attr", "href", "/assets/images/favicon.svg")
    })

    it(`has a png icon`, () => {
      cy.get("@head")
        .find("[data-cy=png-favicon]")
        .should("have.attr", "rel", "icon")
        .should("have.attr", "type", "image/png")
        .and("have.attr", "href", "/assets/images/favicon.png")
    })

    describe(`the page fonts`, () => {
      const url = "https://rsms.me/inter/inter.css"

      it(`should import the inter font family`, () => {
        cy.get("@head")
          .find("[data-cy=font-stylesheet]")
          .should("have.attr", "rel", "stylesheet")
          .should("have.attr", "href", url)
      })

      it(`should make a working request`, () => {
        cy.request(url).its("status").should("eq", 200)
      })
    })

    describe(`the logo cloud`, () => {
      beforeEach(() => {
        cy.get("[data-cy=logo-cloud]").as("parent")
        cy.get("@parent").find("[data-cy=logo-cloud-container]").as("grid")
      })

      it("has 5 children", () => {
        cy.get("@grid").children().should("have.lengthOf", 5)
      })

      describe(`last child`, () => {
        beforeEach(() => {
          cy.get("@grid").find(":last-child").as("last")
        })

        it(`spans 2 columns`, () => {
          cy.get("@last").should("have.class", "col-span-2")
        })

        it(`starts column 4 on medium`, () => {
          cy.get("@last").should("have.class", "md:col-start-4")
        })
      })

      describe(`2nd to last`, () => {
        beforeEach(() => {
          cy.get("@grid").find(":nth-last-child(2)").as("item")
        })

        it(`starts column 2 on md`, () => {
          cy.get("@item").should("have.class", "md:col-start-2")
        })
      })
    })
  })
})
