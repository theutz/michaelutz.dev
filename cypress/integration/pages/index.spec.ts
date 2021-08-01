describe(`Home Page`, () => {
  it(`should work`, () => {
    cy.visit("/");

    cy.title().should("eq", "Michael Utz | Web Developer");
  });
});

export {};
