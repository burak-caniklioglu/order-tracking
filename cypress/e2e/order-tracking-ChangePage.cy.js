/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
describe('Change Page Events', () => {
  it('Page events', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.contains('Accepted');
    cy.contains('Add New Order').click().wait(1000);
    cy.url().should('include', '/createOrder');
  });

});
