describe('Navigation Tests - Herokuapp', () => {
    const baseUrl = 'https://the-internet.herokuapp.com';
  
    it('TC-05 Navigation – Login Page', () => {
      cy.visit(baseUrl);
      cy.contains('Form Authentication').click();
      cy.url().should('include', '/login');
      cy.contains('Login Page').should('be.visible');
      cy.screenshot('TC-05-Navigation-Login');  
    });
  
    it('TC-06 Navigation – Dropdown Page', () => {
      cy.visit(baseUrl);
      cy.contains('Dropdown').click();
      cy.url().should('include', '/dropdown');
      cy.contains('Dropdown List').should('be.visible');
      cy.screenshot('TC-06-Navigation-Dropdown'); 
    });
});
