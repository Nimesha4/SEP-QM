describe('TC-03: Valid Form Submission', () => {
    it('fills form and submits successfully', () => {
      cy.visit('https://demoqa.com/automation-practice-form');
      
      cy.get('#firstName').type('John');
      cy.get('#lastName').type('Doe');
      cy.get('#userEmail').type('john.doe@example.com');
      cy.get('label[for="gender-radio-1"]').click(); 
      cy.get('#userNumber').type('1234567890');
      cy.get('#dateOfBirthInput').click();
      cy.get('.react-datepicker__day--015').click(); 
      cy.get('#subjectsInput').type('Maths{enter}');
      cy.get('label[for="hobbies-checkbox-1"]').click(); 
      cy.get('#currentAddress').type('123 Street');
      cy.get('#state').click().get('#react-select-3-option-0').click(); 
      cy.get('#city').click().get('#react-select-4-option-0').click(); 

      cy.screenshot('TC-03-Fill-Form');  
      cy.get('#submit').click();
      cy.screenshot('TC-03-Submit-Form');  
      cy.get('#example-modal-sizes-title-lg')
        .should('contain', 'Thanks for submitting the form');
      cy.screenshot('TC-03-Success');  
    });
});


