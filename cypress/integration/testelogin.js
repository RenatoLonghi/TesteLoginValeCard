/// <reference types="cypress"/>

it('teste login', function() {

    cy.visit('https://www.valecard.com.br/webAdm/pages/start.jsf')
    cy.get('ul > :nth-child(2) > input').type('testeemail@email.com.br')
    cy.get('ul > :nth-child(3) > input').type('Swordfish')
    cy.get(':nth-child(4) > input').click()
    

})