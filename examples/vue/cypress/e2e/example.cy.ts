// https://on.cypress.io/api

describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/') // Ajuste conforme o path da sua aplicação
  })

  it('should select an option', () => {
    // Simular a digitação da letra 'f'
    cy.get('#select').click({ force: true })
    cy.get('.v-list-item').contains('22').click()
    cy.get('#select').should('have.value', '22')
  })
})
