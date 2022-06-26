describe('table transaction component', () => {
  describe('Basic', () => {
    beforeEach(() => cy.visit('http://localhost:3000'));


    it('should render the table transaction', () => {
      cy.get('[data-cy="table-transaction"]').should(
        'be.visible'
      );
      cy.get('[data-cy="e-commerce--table-transaction__transaction_status-md"]').should('be.visible');
      cy.get('[data-cy="e-commerce--table-transaction__image-md"]').should('be.visible');
      cy.get('[data-cy="e-commerce--table-transaction__money-md"]').should('be.visible');
      cy.get('[data-cy="e-commerce--table-transaction__transactionId-md"]').should('be.visible');
      cy.get('[data-cy="e-commerce--table-transaction__reference-md"]').should('be.visible');
      cy.get('[data-cy="e-commerce--table-transaction__date_hour-md"]').should('be.visible');
      cy.get('[data-cy="e-commerce--table-transaction__date-md"]').should('be.visible');
   
   
 /*
    it('should assign the props correctly', () => {
      cy.get('[data-cy="input-basic--label"]').should(
        'have.class',
        'block text-sm font-medium text-gray-700 capitalize'
      );

      cy.get('[data-cy="input-basic--label"]').should('contain.text', 'email');

      cy.get('[data-cy="input-basic--input"]').should(
        'have.class',
        'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
      );
      cy.get('[data-cy="input-basic--input"]').should(
        'have.attr',
        'type',
        'email'
      );
      cy.get('[data-cy="input-basic--input"]').should(
        'have.attr',
        'name',
        'email'
      );
      cy.get('[data-cy="input-basic--input"]').should(
        'have.attr',
        'id',
        'email'
      );
      cy.get('[data-cy="input-basic--input"]').should(
        'have.attr',
        'placeholder',
        'you@example.com'
      );*/
    }); 
  });
});
