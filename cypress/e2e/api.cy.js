describe('API Data Validation - DummyJSON', () => {
    it('TC-07 Data Validation – Product', () => {
      cy.request('https://dummyjson.com/products/1').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.title).to.eq('Essence Mascara Lash Princess');
        cy.screenshot('TC-07-Product-Validation');  
      });
    });
  
    it('TC-08 Data Validation – Count', () => {
      cy.request('https://dummyjson.com/products').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.total).to.be.gte(30);
        cy.screenshot('TC-08-Count-Validation');  
      });
    });
});
