describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://www.google.com')
      cy.get('#APjFqb').type("sehwag")
    })
  })