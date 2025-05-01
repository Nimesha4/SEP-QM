describe('TC-04: Form – Invalid Submission', () => {
    it('does not allow submission with blank fields', () => {
      cy.visit('https://demoqa.com/automation-practice-form');
      
      cy.screenshot('TC-04-Initial-Form'); 
      cy.get('#submit').click();
      cy.screenshot('TC-04-Submit-Blank'); 

      cy.get('#firstName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.screenshot('TC-04-Error-Validation'); 

      cy.get('#example-modal-sizes-title-lg').should('not.exist');
    });
});