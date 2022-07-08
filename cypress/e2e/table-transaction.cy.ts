describe('table transaction component', () => {
  describe('Basic', () => {
    beforeEach(() => cy.visit('http://localhost:3000'));


    it('should render the table transaction', () => {
      
      cy.get('[data-cy="login-input_user--input"]').type('cristian');
      cy.get('[data-cy="login-input_password--input"]').type('1234');;
      cy.get('[data-cy="login-send__button-normal"]').click();


      cy.get('[data-cy="table-transaction"]').should('be.visible');
      cy.get('[data-cy="table-transaction__transaction_status-md"]').should('be.visible');
      cy.get('[data-cy="table-transaction__image-md"]').should('be.visible');
      cy.get('[data-cy="table-transaction__money-md"]').should('be.visible');
      cy.get('[data-cy="table-transaction__transactionId-md"]').should('be.visible');
      cy.get('[data-cy="table-transaction__reference-md"]').should('be.visible');
      cy.get('[data-cy="table-transaction__date_hour-md"]').should('be.visible');
      cy.get('[data-cy="table-transaction__date-md"]').should('be.visible');
  
    }); 
  });
});
