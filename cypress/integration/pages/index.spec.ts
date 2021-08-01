describe(`Home Page`, () => {
  describe(`<head>`, () => {
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.get("head").as("head");
    });

    it(`has a title`, () => {
      cy.title().should("eq", "Michael Utz | Web Developer");
    });

    it(`has an svg icon`, () => {
      cy.get("@head")
        .find("[data-cy=svg-favicon]")
        .should("have.attr", "rel", "icon")
        .should("have.attr", "type", "image/svg+xml")
        .and("have.attr", "href", "/assets/images/favicon.svg");
    });

    it(`has a png icon`, () => {
      cy.get("@head")
        .find("[data-cy=png-favicon]")
        .should("have.attr", "rel", "icon")
        .should("have.attr", "type", "image/png")
        .and("have.attr", "href", "/assets/images/favicon.png");
    });

    describe(`the page fonts`, () => {
      const url = "https://rsms.me/inter/inter.css";

      it(`should import the inter font family`, () => {
        cy.get("@head")
          .find("[data-cy=font-stylesheet]")
          .should("have.attr", "rel", "stylesheet")
          .should("have.attr", "href", url);
      });

      it(`should make a working request`, () => {
        cy.request(url).its("status").should("eq", 200);
      });
    });
  });
});
