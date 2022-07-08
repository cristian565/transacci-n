describe('Details component', () => {
  describe('Basic', () => {
    beforeEach(() => cy.visit('http://localhost:3000'));

    it('should render the details', () => {
      cy.get('[data-cy="login"]').should('be.visible');
      cy.get('[data-cy="login-input_user--input"]').type('cristian');
      cy.get('[data-cy="login-input_password--input"]').type('1234');;
      cy.get('[data-cy="login-send__button-normal"]').should('be.visible');
      cy.get('[data-cy="login-send__button-normal"]').click();
      cy.get('[data-cy="table-transaction__transaction_status-md"]').should('be.visible');
      cy.get('[id^=1111]').should('be.visible');
      cy.contains('1111').click()
      cy.get('[data-cy="details--transaction"]').should('be.visible');
      
    }); 
   
  });
});
