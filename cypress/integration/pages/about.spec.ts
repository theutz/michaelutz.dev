describe(`About`, () => {
  before(() => {
    cy.visit("/about")
  })

  it(`loads`, () => {
    cy.getBySel("page-about").should("exist")
  })
})
