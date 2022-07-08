describe('Login component', () => {
  describe('Basic', () => {
    beforeEach(() => cy.visit('http://localhost:3000'));


    it('should render the Login', () => {
      cy.get('[data-cy="login"]').should(
        'be.visible'
      );
      cy.get('[data-cy="login-input_user--label"]').should('be.visible');
      cy.get('[data-cy="login-input_user--input"]').should('be.visible');
      cy.get('[data-cy="login-input_password--label"]').should('be.visible');
      cy.get('[data-cy="login-input_password--input"]').should('be.visible');
      cy.get('[data-cy="login-send__button-normal"]').should('be.visible');
      
    }); 

    it('should login correctly', () => {
      cy.get('[data-cy="login"]').should('be.visible');
      cy.get('[data-cy="login-input_user--input"]').type('cristian');
      cy.get('[data-cy="login-input_password--input"]').type('1234');;
      cy.get('[data-cy="login-send__button-normal"]').should('be.visible');
      cy.get('[data-cy="login-send__button-normal"]').click();
      cy.get('[data-cy="table-transaction__transaction_status-md"]').should('be.visible');
    }); 

    it('should wrong login', () => {
      cy.get('[data-cy="login"]').should('be.visible');
      cy.get('[data-cy="login-input_user--input"]').type('Juan');
      cy.get('[data-cy="login-input_password--input"]').type('1234');;
      cy.get('[data-cy="login-send__button-normal"]').should('be.visible');
      cy.get('[data-cy="login-send__button-normal"]').click();
      cy.get('[data-cy="table-transaction__transaction_status-md"]').should('not.exist');
    }); 
   
   
  });
});
