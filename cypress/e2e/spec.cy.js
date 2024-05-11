describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com/')
    cy.get('#APjFqb').type('shopping malls near me')
    cy.contains('shopping malls near me').click()
    
    let j=100;
    for (let i = 0; i < 3; i++) {
     
      cy.scrollTo(j,screenTop)  
      cy.wait(2000)
      j=j+100;
      //test
    }  

  })
})
