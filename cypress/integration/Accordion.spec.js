describe('Accordion', () => {
  it('visit the page', () => {
    cy.visit('http://localhost:3000/');
  });

  it('wrapper accordion is present', () => {
    cy.get('dl[class*=Accordion_accordion]').should('have.length', 1);
  });

  it('wrapper accordion has entries', () => {
    cy.get('dt[class*=Accordion_title]').its('length').should('be.gte', 3);
  });

  it('wrapper accordion has titles', () => {
    cy.get('a[class*=Accordion_title-link]').its('length').should('be.gte', 3);
  });

  it('wrapper accordion has answers to entries', () => {
    cy.get('dd[class*=Accordion_answer]').its('length').should('be.gte', 3);
  });

  it('clicking on not expanded title expands entry', () => {
    cy.get('a[class*=Accordion_title-link]').first().click();
    cy.get('dt[class*=Accordion_title]').first().should('have.attr', 'aria-expanded', 'true');
  });

  it('clicking on expanded title contracts entry', () => {
    cy.get('a[class*=Accordion_title-link]').first().click();
    cy.get('dt[class*=Accordion_title]').first().should('have.attr', 'aria-expanded', 'false');
  });
});
