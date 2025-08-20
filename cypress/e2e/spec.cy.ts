describe('firtness tracker', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('renders heading title - Weekly excerice summary', () => {
    cy.contains('Weekly exercise summary').should('exist');
  });

  it('renders table headers',()=>{
    cy.get('table thead').within(() => {
      cy.contains('Date').should('exist');
      cy.contains('Calories Burnt').should('exist');
      cy.contains('Steps').should('exist');
    });
  });

  
})