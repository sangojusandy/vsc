//Launch the site
describe('Flipkart validation', function() {
    //Launch the app and search for mobile
    it('should launch the app', function() {
        cy.visit("https://www.flipkart.com/");
        cy.contains('Mobiles').click();
        cy.get('[name="q"]').type('samsung');
        cy.get('[type="submit"]').click();
        cy.wait(6000);
    });

  });
