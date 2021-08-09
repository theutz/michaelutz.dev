import crypto from "crypto"
import faker from "faker"

function makeSubscriberHash(email: string) {
  return crypto.createHash("md5").update(email.toLowerCase()).digest("hex")
}

describe(`subscribe`, () => {
  before(function () {
    cy.visit("/").then(function () {
      this.email = faker.internet.email()
      this.subscriber_hash = makeSubscriberHash(this.email)
      this.mailchimpBaseUrl = `https://${Cypress.env(
        "MAILCHIMP_API_SERVER"
      )}.api.mailchimp.com/3.0`
      this.list_id = Cypress.env("MAILCHIMP_AUDIENCE_ID")
      this.pass = Cypress.env("MAILCHIMP_API_KEY")
      this.user = "any"
    })
  })

  beforeEach(function () {
    cy.get("[data-cy=email-signup]").as("signup")
    cy.get("@signup").find("[data-cy=input]").as("input")
    cy.get("@signup").find("[data-cy=button]").as("button")
    cy.get("@signup").find("[data-cy=icon]").as("icon")

    cy.intercept("/api/subscribe").as("subscribe")

    cy.get("@input").type(this.email)
    cy.get("@button").click()
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
      cy.wait("@subscribe")
        .its("response")
        .then((response) => {
          expect(response?.statusCode).to.eq(201)
        })
    })
  })

  describe(`when using an existing email`, () => {
    it("fails", function () {
      cy.wait("@subscribe")
        .its("response")
        .then((response) => {
          expect(response?.statusCode).to.eq(400)
          expect(response?.body.title).to.match(/Member Exists/)
        })
      cy.get("@signup")
        .siblings(":contains(Member Exists)")
        .should("be.visible")
    })
  })
})
