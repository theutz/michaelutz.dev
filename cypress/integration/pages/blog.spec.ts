describe('Blog Page', () => {
  before(() => {
    cy.visit('/blog')
  })

  it('loads', () => {
    cy.getBySel('page-blog')
  })
})
