// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('http://marketing.localhost')
    cy.contains('h1', 'Find Hidden Interests')
  })
})
