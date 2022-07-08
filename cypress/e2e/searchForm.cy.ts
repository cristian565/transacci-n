describe('SearchForm component', () => {
  describe('Basic', () => {
    beforeEach(() => cy.visit('http://localhost:3000'));

    it('should render the details', () => {
      cy.get('[data-cy="login"]').should('be.visible');
      cy.get('[data-cy="login-input_user--input"]').type('cristian');
      cy.get('[data-cy="login-input_password--input"]').type('1234');;
      cy.get('[data-cy="login-send__button-normal"]').click();
      cy.get('[data-cy="search--form-button-normal__md"]').click();
      cy.get('[data-cy="search-form"]').should('be.visible');
       
    }); 
    it('should render a correct search', () => {
      cy.get('[data-cy="login"]').should('be.visible');
      cy.get('[data-cy="login-input_user--input"]').type('cristian');
      cy.get('[data-cy="login-input_password--input"]').type('1234');
      cy.get('[data-cy="login-send__button-normal"]').click();
      cy.get('[data-cy="search--form-button-normal__md"]').click();
      cy.get('[data-cy="search-form"]').should('be.visible');
      cy.get('[data-cy="search-form__stateOrders--select"]').should('be.visible');
      cy.get('[data-cy="search-form__stateOrders--select"]').click();;
           cy.get('[data-cy="search-form__stateOrders--select__option"]').eq("DECLINED").click();;


      }); 

  });
});
