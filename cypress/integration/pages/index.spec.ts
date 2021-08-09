// @ts-expect-error the Definitely Types types definitely suck

describe(`Home Page`, () => {
  before(() => {
    cy.visit("/")
  })

  describe(`<head>`, () => {
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

  describe(`email newsletter subscription`, () => {
    before(() => {
      const url = `https://${Cypress.env(
        "MAILCHIMP_API_SERVER"
      )}.api.mailchimp.com/3.0/search-members`
      cy.request({
        url,
        qs: { query: "michael@theutz.com" },
        body: { list_id: Cypress.env("MAILCHIMP_AUDIENCE_ID") },
        auth: { user: "any", pass: Cypress.env("MAILCHIMP_API_KEY") },
        retryOnStatusCodeFailure: true,
      })
        .its("body.exact_matches.members")
        .as("members")
    })

    beforeEach(() => {
      cy.get("[data-cy=email-signup]").as("signup")
      cy.get("@signup").find("[data-cy=input]").as("input")
      cy.get("@signup").find("[data-cy=button]").as("button")
      cy.get("@signup").find("[data-cy=icon]").as("icon")

      cy.intercept("/api/subscribe").as("subscribe")
    })

    describe(`when using an existing email`, () => {
      beforeEach(() => {
        cy.fixture("profile").then(function (profile) {
          this.email = profile.email
        })
      })

      it("can check to see the member exists", () => {
        cy.get("@members").should("have.length.gt", 0)
      })

      it("fails", function () {
        cy.get("@input").type(this.email)
        cy.get("@button").click()
        cy.wait("@subscribe").its("response.statusCode").should("eq", 400)
      })
    })
  })
})
