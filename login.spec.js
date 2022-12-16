describe('Login form', () => {
  it('Submits login form with correct credentials', () => {
    cy.visit('https://example.com/login')

    cy.get('#username').type('Aneal')
    cy.get('#password').type('Hello')
    cy.get('#login-button').click()

    cy.title().should('include', 'Dashboard')
  })
})
