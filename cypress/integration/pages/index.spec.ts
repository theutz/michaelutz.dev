// @ts-expect-error the Definitely Types types definitely suck
import crypto from "crypto"

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

  describe.only(`email newsletter subscription`, () => {
    before(function () {
      cy.then(function () {
        this.mailchimpBaseUrl = `https://${Cypress.env(
          "MAILCHIMP_API_SERVER"
        )}.api.mailchimp.com/3.0`
        this.list_id = Cypress.env("MAILCHIMP_AUDIENCE_ID")
        this.pass = Cypress.env("MAILCHIMP_API_KEY")
        this.user = "any"
      })
        .fixture("profile")
        .then(function ({ email }) {
          this.email = email
          cy.request({
            url: this.mailchimpBaseUrl + "/search-members",
            qs: { query: this.email },
            body: { list_id: this.list_id },
            auth: { user: this.user, pass: this.pass },
            retryOnStatusCodeFailure: true,
          }).then(({ body }) => {
            this.members = body.exact_matches.members
            this.member = this.members[0]
            this.subscriber_hash = crypto
              .createHash("md5")
              .update(this.member.email_address.toLowerCase())
              .digest("hex")
          })
        })
    })

    beforeEach(function () {
      cy.get("[data-cy=email-signup]").as("signup")
      cy.get("@signup").find("[data-cy=input]").as("input")
      cy.get("@signup").find("[data-cy=button]").as("button")
      cy.get("@signup").find("[data-cy=icon]").as("icon")

      cy.intercept("/api/subscribe").as("subscribe")
    })

    afterEach(() => {
      cy.get("@input").clear()
    })

    after(function () {
      cy.request({
        url: `${this.mailchimpBaseUrl}/lists/${this.list_id}/members/${this.subscriber_hash}`,
        method: "DELETE",
        auth: { user: this.user, pass: this.pass },
        retryOnStatusCodeFailure: true,
      })
    })

    describe(`when using a new email`, () => {
      it(`works`, function () {
        cy.get("@input").type(this.email)
        cy.get("@button").click()
        cy.wait("@subscribe").its("response.statusCode").should("eq", 201)
      })
    })

    describe(`when using an existing email`, () => {
      specify("used member exists", function () {
        expect(this.members).to.have.lengthOf(1)
      })

      it("fails", function () {
        cy.get("@input").type(this.email)
        cy.get("@button").click()
        cy.wait("@subscribe").its("response.statusCode").should("eq", 400)
      })
    })
  })
})
