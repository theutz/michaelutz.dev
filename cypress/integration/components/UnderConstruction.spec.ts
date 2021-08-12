describe('<UnderConstruction />', () => {
  before(() => {
    cy.visit('/')
  })

  it('loads', () => {
    expect(true).to.eq(false)
  })
})
