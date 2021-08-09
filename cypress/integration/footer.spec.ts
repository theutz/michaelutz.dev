import crypto from "crypto"
import faker from "faker"

function makeSubscriberHash(email: string) {
  return crypto.createHash("md5").update(email.toLowerCase()).digest("hex")
}

describe(`Footer`, () => {
  before(function () {
    cy.visit("/")
  })

  describe(`Email Subscription`, () => {
    it(`has an icon`, () => {
      cy.getBySel("email-signup-icon-ready").should("be.visible")
    })

    context("when subscribing", () => {
      before(function () {
        this.email = faker.internet.email()
        this.subscriber_hash = makeSubscriberHash(this.email)
        this.mailchimpBaseUrl = `https://${Cypress.env(
          "MAILCHIMP_API_SERVER"
        )}.api.mailchimp.com/3.0`
        this.list_id = Cypress.env("MAILCHIMP_AUDIENCE_ID")
        this.pass = Cypress.env("MAILCHIMP_API_KEY")
        this.user = "any"
      })

      beforeEach(function () {
        let sendResponse: (value: unknown) => void | undefined

        const trigger = new Promise((resolve) => {
          sendResponse = resolve
        })

        cy.intercept("/api/subscribe", async (req) => {
          await trigger
          req.continue()
        }).as("subscribe")

        cy.getBySel("email-signup-input").type(this.email)
        cy.getBySel("email-signup-button").should("not.be.disabled").click()
        cy.getBySel("email-signup-icon-loading")
          .should("be.visible")
          .then(() => {
            sendResponse(undefined)
          })
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
        it(`sucessfully subscribes`, function () {
          cy.wait("@subscribe")
          cy.getBySel("email-signup-icon-ready").should("not.exist")
          cy.getBySel("email-signup-icon-success").should("be.visible")
        })
      })

      describe(`when using an existing email`, () => {
        before(() => {
          cy.reload()
        })

        it("displays an error message", function () {
          cy.wait("@subscribe")
          cy.getBySel("email-signup-icon-ready").should("not.exist")
          cy.getBySel("email-signup-icon-error").should("be.visible")
          cy.getBySel("email-signup-error-message").should(
            "contain.text",
            "Member Exists"
          )
        })
      })
    })
  })
})
