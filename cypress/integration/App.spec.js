describe('App', () => {
  it('visit the page', () => {
    cy.visit('http://localhost:3000/');
  });

  it('has wrapper', () => {
    cy.get('[class*=App]').should('have.length', 1);
  });

  it('has accordion child', () => {
    cy.get('[class*=App]').children('[class*=Accordion_accordion]').should('have.length', 1);
    // .should('be.gte', 4)
  });
});
